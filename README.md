# Under Construction Site

Sito "in costruzione" elegante creato con Hugo. Include **due temi professionali** tra cui scegliere.

## 🎨 Temi Disponibili

### 1. under-construction-elegant
Design colorato con gradient viola/rosa, perfetto per progetti creativi e startup giovani.

### 2. under-construction-pro ⭐ (Attivo)
Design scuro e professionale con header di navigazione, ideale per business e corporate.

**[Confronto dettagliato dei temi →](THEMES.md)**

## 🔄 Cambiare Tema

Modifica `theme` in [`hugo.toml`](hugo.toml):

```toml
# Tema colorato
theme = 'under-construction-elegant'

# Tema dark professionale (attualmente attivo)
theme = 'under-construction-pro'
```

## 🚀 Quick Start

1. **Personalizza i contenuti** modificando il file [`data/content.json`](data/content.json)
2. **Avvia il server** di sviluppo:
   ```bash
   hugo server
   ```
3. **Visualizza** il sito su http://localhost:1313
4. **Cambia tema** (opzionale) modificando `hugo.toml`

## 📝 Personalizzazione

### Contenuti (data/content.json)

Tutti i contenuti della pagina sono nel file JSON. Modifica:
- Nome azienda e logo
- Descrizione del progetto
- Data di lancio (per il countdown)
- Contatti (email, telefono, indirizzo)
- Link ai social media
- Testi del form di contatto

Vedi [`data/README.md`](data/README.md) per la documentazione completa.

### File di Esempio

- [`data/content.example.json`](data/content.example.json) - Esempio completo in JSON
- [`data/content.example.yaml`](data/content.example.yaml) - Stesso contenuto in YAML

## 📦 Struttura

```
.
├── data/
│   └── content.json     ⭐ PERSONALIZZA QUI I CONTENUTI
├── hugo.toml            # Configurazione Hugo (scegli il tema qui)
├── themes/
│   ├── under-construction-elegant/  # Tema colorato
│   └── under-construction-pro/      # Tema dark (attivo)
└── static/
    └── images/          # Carica qui il tuo logo
```

## 📖 Documentazione

- [**Confronto Temi**](THEMES.md) - Quale tema scegliere
- [Guida Tema Elegant](themes/under-construction-elegant/README.md) - Doc tema colorato
- [Guida Tema Pro](themes/under-construction-pro/README.md) - Doc tema dark
- [Guida Data JSON](data/README.md) - Come personalizzare i contenuti

## 🏗️ Build per Produzione

```bash
hugo
```

I file del sito saranno generati nella cartella `public/`.

## 🌐 Deploy

Puoi fare deploy su:
- **Netlify**: Collega il repo e specifica `hugo` come comando di build
- **Vercel**: Stessa procedura
- **GitHub Pages**: Usa GitHub Actions per il build automatico
- **Qualsiasi hosting**: Carica i contenuti della cartella `public/`

