(function () {
  'use strict';

  var header = document.querySelector('.header');
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  var body = document.body;

  // Header com fundo ao fazer scroll
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menu mobile
  function setNav(open) {
    body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }
  toggle.addEventListener('click', function () {
    setNav(!body.classList.contains('nav-open'));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setNav(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setNav(false);
  });

  // Animações de entrada
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = (i % 3) * 80 + 'ms';
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Link ativo no menu
  var links = document.querySelectorAll('.nav__list a');
  var sections = Array.prototype.map.call(links, function (a) {
    return document.querySelector(a.getAttribute('href'));
  });
  if ('IntersectionObserver' in window) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { if (s) navObserver.observe(s); });
  }

  // Formulário de marcação — abre o cliente de email com o pedido preenchido
  var form = document.getElementById('bookingForm');
  var status = document.getElementById('formStatus');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var invalid = [];
    ['nome', 'telefone', 'consentimento'].forEach(function (name) {
      var field = form.elements[name];
      var ok = field.type === 'checkbox' ? field.checked : field.value.trim() !== '';
      field.classList.toggle('is-invalid', !ok);
      if (!ok) invalid.push(field);
    });
    var email = form.elements.email;
    if (email.value && !email.checkValidity()) {
      email.classList.add('is-invalid');
      invalid.push(email);
    } else {
      email.classList.remove('is-invalid');
    }

    if (invalid.length) {
      status.className = 'form__status is-error';
      status.textContent = 'Por favor preencha os campos obrigatórios e aceite o tratamento de dados.';
      invalid[0].focus();
      return;
    }

    var d = form.elements;
    var bodyText = [
      'Nome: ' + d.nome.value,
      'Telefone: ' + d.telefone.value,
      'Email: ' + (d.email.value || '—'),
      'Serviço: ' + d.servico.value,
      '',
      d.mensagem.value
    ].join('\n');

    window.location.href = 'mailto:geral.fisioprestige@gmail.com' +
      '?subject=' + encodeURIComponent('Pedido de marcação — ' + d.nome.value) +
      '&body=' + encodeURIComponent(bodyText);

    status.className = 'form__status is-ok';
    status.textContent = 'Obrigado! O seu programa de email foi aberto com o pedido. Se preferir, ligue 22 404 8924.';
  });

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
