# João Pereira — Portfolio

Website pessoal / portefólio profissional de **João Pereira** — Técnico de Gestão e
Programação de Sistemas Informáticos (IT · Sistemas · Infraestruturas · Redes · Desenvolvimento).

🔗 **Produção:** https://joaopereira.io

---

## Descrição

Site estático, rápido e responsivo, construído para ser alojado no **GitHub Pages** com
domínio personalizado. Não depende de qualquer backend — tudo é client-side.

## Tecnologias

- **HTML5** semântico
- **CSS3** puro (variáveis, grid, flexbox, dark/light mode)
- **JavaScript** vanilla (sem frameworks nem dependências)
- Fontes: Inter · Space Grotesk · JetBrains Mono (Google Fonts)

Sem build step, sem `node_modules`. Basta abrir o `index.html`.

## Estrutura do projecto

```
/
├── index.html          # Página única (todas as secções)
├── css/
│   └── style.css        # Estilos + temas + responsividade
├── js/
│   └── script.js        # Tema, menu, animações, contadores
├── assets/
│   ├── images/          # profile.jpg, og-image.png
│   │   └── projects/     # screenshots dos projectos
│   ├── icons/            # favicon.svg
│   └── cv/               # Joao-Pereira-CV.pdf
├── CNAME                 # domínio personalizado (joaopereira.io)
├── robots.txt
├── sitemap.xml
├── .nojekyll             # evita processamento Jekyll no GitHub Pages
└── README.md
```

## Como executar localmente

Não precisa de build. Basta um servidor estático simples (para os caminhos relativos
funcionarem correctamente):

```bash
# Opção 1 — Python
python -m http.server 8080

# Opção 2 — Node
npx serve .
```

Depois abre `http://localhost:8080`. (Também podes simplesmente abrir o `index.html` no browser.)

## Como fazer build

Não há build — o site já é o resultado final. Publica os ficheiros tal como estão.

## Como publicar no GitHub Pages

1. Cria/usa o repositório: `https://github.com/Joners1108/joaopereira.io`
2. Faz commit e push de todos os ficheiros para o branch `main`.
   ```bash
   git init
   git add .
   git commit -m "Portfolio inicial"
   git branch -M main
   git remote add origin https://github.com/Joners1108/joaopereira.io.git
   git push -u origin main
   ```
3. No GitHub: **Settings → Pages → Build and deployment → Source: `Deploy from a branch`**,
   branch `main`, pasta `/ (root)`. Guarda.
4. Aguarda alguns minutos. O ficheiro `CNAME` já define o domínio automaticamente.

## Como configurar o domínio `joaopereira.io`

O ficheiro `CNAME` já contém `joaopereira.io`. No teu registrar de domínio, configura o **DNS**:

**Registos A** (apex `joaopereira.io`) a apontar para os IPs do GitHub Pages:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Registo CNAME** para o subdomínio `www`:
```
www  ->  joners1108.github.io
```

Em **Settings → Pages**, confirma o domínio e activa **Enforce HTTPS** (pode demorar até
o certificado ser emitido).

## Como substituir conteúdo

| O quê | Onde |
|-------|------|
| **Fotografia** | `assets/images/profile.jpg` |
| **Imagem OG (partilha)** | `assets/images/og-image.png` (1200×630) |
| **Screenshots dos projectos** | `assets/images/projects/*.jpg` (16:9) |
| **CV** | `assets/cv/Joao-Pereira-CV.pdf` |
| **Links GitHub/Demo dos projectos** | procura `[ADICIONAR LINK]` no `index.html` |
| **GitHub / LinkedIn / Email** | secções *Contacto* e *Footer* no `index.html` |

> ⚠️ Os projectos têm links `[ADICIONAR LINK]` e imagens em falta com fallback visual.
> Substitui-os assim que tiveres os URLs/imagens reais.

## Notas

- Respeita `prefers-reduced-motion`.
- Acessível: HTML semântico, `alt`, `aria-label`, navegação por teclado, focus states.
- Idioma: **Português de Portugal**.
