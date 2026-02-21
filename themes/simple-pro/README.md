# Simple Pro - Professional Business Website Theme

Un tema Hugo moderno e professionale per siti web aziendali single-page, con design dark, funzionalità complete e piena conformità GDPR.

## ✨ Caratteristiche Principali

### 🎨 Design & UI
- **Design Dark Professionale**: Tema scuro con gradienti arancioni eleganti
- **Responsive al 100%**: Ottimizzato per tutti i dispositivi e dimensioni schermo
- **Header Sticky**: Navigazione sempre accessibile con logo e numero di telefono
- **Gallery Hero**: Slideshow automatico di immagini nella sezione hero
- **Animazioni Fluide**: Transizioni e animazioni moderne e performanti

### 📋 Sezioni Incluse
- **Hero con Gallery**: Slideshow automatico con controlli e indicatori
- **Chi Siamo**: Presentazione aziendale con highlights
- **Servizi**: Grid di servizi con icone e features
- **CTA Card**: Call-to-action prominente per conversioni
- **Contatti**: Form completo + informazioni di contatto
- **Footer**: Footer professionale multi-colonna con social links

### 🔒 GDPR & Privacy
- **Cookie Banner**: Banner informativo con gestione consenso
- **Privacy Policy**: Modale completa e parametrica
- **Cookie Policy**: Informativa dettagliata sui cookie utilizzati
- **Gestione Consensi**: Sistema completo di gestione preferenze utente

### 🚀 Features Tecniche
- **Schema.org Microdata**: Markup strutturato per LocalBusiness
- **SEO Ottimizzato**: Meta tags, Open Graph, sitemap
- **Form di Contatto**: Validazione client-side e integrazione backend
- **Gallery Automatica**: Autoplay, controlli touch/swipe, keyboard navigation
- **Accessibilità**: ARIA labels, navigazione da tastiera, alt text

## 📦 Installazione

### 1. Copia il Tema

```bash
cd your-hugo-site/
cp -r /path/to/simple-pro themes/
```

### 2. Configura Hugo

Copia il file di configurazione:

```bash
cp themes/simple-pro/hugo.toml.example hugo.toml
```

Modifica `hugo.toml` secondo le tue esigenze:

```toml
baseURL = "https://tuosito.com/"
languageCode = "it"
title = "La Tua Azienda"
theme = "simple-pro"
```

### 3. Configura i Contenuti

Crea il file dati:

```bash
mkdir -p data/
cp data/simple-pro.example.json data/content.json
```

Modifica `data/content.json` con i tuoi contenuti.

## ⚙️ Configurazione

Il tema è completamente parametrico tramite il file `data/content.json`. Di seguito le sezioni principali:

### SEO & Meta Tags

```json
{
  "seo": {
    "title": "Titolo del sito",
    "description": "Descrizione per i motori di ricerca",
    "keywords": "keyword1, keyword2, keyword3",
    "ogTitle": "Titolo Open Graph",
    "ogImage": "URL immagine condivisione social"
  }
}
```

### Informazioni Azienda

```json
{
  "company": {
    "name": "Nome Azienda",
    "description": "Descrizione breve dell'azienda",
    "logoUrl": "URL del logo",
    "vatNumber": "P.IVA",
    "priceRange": "$$",
    "openingHours": ["Mo-Fr 08:00-18:00"]
  }
}
```

### Hero & Gallery

```json
{
  "hero": {
    "title": "Titolo principale",
    "subtitle": "Sottotitolo descrittivo"
  },
  "gallery": {
    "images": [
      {
        "url": "https://...",
        "alt": "Descrizione immagine"
      }
    ]
  }
}
```

**Nota Gallery**: 
- Supporta numero illimitato di immagini
- Autoplay ogni 5 secondi (configurabile in `gallery.js`)
- Controlli: frecce, indicatori, tastiera, touch/swipe

### Chi Siamo

```json
{
  "about": {
    "title": "Chi Siamo",
    "subtitle": "Sottotitolo sezione",
    "paragraphs": [
      "Primo paragrafo...",
      "Secondo paragrafo..."
    ],
    "highlights": [
      {
        "icon": "award",
        "title": "Titolo highlight",
        "description": "Descrizione"
      }
    ]
  }
}
```

**Icone disponibili**: Tutte le icone di [Font Awesome 6](https://fontawesome.com/icons) (free).

### Servizi

```json
{
  "services": {
    "title": "I Nostri Servizi",
    "subtitle": "Sottotitolo",
    "items": [
      {
        "icon": "wrench",
        "title": "Nome servizio",
        "description": "Descrizione servizio",
        "features": [
          "Feature 1",
          "Feature 2"
        ]
      }
    ]
  }
}
```

### Call-to-Action

```json
{
  "cta": {
    "icon": "phone-volume",
    "title": "Titolo CTA",
    "description": "Descrizione CTA",
    "buttonText": "Testo bottone"
  }
}
```

### Contatti

```json
{
  "contact": {
    "formTitle": "Contattaci",
    "formSubtitle": "Sottotitolo form",
    "formAction": "https://formspree.io/f/YOUR_FORM_ID",
    "phone": "+39 02 1234 5678",
    "email": "info@esempio.it",
    "address": {
      "street": "Via Roma 123",
      "city": "Milano",
      "zip": "20121",
      "country": "IT"
    },
    "hours": [
      "Lun-Ven: 08:00-18:00",
      "Emergenze: H24"
    ]
  }
}
```

**Form Backend**:
- Formspree: https://formspree.io/
- Netlify Forms: https://www.netlify.com/products/forms/
- EmailJS: https://www.emailjs.com/
- Custom backend endpoint

### Privacy Policy

La privacy policy è completamente parametrica nel file JSON:

```json
{
  "privacy": {
    "sections": [
      {
        "title": "1. Titolo sezione",
        "paragraphs": [
          "Paragrafo 1",
          "Paragrafo 2"
        ]
      }
    ]
  }
}
```

### Cookie Policy

Anche la cookie policy è parametrica con supporto per tabelle:

```json
{
  "cookies": {
    "bannerText": "Testo banner cookie",
    "sections": [
      {
        "title": "Titolo sezione",
        "paragraphs": ["Testo..."],
        "table": [
          {
            "name": "nome-cookie",
            "type": "Tecnico",
            "duration": "1 anno",
            "purpose": "Scopo del cookie"
          }
        ]
      }
    ]
  }
}
```

## 🎨 Personalizzazione CSS

Le variabili CSS principali sono definite in `static/css/style.css`:

```css
:root {
    /* Colori Primari */
    --primary-color: #f97316;      /* Arancione principale */
    --primary-dark: #ea580c;       /* Arancione scuro */
    --accent-color: #f59e0b;       /* Colore accento */
    
    /* Sfondi */
    --bg-primary: #0a0a0a;         /* Sfondo principale */
    --bg-card: #1f1f1f;            /* Sfondo card */
    
    /* Testo */
    --text-primary: #ffffff;       /* Testo principale */
    --text-secondary: #a3a3a3;     /* Testo secondario */
}
```

Puoi modificare questi valori per cambiare il tema colori del sito.

## 📱 Responsive Design

Il tema è completamente responsive con breakpoints:

- **Desktop**: > 968px
- **Tablet**: 640px - 968px  
- **Mobile**: < 640px

## 🔧 Sviluppo e Build

### Sviluppo Locale

```bash
hugo server -D
# Apri http://localhost:1313
```

### Build Produzione

```bash
hugo --minify
# Output in public/
```

### Deploy

Il tema funziona con qualsiasi hosting statico:

```bash
# Netlify
netlify deploy --prod

# Vercel
vercel --prod

# Cloudflare Pages
wrangler pages publish public --project-name=your-project

# GitHub Pages
# Commit e push della cartella public/
```

## 📁 Struttura del Tema

```
simple-pro/
├── archetypes/
│   └── default.md
├── layouts/
│   └── index.html              # Template principale
├── static/
│   ├── css/
│   │   └── style.css           # Stili principali
│   ├── js/
│   │   ├── navigation.js       # Navigazione e modali
│   │   ├── gallery.js          # Slideshow gallery
│   │   ├── cookie.js           # Gestione cookie banner
│   │   └── form.js             # Validazione form contatti
│   └── images/
│       └── default-logo.svg    # Logo placeholder
├── hugo.toml.example           # Configurazione esempio
├── theme.toml                  # Metadata tema
└── README.md                   # Questo file
```

## 🌐 Browser Supportati

- Chrome/Edge (ultime 2 versioni)
- Firefox (ultime 2 versioni)
- Safari (ultime 2 versioni)
- iOS Safari 12+
- Android Chrome 8+

## ♿ Accessibilità

Il tema rispetta le linee guida WCAG 2.1:

- Navigazione da tastiera completa
- ARIA labels su tutti gli elementi interattivi
- Contrasto colori adeguato
- Testo alternativo per immagini
- Focus visibile su elementi interattivi

## 🔐 Sicurezza & Privacy

### GDPR Compliance

Il tema include:
- Cookie banner con gestione consenso
- Privacy policy completa
- Cookie policy dettagliata
- Gestione preferenze utente
- No tracking senza consenso

### Best Practices

- HTTPS obbligatorio (configurare sul server)
- CSP headers (configurare sul server)
- Form validation client e server-side
- Protezione XSS/CSRF (backend)

## 🐛 Troubleshooting

### Il form non invia

1. Verifica `formAction` in `data/content.json`
2. Configura il backend (Formspree, Netlify Forms, ecc.)
3. Modifica `form.js` se usi un endpoint custom

### Le immagini della gallery non si vedono

1. Verifica gli URL in `gallery.images`
2. Controlla CORS se le immagini sono su altro dominio
3. Usa URL assoluti (https://...)

### Il cookie banner non appare

1. Cancella i cookie del browser
2. Verifica che il banner non sia già stato accettato
3. Controlla la console per errori JS

### Problemi di layout mobile

1. Cancella cache del browser
2. Verifica che non ci siano CSS custom che sovrascrivono
3. Testa con DevTools in modalità device

## 📚 Risorse

- **Hugo Docs**: https://gohugo.io/documentation/
- **Font Awesome Icons**: https://fontawesome.com/icons
- **Google Fonts**: https://fonts.google.com/
- **Unsplash Images**: https://unsplash.com/

## 🤝 Supporto

Per problemi o domande:

1. Leggi questa documentazione
2. Controlla il file `data/simple-pro.example.json`
3. Consulta i commenti nel codice
4. Apri una issue su GitHub

## 📄 Licenza

MIT License - Libero per uso commerciale e personale.

## 🚀 Prossimi Sviluppi

- [ ] Multilingua (i18n)
- [ ] Blog integrato
- [ ] Portfolio/Gallery separata
- [ ] Light mode
- [ ] Più varianti colori
- [ ] Integrazione Google Maps

---

**Creato con ❤️ per Hugo**

Ultimo aggiornamento: 21 Febbraio 2026
