# Bleach · 魂の記録 — Fichas de RPG

Site estático de fichas de RPG de Bleach (Shinigami, Hollow, Quincy e Fullbringer), baseado no Modelo de Ficha Base.

## Como hospedar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `bleach-fichas`).
2. Envie os arquivos `index.html` e `regras.js` (juntos, na mesma pasta) para a raiz do repositório (botão **Add file → Upload files**).
3. Vá em **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`.
5. Salve e aguarde alguns minutos. O site ficará em `https://SEU-USUARIO.github.io/bleach-fichas/`.

## Recursos

- Ficha completa: informações gerais, progressão, recursos vitais (com barras), 5 atributos e 21 perícias
- Modificadores de atributo pela Tabela de Modificadores (1 = −5 … 30 = +10)
- **Calcular pela raça**: HP, Reiatsu, CA e deslocamento a partir de raça/forma, nível e modificadores
- Especialidades de raça (4 níveis), qualidades e defeitos (máx. 3, em número igual)
- Aba **Regras** com todo o sistema
- Regras editáveis em `regras.js`
- Tema de cor muda conforme a raça
- Salvamento automático no navegador (localStorage), com vários personagens
- Exportar/Importar JSON, copiar no formato do modelo (Discord) e imprimir/PDF
- Acessível: navegação por teclado, foco visível, leitores de tela, contraste alto e `prefers-reduced-motion`

> As fichas ficam no navegador de cada jogador. Para compartilhar, use Exportar JSON.
