# Data Files - Under Construction Elegant

Questa cartella contiene i file di dati in formato JSON per personalizzare i contenuti del sito.

## 📄 content.json

Questo file contiene **tutti i contenuti** della pagina under-construction. Modifica questo file per personalizzare testi, contatti, social e altre informazioni.

### Struttura del JSON

```json
{
  "company": {
    "name": "Nome della tua azienda",
    "logoUrl": "URL del logo (lascia vuoto per usare il logo di default)",
    "description": "Descrizione del progetto o dell'azienda"
  },
  "launch": {
    "date": "Data di lancio in formato ISO (YYYY-MM-DDTHH:MM:SS)",
    "title": "Testo sopra il countdown"
  },
  "contact": {
    "email": "Email aziendale",
    "phone": "Telefono con prefisso internazionale",
    "address": "Indirizzo completo"
  },
  "form": {
    "action": "Endpoint per l'invio del form",
    "title": "Titolo della sezione form",
    "subtitle": "Sottotitolo del form",
    "fields": {
      "name": "Placeholder campo nome",
      "email": "Placeholder campo email",
      "message": "Placeholder campo messaggio"
    },
    "submitButton": "Testo del pulsante",
    "successMessage": "Messaggio di successo",
    "errorMessage": "Messaggio di errore"
  },
  "social": {
    "facebook": "URL pagina Facebook (lascia vuoto per non mostrare)",
    "twitter": "URL profilo Twitter",
    "instagram": "URL profilo Instagram",
    "linkedin": "URL pagina/profilo LinkedIn",
    "youtube": "URL canale YouTube",
    "github": "URL profilo GitHub"
  },
  "content": {
    "headline": "Titolo principale della pagina",
    "contactTitle": "Titolo sezione contatti"
  },
  "credits": "Testo footer (supporta HTML)"
}
```

## ✏️ Come Modificare

1. Apri il file [content.json](content.json)
2. Modifica i valori tra le virgolette mantenendo la struttura JSON
3. Salva il file
4. Ricarica la pagina del sito (Hugo ricompilerà automaticamente)

## 💡 Suggerimenti

### Social Media
- Lascia il valore vuoto (`""`) per i social che non vuoi mostrare
- I link vuoti non appariranno sulla pagina

### Logo
- Se `logoUrl` è vuoto, verrà mostrato il logo SVG animato di default
- Puoi usare un percorso relativo: `"/images/mio-logo.png"`
- Oppure un URL assoluto: `"https://example.com/logo.png"`

### Form Action
- Per usare **Formspree**: `"https://formspree.io/f/your-form-id"`
- Per **Netlify Forms**: lascia `"#"` e configura nel template
- Per backend personalizzato: inserisci l'URL del tuo endpoint

### Data di Lancio
- Formato richiesto: `YYYY-MM-DDTHH:MM:SS`
- Esempio: `"2026-06-15T09:00:00"` = 15 giugno 2026 alle 9:00
- Il countdown è automatico e si aggiorna ogni secondo

### Credits / Footer
- Supporta HTML: puoi inserire link, grassetto, etc.
- Esempio: `"&copy; 2026 Azienda | <a href='https://example.com'>Link</a>"`

## 🌍 Multilingua (Opzionale)

Puoi creare file JSON per diverse lingue:

```
data/
├── content.json       # Versione default (italiano)
├── content.en.json    # Versione inglese
├── content.es.json    # Versione spagnola
└── ...
```

Hugo selezionerà automaticamente il file giusto in base alla lingua configurata.

## 🔄 Alternative a JSON

Hugo supporta anche altri formati nella cartella `data/`:
- **YAML**: `content.yaml` (più leggibile per umani)
- **TOML**: `content.toml` (simile alla configurazione Hugo)

Se preferisci uno di questi formati, converti il JSON mantenendo la stessa struttura.
