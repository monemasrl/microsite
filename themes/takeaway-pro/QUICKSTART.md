# Takeaway Pro - Guida Rapida

## 🚀 Setup in 5 Minuti

### 1. Installa il Tema
```bash
# Nella cartella del tuo sito Hugo
git clone https://github.com/yourusername/takeaway-pro.git themes/takeaway-pro
```

### 2. Configura Hugo
```toml
# hugo.toml
baseURL = "https://tuositoweb.com"
title = "Il Tuo Ristorante"
theme = "takeaway-pro"
```

### 3. Crea il File Dati
```bash
# Copia l'esempio
cp themes/takeaway-pro/takeaway-pro.example.json data/content.json
```

### 4. Personalizza i Dati Principali
```json
{
    "restaurant": {
        "name": "IL TUO NOME RISTORANTE",
        "phone": "IL TUO NUMERO",
        "email": "LA TUA EMAIL"
    },
    "theme": {
        "variant": "classic" // classic, modern, fresh
    }
}
```

### 5. Avvia il Server
```bash
hugo server -D
```

## 📋 Checklist Configurazione

### ✅ Informazioni Base
- [ ] Nome ristorante
- [ ] Telefono e email
- [ ] Indirizzo completo
- [ ] Orari di apertura

### ✅ Menu
- [ ] Categorie prodotti
- [ ] Prezzi aggiornati
- [ ] Descrizioni prodotti
- [ ] Immagini piatti (opzionale)

### ✅ Delivery
- [ ] Servizi attivati
- [ ] Zone di consegna
- [ ] Costi di spedizione
- [ ] Tempi di consegna

### ✅ Integrazionie
- [ ] WhatsApp configurato
- [ ] Form ordini (Formspree)
- [ ] Social media links
- [ ] Google Analytics (opzionale)

## 🎨 Cambiare Colori

Nel file `data/content.json`:
```json
{
    "theme": {
        "variant": "modern" // classic, modern, fresh
    }
}
```

## 📞 Configurazioni Importanti

### WhatsApp
```json
{
    "chat": {
        "whatsapp": {
            "enabled": true,
            "number": "393401234567" // SENZA + iniziale
        }
    }
}
```

### Form Ordini
1. Vai su [formspree.io](https://formspree.io)
2. Crea account gratuito
3. Crea nuovo form
4. Copia l'URL nel file dati:

```json
{
    "orderForm": {
        "action": "https://formspree.io/f/TUO-FORM-ID"
    }
}
```

## 🛠️ Problemi Comuni

### Il Menu Non Appare
Controlla che il file `data/content.json` sia valido JSON e contenga la sezione `menu`.

### WhatsApp Non Funziona
- Verifica che il numero sia corretto (senza + iniziale)
- Esempio corretto: `"393401234567"` 
- Esempio errato: `"+39 340 1234567"`

### Immagini Non Caricate
- Metti le immagini in `static/images/`
- Riferiscile come `/images/nomefile.jpg`

### Deploy Non Funziona
Verifica che:
- Il file `hugo.toml` sia configurato correttamente
- La cartella `themes/takeaway-pro` esista
- Il file `data/content.json` sia JSON valido

## 📱 Test Mobile
Sempre testare su:
- [ ] iPhone Safari
- [ ] Android Chrome
- [ ] Tablet iPad
- [ ] Desktop principali browser

## 🚀 Deploy

### Netlify (Consigliato)
1. Push su GitHub
2. Connetti repository a Netlify
3. Build command: `hugo --minify`
4. Publish directory: `public`

### Vercel
1. Importa da GitHub
2. Framework preset: Hugo
3. Deploy

### GitHub Pages
```yaml
# .github/workflows/hugo.yml
name: Build and deploy Hugo site
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: peaceiris/actions-hugo@v2
      with:
        hugo-version: 'latest'
    - run: hugo --minify
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./public
```