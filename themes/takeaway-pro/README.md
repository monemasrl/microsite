# Takeaway Pro - Tema Hugo per Pizzerie e Ristoranti

Un tema professionale e moderno per Hugo, specificatamente progettato per pizzerie al taglio, ristoranti e servizi di ristorazione con asporto e delivery.

## 🍕 Caratteristiche Principali

### 📋 **Menu Interattivo**
- Listino prezzi completo con categorie filtrabili
- Carrello shopping integrato
- Gestione allergeni e informazioni nutrizionali
- Badge per piatti vegetariani, vegani e senza glutine
- Immagini prodotti e descrizioni dettagliate

### 🚚 **Servizi di Delivery**
- Integrazione con piattaforme di delivery (Just Eat, Deliveroo, Uber Eats)
- Servizio di consegna diretta
- Zone di consegna e tempi stimati
- Calcolo automatico costi di spedizione

### 📱 **Ordinazione Online**
- Form di ordinazione completo e validato
- Integrazione WhatsApp per ordini rapidi
- Chat online configurabile (Tawk.to)
- Gestione ordini per asporto e delivery

### 🎨 **Design e Personalizzazione**
- 3 varianti colore pre-configurate (Classic, Modern, Fresh)
- Design responsive per tutti i dispositivi
- Animazioni fluide e moderne
- Schema SEO ottimizzato

### 📞 **Contatti e Social**
- Sezione contatti completa con mappa
- Integrazione social media
- Widget orari di apertura
- Form di contatto multipurpose

## 🎨 Varianti Colore

### 🔴 **Classic** (Default)
- Colori: Rosso tradizionale italiano (#d32f2f), Verde (#2e7d32), Arancione (#ff9800)
- Stile: Tradizionale e familiare
- Ideale per: Pizzerie storiche, trattorie, ristoranti familiari

### 🟠 **Modern**
- Colori: Arancione vibrante (#ff6b35), Grigio scuro (#2d3748), Oro (#ffd700)
- Stile: Contemporaneo e professionale
- Ideale per: Ristoranti moderni, fast food di qualità, catene

### 🟢 **Fresh**
- Colori: Verde fresco (#48bb78), Arancione (#ed8936)
- Stile: Naturale e salutare
- Ideale per: Ristoranti bio, cucina salutare, vegetariani/vegani

## 🚀 Installazione

### 1. Clona il tema nella cartella themes:
```bash
cd your-hugo-site
git clone https://github.com/yourusername/takeaway-pro.git themes/takeaway-pro
```

### 2. Copia i file di configurazione:
```bash
cp themes/takeaway-pro/hugo.toml.example hugo.toml
cp themes/takeaway-pro/takeaway-pro.example.json data/content.json
```

### 3. Configura il tema in `hugo.toml`:
```toml
theme = "takeaway-pro"
```

## ⚙️ Configurazione

### Variante Colore
Nel file `data/content.json`, modifica:
```json
{
    "theme": {
        "variant": "classic" // o "modern" o "fresh"
    }
}
```

### Informazioni Ristorante
```json
{
    "restaurant": {
        "name": "Il Tuo Ristorante",
        "phone": "+39 06 1234 5678",
        "email": "info@tuoristorante.it",
        "address": {
            "street": "Via Tua 123",
            "city": "Roma",
            "postalCode": "00100"
        }
    }
}
```

### Menu e Prodotti
```json
{
    "menu": {
        "sections": [
            {
                "name": "Pizze Classiche",
                "items": [
                    {
                        "name": "Margherita",
                        "description": "Pomodoro, mozzarella, basilico",
                        "price": "8.50",
                        "vegetarian": true,
                        "popular": true
                    }
                ]
            }
        ]
    }
}
```

### Chat e Integrazioni

#### WhatsApp
```json
{
    "chat": {
        "whatsapp": {
            "enabled": true,
            "number": "393401234567",
            "message": "Ciao! Vorrei ordinare..."
        }
    }
}
```

#### Tawk.to
```json
{
    "chat": {
        "tawkTo": {
            "enabled": true,
            "widgetId": "YOUR_WIDGET_ID",
            "apiKey": "YOUR_API_KEY"
        }
    }
}
```

### Servizi di Delivery
```json
{
    "delivery": {
        "services": [
            {
                "name": "Just Eat",
                "logo": "/images/justeat-logo.png",
                "deliveryTime": "20-35 min",
                "minOrder": "15.00",
                "deliveryFee": "2.99",
                "available": true
            }
        ]
    }
}
```

## 📝 Form di Ordinazione

### Configurazione Formspree
1. Registrati su [Formspree.io](https://formspree.io)
2. Crea un nuovo form
3. Aggiorna l'action nel `data/content.json`:

```json
{
    "orderForm": {
        "action": "https://formspree.io/f/YOUR-FORM-ID"
    }
}
```

### Campi Personalizzabili
```json
{
    "orderForm": {
        "fields": {
            "name": "Il tuo nome completo",
            "phone": "Numero di telefono",
            "email": "Email (facoltativo)",
            "notes": "Note aggiuntive"
        },
        "successMessage": "Ordine ricevuto! Ti contatteremo presto.",
        "errorMessage": "Errore nell'invio. Riprova o chiamaci."
    }
}
```

## 🎯 SEO e Analytics

### Meta Tags
```json
{
    "seo": {
        "title": "Pizzeria da Mario - Le Migliori Pizze",
        "description": "Descrizione del tuo ristorante...",
        "keywords": "pizza, ristorante, delivery, roma",
        "ogImage": "https://example.com/image.jpg"
    }
}
```

### Google Analytics
```json
{
    "analytics": {
        "googleAnalytics": "GA_MEASUREMENT_ID"
    }
}
```

## 📱 Funzionalità JavaScript

### Carrello Shopping
- Aggiunta/rimozione prodotti
- Persistenza localStorage
- Calcolo automatico totali
- Integrate con form ordini

### Filtri Menu
- Filtraggio per categoria
- Animazioni smooth
- Ricerca in tempo reale

### Gestione Form
- Validazione in tempo reale
- Integrazione carrello
- Calcolo spese di spedizione
- Messaggi di status

## 🔧 Personalizzazione CSS

### Variabili CSS Personalizzate
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
}
```

### Creare Nuove Varianti
1. Crea un nuovo file in `static/css/variants/custom.css`
2. Definisci le tue variabili colore
3. Aggiorna il tema in `data/content.json`:

```json
{
    "theme": {
        "variant": "custom"
    }
}
```

## 📂 Struttura File

```
takeaway-pro/
├── archetypes/
│   └── default.md
├── layouts/
│   └── index.html
├── static/
│   ├── css/
│   │   ├── style.css
│   │   └── variants/
│   │       ├── classic.css
│   │       ├── modern.css
│   │       └── fresh.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── hugo.toml.example
├── takeaway-pro.example.json
├── theme.toml
└── README.md
```

## 🌐 Demo e Esempi

### Siti di Esempio
- **Classic**: Pizzeria tradizionale italiana
- **Modern**: Fast food gourmet
- **Fresh**: Ristorante biologico

### Dati di Test
Il file `takeaway-pro.example.json` contiene dati completi di esempio per:
- Menu con 20+ prodotti
- Servizi di delivery
- Informazioni complete ristorante
- Configurazioni chat e social

## 🤝 Supporto e Contributi

### Riportare Bug
Utilizza la sezione Issues su GitHub per riportare bug o richiedere nuove funzionalità.

### Contribuire
1. Fork del repository
2. Crea un branch per la tua feature
3. Commit delle modifiche
4. Push del branch
5. Crea una Pull Request

### Roadmap
- [ ] Integrazione sistemi POS
- [ ] Multi-lingua
- [ ] App mobile companion
- [ ] Dashboard amministrativa
- [ ] Prenotazioni tavoli
- [ ] Programma fedeltà

## 📄 Licenza

Questo tema è rilasciato sotto licenza MIT. Vedi il file LICENSE per i dettagli.

## 🙏 Crediti

- **Fonts**: Google Fonts (Poppins, Roboto)
- **Icons**: Font Awesome 6
- **Images**: Unsplash (esempi)
- **Framework**: Hugo Static Site Generator

---

**Sviluppato con ❤️ per la comunità della ristorazione italiana**

Per supporto tecnico: [support@yourtheme.com](mailto:support@yourtheme.com)

Per demo live: [takeaway-pro-demo.netlify.app](https://takeaway-pro-demo.netlify.app)