# Maintenance Pro

Un tema professionale per pagine di manutenzione in Hugo con design dark e accenti arancioni.

## ✨ Caratteristiche

- 🎨 **Design Moderno**: Tema dark con gradienti arancioni e animazioni fluide
- 📱 **Responsive**: Completamente ottimizzato per tutti i dispositivi
- ⏱️ **Countdown Timer**: Timer opzionale per il tempo stimato di recupero
- 📊 **Indicatori di Stato**: Mostra lo stato dei vari servizi (operativo, manutenzione, degradato, offline)
- 📝 **Timeline Aggiornamenti**: Sezione per comunicare aggiornamenti in tempo reale
- 📧 **Sezione Contatti**: Informazioni di contatto per supporto urgente
- 🔗 **Social Media**: Link ai profili social dell'azienda
- 📈 **Barra di Progresso**: Mostra visivamente l'avanzamento della manutenzione
- ⚡ **Leggero e Veloce**: Codice ottimizzato per caricamenti rapidi

## 📦 Installazione

1. Copia il tema nella directory `themes/` del tuo sito Hugo:
   ```bash
   cd themes/
   git clone <repository-url> maintenance-pro
   # oppure copia manualmente la cartella
   ```

2. Copia il file di configurazione di esempio:
   ```bash
   cp themes/maintenance-pro/hugo.toml.example hugo.toml
   ```

3. Crea il file di dati per il contenuto:
   ```bash
   mkdir -p data/
   cp data/maintenance.example.json data/content.json
   ```

## ⚙️ Configurazione

### File `hugo.toml`

```toml
baseURL = "https://your-site.com/"
languageCode = "it"
title = "Manutenzione in Corso"
theme = "maintenance-pro"

disableKinds = ["taxonomy", "term", "RSS", "sitemap"]
```

### File `data/content.json`

Il tema utilizza un file JSON in `data/content.json` per configurare tutti i contenuti. Ecco le sezioni principali:

#### Informazioni Azienda
```json
{
  "company": {
    "name": "La Tua Azienda",
    "logoUrl": "https://esempio.com/logo.png"
  }
}
```

#### Configurazione Manutenzione
```json
{
  "maintenance": {
    "title": "Sito in Manutenzione",
    "message": "Messaggio personalizzato...",
    "showProgress": true,
    "progress": 65,
    "estimatedEnd": "2026-02-22T18:00:00+01:00",
    "countdownTitle": "Tempo Stimato di Recupero"
  }
}
```

**Parametri Manutenzione:**
- `title`: Titolo principale della pagina
- `message`: Messaggio descrittivo della manutenzione
- `showProgress`: `true/false` - Mostra la barra di progresso
- `progress`: Numero da 0 a 100 - Percentuale di completamento
- `estimatedEnd`: Data e ora ISO 8601 del completamento stimato
- `countdownTitle`: Titolo della sezione countdown

#### Stato dei Servizi
```json
{
  "status": {
    "title": "Stato dei Servizi",
    "services": [
      {
        "name": "Sito Web",
        "description": "Descrizione dello stato",
        "status": "maintenance"
      }
    ]
  }
}
```

**Stati Disponibili:**
- `operational` - Servizio operativo (verde)
- `maintenance` - In manutenzione (arancione)
- `degraded` - Prestazioni degradate (giallo)
- `down` - Non disponibile (rosso)

#### Timeline Aggiornamenti
```json
{
  "updates": {
    "title": "Aggiornamenti",
    "items": [
      {
        "timestamp": "22 Feb 2026 - 14:30",
        "title": "Titolo aggiornamento",
        "description": "Descrizione dettagliata"
      }
    ]
  }
}
```

#### Contatti
```json
{
  "contact": {
    "title": "Hai Bisogno di Aiuto?",
    "subtitle": "Sottotitolo opzionale",
    "email": "supporto@esempio.com",
    "phone": "+39 02 1234 5678",
    "supportUrl": "https://supporto.esempio.com"
  }
}
```

#### Social Media
```json
{
  "social": {
    "facebook": "https://facebook.com/...",
    "twitter": "https://twitter.com/...",
    "instagram": "https://instagram.com/...",
    "linkedin": "https://linkedin.com/...",
    "youtube": "https://youtube.com/...",
    "github": "https://github.com/..."
  }
}
```

#### Footer
```json
{
  "footer": {
    "text": "&copy; 2026 La Tua Azienda. <a href='...'>Privacy</a>"
  }
}
```

## 🎨 Personalizzazione

### Colori

Il tema utilizza CSS variables che possono essere personalizzate in `static/css/style.css`:

```css
:root {
    --primary-color: #f97316;      /* Arancione principale */
    --primary-dark: #ea580c;       /* Arancione scuro */
    --accent-color: #f59e0b;       /* Colore accento */
    --bg-primary: #0a0a0a;         /* Sfondo principale */
    --text-primary: #ffffff;        /* Testo principale */
}
```

### Logo

Puoi specificare il tuo logo in due modi:
1. Nel file JSON: `company.logoUrl`
2. Sostituendo il file `static/images/default-logo.svg`

## 🚀 Build e Deploy

```bash
# Sviluppo locale
hugo server -D

# Build per produzione
hugo --minify

# Deploy (esempio con Cloudflare Pages)
wrangler pages publish public --project-name=your-project
```

## 📁 Struttura del Tema

```
maintenance-pro/
├── archetypes/
│   └── default.md
├── layouts/
│   └── index.html              # Template principale
├── static/
│   ├── css/
│   │   └── style.css           # Stili del tema
│   ├── js/
│   │   └── countdown.js        # Script countdown
│   └── images/
│       └── default-logo.svg    # Logo placeholder
├── hugo.toml.example           # Configurazione esempio
├── theme.toml                  # Metadata tema
└── README.md
```

## 🔧 Esempi d'Uso

### Esempio 1: Manutenzione Breve (senza countdown)

```json
{
  "company": {
    "name": "Acme Corp"
  },
  "maintenance": {
    "title": "Manutenzione Veloce",
    "message": "Saremo online tra pochi minuti!",
    "showProgress": false
  },
  "contact": {
    "email": "info@acme.com"
  }
}
```

### Esempio 2: Manutenzione Programmata Completa

Usa il file `data/maintenance.example.json` incluso come riferimento completo.

## 🤝 Compatibilità

- **Hugo Version**: >= 0.112.0
- **Browser**: Tutti i browser moderni (Chrome, Firefox, Safari, Edge)
- **Mobile**: iOS 12+, Android 8+

## 📄 Licenza

MIT License - Sentiti libero di usare e modificare questo tema per i tuoi progetti.

## 🆘 Supporto

Per problemi o domande:
- Apri un issue su GitHub
- Contatta il maintainer

---

**Nota**: Questo tema è stato progettato per essere usato come pagina temporanea durante manutenzioni. Non è pensato per essere un tema principale del sito.
