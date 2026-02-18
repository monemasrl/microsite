# Under Construction Elegant - Hugo Theme

Un tema Hugo elegante e moderno per pagine "in costruzione" o "coming soon" con countdown timer, form di contatto e integrazione social media.

## 🎨 Caratteristiche

- ✨ Design elegante e moderno
- ⏱️ Countdown timer animato
- 📝 Form di contatto integrato
- 🔗 Link ai social media (mostra solo quelli configurati)
- 📱 Completamente responsive
- 🎭 Animazioni fluide
- 🚀 Logo personalizzabile con fallback su logo di default
- 📄 **Configurazione tramite JSON** - contenuti separati dalla configurazione tecnica

## 📦 Installazione

1. Copia il tema nella cartella `themes/` del tuo progetto Hugo
2. Configura il tema nel file `hugo.toml`
3. Personalizza i contenuti nel file `data/content.json`

## ⚙️ Configurazione

### 1. Hugo Configuration (`hugo.toml`)

La configurazione tecnica è minimalista:

```toml
baseURL = 'https://tuosito.com/'
languageCode = 'it'
title = 'Il Tuo Sito'
theme = 'under-construction-elegant'
```

### 2. Contenuti (`data/content.json`)

**Tutti i contenuti** della pagina sono gestiti tramite un file JSON nella cartella `data/`. Questo permette una gestione più pulita e la possibilità di versioning dei contenuti.

Crea (o modifica) il file `data/content.json` nella root del progetto:

```json
{
  "company": {
    "name": "La Tua Azienda",
    "logoUrl": "/images/logo.png",
    "description": "Stiamo preparando qualcosa di straordinario!"
  },
  "launch": {
    "date": "2026-06-01T00:00:00",
    "title": "Lancio previsto per il"
  },
  "contact": {
    "email": "info@tuaazienda.com",
    "phone": "+39 123 456 7890",
    "address": "Via Roma 123, 00100 Roma, Italia"
  },
  "form": {
    "action": "https://formspree.io/f/your-form-id",
    "title": "Vuoi Saperne di Più?",
    "subtitle": "Lasciaci il tuo contatto!",
    "fields": {
      "name": "Il tuo nome",
      "email": "La tua email",
      "message": "Messaggio (opzionale)"
    },
    "submitButton": "Invia Richiesta",
    "successMessage": "Grazie! Ti contatteremo presto!",
    "errorMessage": "Errore. Riprova più tardi."
  },
  "social": {
    "facebook": "https://facebook.com/tuapagina",
    "twitter": "",
    "instagram": "https://instagram.com/tuoaccount",
    "linkedin": "https://linkedin.com/company/tuaazienda",
    "youtube": "",
    "github": ""
  },
  "content": {
    "headline": "Stiamo Arrivando Presto!",
    "contactTitle": "Contatti"
  },
  "credits": "&copy; 2026 La Tua Azienda. Tutti i diritti riservati."
}
```

## 🔧 Struttura del JSON

### Company (Azienda)

| Campo         | Descrizione                                              | Obbligatorio |
| ------------- | -------------------------------------------------------- | ------------ |
| `name`        | Nome dell'azienda o del progetto                         | Sì           |
| `logoUrl`     | URL del logo aziendale. Se vuoto, usa il logo di default | No           |
| `description` | Descrizione del progetto/sito/azienda                    | No           |

### Launch (Lancio)

| Campo   | Descrizione                                | Obbligatorio |
| ------- | ------------------------------------------ | ------------ |
| `date`  | Data prevista di lancio (formato ISO 8601) | Sì           |
| `title` | Testo mostrato sopra il countdown          | No           |

### Contact (Contatti)

| Campo     | Descrizione                | Obbligatorio |
| --------- | -------------------------- | ------------ |
| `email`   | Email aziendale            | No           |
| `phone`   | Telefono aziendale         | No           |
| `address` | Indirizzo fisico aziendale | No           |

### Form (Form di Contatto)

| Campo            | Descrizione                                | Obbligatorio |
| ---------------- | ------------------------------------------ | ------------ |
| `action`         | Endpoint per l'invio del form              | No           |
| `title`          | Titolo della sezione form                  | No           |
| `subtitle`       | Sottotitolo                                | No           |
| `fields`         | Oggetto con placeholder per i campi        | No           |
| `submitButton`   | Testo del pulsante di invio                | No           |
| `successMessage` | Messaggio mostrato dopo invio con successo | No           |
| `errorMessage`   | Messaggio mostrato in caso di errore       | No           |

### Social Media

Tutti i parametri social sono opzionali. **Lascia la stringa vuota (`""`) per i social che non vuoi mostrare.**

- `facebook`
- `twitter`
- `instagram`
- `linkedin`
- `youtube`
- `github`

### Content (Contenuti Vari)

| Campo          | Descrizione                    | Obbligatorio |
| -------------- | ------------------------------ | ------------ |
| `headline`     | Titolo principale della pagina | No           |
| `contactTitle` | Titolo sezione contatti        | No           |

### Credits

Testo del footer. Supporta HTML per link personalizzati.


## 📧 Integrazione Form di Contatto

Il tema include un form di contatto che può essere integrato con vari servizi.

### Formspree (Raccomandato)

1. Registrati su [Formspree](https://formspree.io/)
2. Crea un nuovo form e ottieni l'endpoint
3. Imposta `"action": "https://formspree.io/f/your-form-id"` in `data/content.json`

### Netlify Forms

1. Aggiungi `netlify` all'attributo del form in `layouts/index.html`
2. Pubblica su Netlify
3. I form saranno automaticamente gestiti

### Personalizzato

Modifica `static/js/form.js` per implementare la tua logica di invio.

## 🚀 Uso

1. Configura il tema in `hugo.toml`
2. Personalizza i contenuti in `data/content.json`
3. Esegui Hugo:
   ```bash
   hugo server
   ```
4. Apri il browser su `http://localhost:1313`

## 💡 Vantaggi dell'Approccio JSON

- **Separazione**: Configurazione tecnica (hugo.toml) separata dai contenuti (content.json)
- **Versioning**: Facile tracciare le modifiche ai contenuti nel sistema di versioning
- **Multilingua**: Possibilità di creare `content.en.json`, `content.es.json`, etc.
- **Portabilità**: I contenuti sono in un formato universale e facilmente esportabile
- **Validazione**: Gli editor JSON possono validare la sintassi automaticamente

## 🎨 Personalizzazione

### Colori

Modifica le variabili CSS in `static/css/style.css`:

```css
:root {
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --secondary-color: #ec4899;
    /* ... altri colori */
}
```

### Logo di Default

Il logo di default è un'icona SVG animata di un razzo. Per sostituirlo:
- Carica il tuo logo in `static/images/`
- Imposta `"logoUrl": "/images/tuo-logo.png"` in `data/content.json`

## 📁 Struttura del Progetto

```
sitebuilder/                 # Root del progetto
├── data/
│   ├── content.json        # ⭐ Contenuti della pagina (PERSONALIZZA QUI)
│   ├── content.example.json # Esempio con dati completi
│   └── README.md           # Guida alla configurazione JSON
├── hugo.toml               # Configurazione tecnica Hugo
├── themes/
│   └── under-construction-elegant/
│       ├── layouts/
│       │   └── index.html          # Template principale
│       ├── static/
│       │   ├── css/
│       │   │   └── style.css       # Stili
│       │   ├── js/
│       │   │   ├── countdown.js    # Logica countdown
│       │   │   └── form.js         # Logica form
│       │   └── images/
│       │       └── default-logo.svg # Logo di default
│       ├── theme.toml              # Metadati tema
│       ├── README.md               # Questa documentazione
│       └── hugo.toml.example       # Esempio configurazione completa
└── static/
    └── images/             # Metti qui il tuo logo personalizzato
```

## 🌐 Browser Supportati

- Chrome (ultima versione)
- Firefox (ultima versione)
- Safari (ultima versione)
- Edge (ultima versione)
- Mobile browsers

## 📝 Licenza

MIT License

## 🤝 Contributi

Contributi, issues e feature requests sono benvenuti!

## 👤 Autore

Il tuo nome/handle

---

Made with ❤️ for Hugo
