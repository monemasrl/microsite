# Under Construction Pro - Hugo Theme

Un tema Hugo **professionale con design dark** per pagine "under construction" o "coming soon". Include header con navigazione, countdown timer, form di contatto e design elegante su sfondo scuro.

## 🎨 Caratteristiche

- 🌑 **Design Dark** - Tema scuro professionale ed elegante
- 🧭 **Navigazione** - Header fisso con navigazione fluida alle sezioni
- ⏱️ **Countdown Timer** - Timer animato con separatori eleganti
- 📝 **Form di Contatto** - Form completamente integrato e stilizzato
- 🔗 **Social Media** - Link ai social (visibili solo se configurati)
- 📱 **Responsive** - Perfettamente adattabile a tutti i dispositivi
- 🎭 **Animazioni Fluide** - Effetti smooth e transizioni eleganti
- 🚀 **Logo Personalizzabile** - Con fallback su logo SVG animato
- 📄 **Configurazione JSON** - Contenuti gestiti tramite data files

## 🎯 Design Professionale

- Palette di colori blu/viola su nero
- Typography moderna con font Inter
- Effetti glow e ombre per profondità
- Smooth scroll navigation
- Mobile menu con animazioni
- Sezioni ben definite e organizzate

## 📦 Installazione

1. Copia il tema nella cartella `themes/` del tuo progetto Hugo
2. Configura il tema in `hugo.toml`
3. Personalizza i contenuti in `data/content.json`

## ⚙️ Configurazione

### 1. Hugo Configuration (`hugo.toml`)

```toml
baseURL = 'https://tuosito.com/'
languageCode = 'it'
title = 'Il Tuo Sito'
theme = 'under-construction-pro'
```

### 2. Contenuti (`data/content.json`)

Tutti i contenuti sono gestiti tramite JSON. Il tema utilizza gli stessi data files del tema `under-construction-elegant`.

```json
{
  "company": {
    "name": "La Tua Azienda",
    "logoUrl": "/images/logo.png",
    "description": "Descrizione del progetto..."
  },
  "launch": {
    "date": "2026-06-01T00:00:00",
    "title": "Data di Lancio: 1 Giugno 2026"
  },
  "contact": {
    "email": "info@example.com",
    "phone": "+39 123 456 7890",
    "address": "Via Roma 123, Milano"
  },
  "form": {
    "action": "https://formspree.io/f/your-form-id",
    "title": "Contattaci",
    "subtitle": "Resta aggiornato!",
    "fields": {
      "name": "Il tuo nome",
      "email": "La tua email",
      "message": "Messaggio"
    },
    "submitButton": "Invia",
    "successMessage": "Grazie!",
    "errorMessage": "Errore"
  },
  "social": {
    "facebook": "https://facebook.com/...",
    "twitter": "",
    "instagram": "https://instagram.com/...",
    "linkedin": "https://linkedin.com/...",
    "youtube": "",
    "github": ""
  },
  "content": {
    "headline": "Stiamo Arrivando Presto!",
    "contactTitle": "Contatti"
  },
  "credits": "&copy; 2026 Azienda. Tutti i diritti riservati."
}
```

## 🧭 Sezioni della Pagina

Il tema include 4 sezioni principali accessibili dalla navigazione:

1. **Home** (#home) - Hero section con titolo e CTA
2. **About** (#about) - Informazioni azienda e contatti
3. **Countdown** (#countdown) - Timer per il lancio
4. **Contact** (#contact) - Form di contatto

## 🎨 Personalizzazione Colori

Modifica le variabili CSS in `static/css/style.css`:

```css
:root {
    --primary-color: #3b82f6;      /* Blu principale */
    --primary-dark: #2563eb;        /* Blu scuro */
    --accent-color: #8b5cf6;        /* Viola accent */
    --bg-primary: #0a0a0a;          /* Nero primario */
    --bg-secondary: #141414;        /* Nero secondario */
    --bg-card: #1f1f1f;            /* Grigio scuro card */
}
```

## 📱 Responsive Design

- **Desktop**: Layout completo con navigazione orizzontale
- **Tablet**: Adattamento griglia e spaziature
- **Mobile**: 
  - Menu hamburger animato
  - Layout verticale
  - Countdown a griglia 2x2
  - Form full-width

## 🔧 Funzionalità JavaScript

### Navigation (navigation.js)
- Smooth scroll alle sezioni
- Active link in base allo scroll
- Mobile menu toggle
- Header scroll effect

### Countdown (countdown.js)
- Aggiornamento real-time ogni secondo
- Formato con zero-padding
- Messaggio "Siamo Live!" quando scaduto

### Form (form.js)
- Validazione client-side
- Messaggi personalizzati da JSON
- Animazioni e feedback visivo
- Supporto per servizi esterni (Formspree, Netlify Forms)

## 📧 Integrazione Form

### Con Formspree:
1. Registrati su [Formspree](https://formspree.io/)
2. Crea un form e ottieni l'endpoint
3. Imposta in `data/content.json`:
   ```json
   "form": {
     "action": "https://formspree.io/f/YOUR-FORM-ID"
   }
   ```

### Con Netlify Forms:
1. Nel template `layouts/index.html`, aggiungi `netlify` al form
2. Deploy su Netlify
3. I form saranno gestiti automaticamente

## 🚀 Build e Deploy

```bash
# Sviluppo
hugo server -D

# Build per produzione
hugo

# Deploy su Netlify/Vercel
# Configura il comando: hugo
# Directory output: public
```

## 📁 Struttura del Tema

```
under-construction-pro/
├── layouts/
│   └── index.html              # Template principale
├── static/
│   ├── css/
│   │   └── style.css          # Stili dark theme
│   ├── js/
│   │   ├── navigation.js      # Navigazione e scroll
│   │   ├── countdown.js       # Timer countdown
│   │   └── form.js            # Gestione form
│   └── images/
│       └── default-logo.svg   # Logo di default
├── theme.toml                  # Metadati tema
└── README.md                   # Questa documentazione
```

## 🎯 Differenze con "under-construction-elegant"

| Caratteristica | Elegant             | Pro                    |
| -------------- | ------------------- | ---------------------- |
| Design         | Chiaro/colorato     | Dark/professionale     |
| Navigazione    | Nessuna             | Header con menu        |
| Layout         | Single page         | Multi-section          |
| Colori         | Gradient viola/rosa | Blu/viola su nero      |
| Target         | Creativo/casual     | Business/professionale |

## 🌐 Browser Supportati

- Chrome (ultima versione)
- Firefox (ultima versione)
- Safari (ultima versione)
- Edge (ultima versione)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips per un Risultato Migliore

1. **Logo**: Usa un logo in formato SVG o PNG trasparente per miglior risultato su dark theme
2. **Immagini**: Se aggiungi immagini, usa quelle ottimizzate per dark mode
3. **Colori**: Mantieni buon contrasto per accessibilità
4. **Testi**: Sii conciso - il design minimalista funziona meglio
5. **Form**: Collega un servizio reale per ricevere le email

## 📝 Licenza

MIT License

## 🤝 Contributi

Contributi, issues e feature requests sono benvenuti!

---

Made with 💙 for Hugo
