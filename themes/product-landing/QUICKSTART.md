# Guida Rapida - Product Landing Theme

## 🚀 Setup Veloce (5 minuti)

### 1. Prepara il progetto

```bash
cd /Users/andrea/Projects/sitebuilder

# Copia il tema (se non l'hai già fatto)
# Il tema è già in themes/product-landing

# Copia il file di configurazione
cp themes/product-landing/hugo.toml.example hugo.toml

# Copia i dati di esempio
cp data/product-landing.example.json data/content.json
```

### 2. Configura Hugo

Modifica `hugo.toml` e cambia almeno questi valori:

```toml
baseURL = "https://your-product.com/"
title = "Il Tuo Prodotto - Titolo"
theme = "product-landing"
```

### 3. Avvia Hugo

```bash
hugo server -D
```

Apri http://localhost:1313 nel browser.

### 4. Personalizza il Contenuto

Modifica `data/content.json`:

**Minimo indispensabile da cambiare:**
- `product.name` - Nome del tuo prodotto
- `hero.title` - Titolo principale
- `hero.subtitle` - Sottotitolo
- `hero.image` - URL immagine hero
- `features.items` - Le caratteristiche del prodotto
- `pricing.plans` - I tuoi piani di prezzo

### 5. Personalizza i Colori

Apri `themes/product-landing/static/css/style.css` e modifica:

```css
:root {
    --primary-color: #YOUR_COLOR;
    --secondary-color: #YOUR_COLOR;
    --accent-color: #YOUR_COLOR;
}
```

**Tool consigliati per scegliere colori:**
- [Coolors.co](https://coolors.co) - Generatore palette
- [ColorHunt](https://colorhunt.co) - Palette popolari

## 🎨 Palette Colori Pronte

Copia e incolla una di queste nel tuo CSS:

### Modern Blue
```css
--primary-color: #3b82f6;
--secondary-color: #06b6d4;
--accent-color: #8b5cf6;
```

### Vibrant Purple
```css
--primary-color: #6366f1;
--secondary-color: #8b5cf6;
--accent-color: #ec4899;
```

### Fresh Green
```css
--primary-color: #10b981;
--secondary-color: #34d399;
--accent-color: #14b8a6;
```

### Bold Orange
```css
--primary-color: #f97316;
--secondary-color: #fb923c;
--accent-color: #fbbf24;
```

## 📝 Checklist Contenuti

Prima di andare in produzione, assicurati di:

- [ ] Cambiare tutti i testi di esempio
- [ ] Aggiungere immagini reali del prodotto
- [ ] Impostare prezzi corretti
- [ ] Scrivere FAQ rilevanti
- [ ] Aggiungere testimonials reali (o rimuovere la sezione)
- [ ] Configurare form di contatto (se presente)
- [ ] Aggiungere link social reali
- [ ] Impostare Google Analytics (opzionale)
- [ ] Testare su mobile
- [ ] Ottimizzare immagini (usa TinyPNG)

## 🖼️ Dove Trovare Immagini

### Gratis e di qualità:
- [Unsplash](https://unsplash.com) - La migliore
- [Pexels](https://pexels.com)
- [Pixabay](https://pixabay.com)

### Ricerche consigliate:
- "laptop workspace"
- "team meeting"
- "dashboard mockup"
- "mobile app"
- "technology"

### Screenshot del Prodotto:
Se hai un prodotto digitale, usa screenshot reali! Aggiungi:
- Mockup su dispositivi: [Mockuper](https://mockuper.net)
- Rimozione background: [Remove.bg](https://remove.bg)

## 🚢 Deployment

### Cloudflare Pages

```bash
# Build del sito
hugo --minify

# La cartella public/ contiene il sito
# Caricala su Cloudflare Pages
```

### Netlify

1. Connetti il repository GitHub
2. Build command: `hugo --minify`
3. Publish directory: `public`

### Vercel

Stesso processo di Netlify, supporto nativo Hugo.

## ⚡ Ottimizzazioni

### Prestazioni:
```bash
# Build ottimizzato
hugo --minify --gc

# Comprimi immagini con TinyPNG prima dell'upload
```

### SEO:
- Compila tutti i campi in `seo` nel content.json
- Usa immagini con alt text descrittivo
- Crea una sitemap (Hugo lo fa automaticamente)

## 🐛 Problemi Comuni

**Il tema non si vede:**
```bash
# Verifica nel hugo.toml:
theme = "product-landing"

# Verifica che esista:
ls themes/product-landing
```

**Errori JSON:**
```bash
# Valida il tuo content.json:
# Usa https://jsonlint.com
```

**Immagini non caricate:**
- Usa URL completi (https://...)
- Oppure metti in /static/images/

## 📞 Prossimi Passi

1. **Testa tutto** - Clicca ogni bottone, apri ogni sezione
2. **Mobile test** - Ridimensiona il browser
3. **Ottimizza SEO** - Compila meta tags
4. **Analytics** - Aggiungi Google Analytics/Plausible
5. **Deploy** - Vai live!

## 🎓 Risorse Utili

- [Hugo Docs](https://gohugo.io/documentation/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Can I Use](https://caniuse.com) - Browser compatibility

---

**Hai domande?** Controlla il README.md completo nel tema!
