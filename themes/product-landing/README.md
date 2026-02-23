# Product Landing - Hugo Theme

Un tema moderno e ottimizzato per conversioni, perfetto per landing page di prodotti e piattaforme SaaS.

## 🎯 Caratteristiche

- ✨ Design moderno con gradienti colorati
- 📱 Completamente responsive (mobile-first)
- 🎯 Ottimizzato per conversioni (CTA strategici)
- 💰 Tabelle di pricing con toggle mensile/annuale
- ⭐ Sezione testimonials con rating
- ❓ Sezione FAQ accordion interattiva
- 🚀 Animazioni fluide e moderne (scroll animations)
- 🍪 Cookie banner GDPR compliant
- 📊 Schema.org microdata (SoftwareApplication)
- 🎨 Facile personalizzazione colori tramite CSS variables
- 🌐 Supporto multilingua
- ⚡ Performance ottimizzate
- 📈 SEO friendly con Open Graph e Twitter Cards

## 📋 Sezioni Incluse

1. **Hero Section** - Header principale con gradiente, badge, CTA e immagine prodotto
2. **Stats Section** - Statistiche chiave con counter animati
3. **Features Section** - Grid di caratteristiche del prodotto con icone
4. **Benefits Section** - Sezioni alternate con immagini e liste di benefici
5. **How It Works** - Processo step-by-step con numeri e icone
6. **Pricing Section** - Tabelle di pricing con toggle e piani multipli
7. **Testimonials Section** - Recensioni clienti con avatar e rating stelle
8. **FAQ Section** - Accordion per domande frequenti
9. **Final CTA** - Call-to-action finale con gradiente
10. **Footer** - Footer completo con link, social e legal

## 🚀 Installazione

### Metodo 1: In un progetto esistente

1. Copia la cartella `product-landing` in `themes/`:
```bash
cd /path/to/your/hugo/site
cp -r /path/to/sitebuilder/themes/product-landing themes/
```

2. Configura Hugo per usare il tema. Modifica `hugo.toml`:
```toml
theme = "product-landing"
```

3. Copia il file di esempio dei dati:
```bash
cp themes/product-landing/../data/product-landing.example.json data/content.json
```

4. Avvia Hugo:
```bash
hugo server -D
```

### Metodo 2: Nuovo progetto

1. Clona o copia il tema nella cartella `themes/`
2. Copia `hugo.toml.example` nella root come `hugo.toml`
3. Copia `product-landing.example.json` in `data/content.json`
4. Personalizza il contenuto
5. Esegui `hugo server`

## 🎨 Personalizzazione

### Colori e Stile

Tutti i colori sono definiti come variabili CSS in `static/css/style.css`. Modifica le variabili per cambiare l'intero tema:

```css
:root {
    /* Colori Primari - Cambia questi per personalizzare il tema */
    --primary-color: #6366f1;      /* Indigo */
    --secondary-color: #8b5cf6;    /* Viola */
    --accent-color: #ec4899;       /* Rosa */
    
    /* Puoi anche cambiare: */
    --bg-primary: #ffffff;
    --text-primary: #111827;
    /* ... e molte altre variabili */
}
```

**Palette di colori suggerite:**

- **Tech Blue:** `#3b82f6`, `#06b6d4`, `#8b5cf6`
- **Modern Purple:** `#6366f1`, `#8b5cf6`, `#ec4899`
- **Green Energy:** `#10b981`, `#34d399`, `#14b8a6`
- **Orange Bold:** `#f97316`, `#fb923c`, `#fbbf24`

### Struttura del Content.json

Il file `data/content.json` contiene tutto il contenuto del sito. È strutturato in sezioni:

```json
{
    "seo": {
        "title": "Titolo per Google",
        "description": "Meta description",
        "keywords": "parole, chiave, separate",
        "ogImage": "URL immagine social"
    },
    "product": {
        "name": "Nome Prodotto",
        "logoIcon": "🚀",  // Emoji o icona
        "company": "Nome Azienda"
    },
    "hero": {
        "title": "Titolo principale",
        "subtitle": "Sottotitolo descrittivo",
        "ctaPrimary": "Testo bottone primario",
        "image": "URL immagine hero"
    },
    // ... altre sezioni
}
```

### Sezioni Opzionali

Alcune sezioni sono opzionali e vengono mostrate solo se presenti nel `content.json`:

- `stats` - Statistiche con counter
- `benefits` - Sezioni alternate con immagini
- `howItWorks` - Process steps
- `testimonials` - Recensioni
- `faq` - Domande frequenti

Per nascondere una sezione, semplicemente rimuovila o commentala nel file JSON.

### Icons

Il tema usa Font Awesome 6. Per cambiare le icone, modifica il valore `icon` nelle sezioni. Vedi la lista completa su [fontawesome.com/icons](https://fontawesome.com/icons).

Esempio:
```json
{
    "icon": "rocket",  // Diventa <i class="fas fa-rocket"></i>
    "title": "Launch Fast"
}
```

## 📱 Responsive Design

Il tema è completamente responsive con breakpoint a:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

Il menu di navigazione diventa un hamburger menu su mobile.

## 🔧 Funzionalità JavaScript

### Cookie Banner
- Si mostra automaticamente dopo 1 secondo
- Salva il consenso in `localStorage`
- Personalizzabile tramite `content.cookies.bannerText`

### Pricing Toggle
- Switch mensile/annuale
- Mostra/nasconde prezzi automaticamente
- Calcolo automatico dello sconto annuale

### FAQ Accordion
- Click per aprire/chiudere
- Solo una domanda aperta alla volta
- Animazione smooth

### Scroll Animations
- Elementi appaiono al scroll
- Intersection Observer API
- Counter animati per le statistiche

### Smooth Scroll
- Navigation smooth verso le sezioni
- Offset automatico per header fisso

## 🌐 SEO e Meta Tags

Il tema include:
- **Open Graph** tags per Facebook
- **Twitter Card** tags
- **Schema.org** microdata (SoftwareApplication)
- Meta description e keywords
- Sitemap automatico (se abilitato in Hugo)
- robots.txt template

## 🎯 Best Practices per Conversioni

### 1. Hero Section
- **Titolo chiaro:** Spiega cosa fa il prodotto in 1 frase
- **Sottotitolo con beneficio:** Aggiungi un beneficio tangibile
- **CTA primario visibile:** "Inizia Gratis", "Prova Ora"
- **Prova sociale:** Badge, features list sotto il CTA

### 2. Pricing
- **Massimo 3 piani:** Non confondere l'utente
- **Evidenzia il più popolare:** Usa `"featured": true`
- **CTA chiari:** "Inizia Gratis" vs "Contattaci"
- **Yearly discount:** Mostralo chiaramente

### 3. Testimonials
- **Scrivi recensioni specifiche:** Evita frasi generiche
- **Aggiungi ruolo e azienda:** Aumenta la credibilità
- **Usa foto reali:** O avatar personalizzati

### 4. FAQ
- **Rispondi alle obiezioni:** Prezzo, sicurezza, supporto
- **Sii specifico:** Dai numeri e dettagli concreti
- **Max 10 domande:** Le più frequenti

## 📦 File e Cartelle

```
product-landing/
├── layouts/
│   ├── index.html          # Template principale
│   └── robots.txt          # Template robots.txt
├── static/
│   ├── css/
│   │   └── style.css       # Tutti gli stili
│   ├── js/
│   │   └── scripts.js      # Tutte le funzionalità JS
│   └── images/
│       └── README.md       # Info sulle immagini
├── hugo.toml.example       # Config esempio
├── theme.toml              # Metadata tema
└── README.md               # Questa guida
```

## 🖼️ Immagini

### Immagini Hero e Benefits
Usa immagini di alta qualità (min 1200x800px). Fonti consigliate:
- [Unsplash](https://unsplash.com) - Gratis, alta qualità
- [Pexels](https://pexels.com) - Gratis
- Screenshots del tuo prodotto - Migliore opzione!

### Avatar Testimonials
- Usa [Pravatar](https://pravatar.cc) per placeholder
- O carica foto reali dei clienti

### Logo
- Usa emoji 🚀 per iniziare velocemente
- O carica un logo SVG/PNG

## 🐛 Troubleshooting

### Il tema non si carica
- Verifica che `theme = "product-landing"` sia in `hugo.toml`
- Controlla che la cartella sia in `themes/product-landing`

### Le immagini non appaiono
- Verifica che gli URL siano completi (https://...)
- Controlla che il file `data/content.json` sia valido JSON

### Il pricing toggle non funziona
- Verifica che ci siano sia `priceMonthly` che `priceYearly`
- Controlla la console browser per errori JS

### Gli script non funzionano
- Verifica che `scripts.js` sia caricato
- Controlla che Font Awesome sia caricato

## 📝 Esempio di Uso

Vedi il file `data/product-landing.example.json` per un esempio completo di una landing page di un prodotto SaaS (TaskFlow - Project Management).

L'esempio include:
- Tutte le sezioni popolate
- Testi di esempio realistici
- Struttura pricing con 3 piani
- 6 testimonials
- 10 FAQ
- Link a immagini di esempio

## 🔄 Aggiornamenti

Per aggiornare il tema:
1. Fai backup del tuo `content.json`
2. Sostituisci la cartella del tema
3. Verifica che tutti i campi richiesti siano ancora presenti
4. Testa il sito con `hugo server`

## 📄 Licenza

MIT License - Usa liberamente per progetti personali e commerciali.

## 🙋 Supporto

Per domande o problemi:
1. Controlla questa documentazione
2. Verifica il file di esempio
3. Controlla la console browser per errori
4. Apri un issue su GitHub

## 🎉 Credits

- Font: [Inter](https://rsms.me/inter/) & [Poppins](https://fonts.google.com/specimen/Poppins)
- Icons: [Font Awesome 6](https://fontawesome.com)
- Immagini esempio: [Unsplash](https://unsplash.com)

---

Creato con ❤️ per Hugo
