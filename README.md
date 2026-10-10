# FisioPrestige — Saúde por Excelência

Site institucional da clínica de fisioterapia **FisioPrestige** (Ermesinde).

Site estático (HTML + CSS + JS, sem dependências nem build). Basta abrir `index.html`
ou publicar a pasta em qualquer alojamento estático (GitHub Pages, Netlify, Vercel…).

## Estrutura

```
index.html           Página única: hero, clínica, serviços, abordagem, espaço, FAQ, marcação, contactos
css/styles.css       Estilos (paleta e tipografia em variáveis no topo)
js/main.js           Menu mobile, animações, formulário de marcação (mailto)
assets/logo-mark.svg Monograma FP em vetor
assets/img/          Fotografias da clínica e logótipo original
```

## Identidade visual

| Cor | Hex | Uso |
| --- | --- | --- |
| Azul Petróleo | `#25739B` | Confiança, ações secundárias |
| Dourado Champagne | `#C6A473` | Destaques, botões principais |
| Cinza Antracite | `#4A4A4A` | Texto base |
| Branco / Fundo | `#FFFFFF` / `#F8F9FA` | Fundos |

Tipografia: **Montserrat** (títulos) e **Inter** (texto), via Google Fonts.

## A confirmar com a clínica

- Horário de funcionamento (secção Contactos — marcado com `TODO` no HTML)
- Lista final de serviços e equipa
- Acordos com seguros / subsistemas
- Formulário: atualmente abre o email do visitante (`mailto`). Para receber pedidos
  diretamente, ligar a um serviço como Formspree ou Netlify Forms.
