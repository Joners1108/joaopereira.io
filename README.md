# João Pereira — Portfolio

Website pessoal / portefólio profissional de **João Pereira** — Técnico de Gestão e
Programação de Sistemas Informáticos (IT · Sistemas · Infraestruturas · Redes · Desenvolvimento).

🔗 **Online:** https://joners1108.github.io/joaopereira.io/

---

## Descrição

Site estático, rápido e responsivo, alojado no **GitHub Pages**. Não depende de qualquer
backend — tudo é client-side (HTML, CSS e JavaScript).

## Tecnologias

- HTML5 semântico
- CSS3 puro (variáveis, grid, flexbox, dark/light mode)
- JavaScript vanilla (sem frameworks nem dependências)
- Fontes: Inter · Space Grotesk · JetBrains Mono

Sem build e sem `node_modules`.

## Estrutura do projecto

```
/
├── index.html            # Página única (todas as secções)
├── css/style.css         # Estilos, temas e responsividade
├── js/script.js          # Tema, menu, animações, contadores
├── assets/
│   ├── images/projects/  # Imagens dos projectos
│   ├── icons/            # favicon.svg
│   └── cv/               # Joao-Pereira-CV.pdf
├── robots.txt
├── sitemap.xml
├── .nojekyll
└── README.md
```

## Como executar localmente

Não precisa de build. Usa um servidor estático simples:

```bash
python -m http.server 8080
```

Depois abre `http://localhost:8080`.

## Como publicar (GitHub Pages)

1. Faz commit e push dos ficheiros para o branch `main`.
2. No GitHub: **Settings → Pages → Source: Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. Aguarda alguns minutos. O site fica em https://joners1108.github.io/joaopereira.io/

## Secções

Início · Sobre · Números · Experiência · Competências · Projectos · Formação ·
Competências pessoais · Contacto.

## Acessibilidade & SEO

- HTML semântico, `alt`, `aria-label`, navegação por teclado, focus states.
- Respeita `prefers-reduced-motion`.
- Meta description, Open Graph, Twitter cards, JSON-LD (Person), `robots.txt`, `sitemap.xml`.

Idioma: **Português de Portugal**.
