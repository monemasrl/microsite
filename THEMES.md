# Confronto Temi Under Construction

Questo progetto include **due temi** Hugo per pagine "under construction", entrambi utilizzano gli stessi dati JSON (`data/content.json`).

## 🎨 Temi Disponibili

### 1. under-construction-elegant
- **Design**: Chiaro e colorato con gradient viola/rosa
- **Background**: Gradient colorato con animazioni circolari
- **Target**: Progetti creativi, startup giovani
- **Navigazione**: Nessuna (singola pagina verticale)
- **Mood**: Giocoso, moderno, accattivante

### 2. under-construction-pro ⭐ (Attualmente Attivo)
- **Design**: Scuro e professionale
- **Background**: Nero (#0a0a0a) con accenti blu/viola
- **Target**: Business, corporate, progetti professionali  
- **Navigazione**: Header fisso con menu di navigazione
- **Mood**: Elegante, minimalista, sofisticato

## 🔄 Come Cambiare Tema

Modifica il file `hugo.toml`:

```toml
# Per il tema Elegant (colorato)
theme = 'under-construction-elegant'

# Per il tema Pro (dark)
theme = 'under-construction-pro'
```

Ricarica il server Hugo per vedere le modifiche.

## 📊 Tabella Comparativa

| Caratteristica      | Elegant             | Pro                                             |
| ------------------- | ------------------- | ----------------------------------------------- |
| **Colore primario** | Gradient viola/rosa | Blu (#3b82f6)                                   |
| **Background**      | Gradient colorato   | Nero solido                                     |
| **Header/Nav**      | ❌ No                | ✅ Header fisso con nav                          |
| **Logo**            | Centro pagina       | Header sinistra                                 |
| **Layout**          | Tutto in colonna    | Sezioni navigabili                              |
| **Countdown**       | Box colorati        | Timer dark elegante                             |
| **Form**            | Card bianca         | Card dark                                       |
| **Font**            | Poppins             | Inter                                           |
| **Animazioni**      | Cerchi fluttuanti   | Decorazioni sottili                             |
| **Mobile Menu**     | N/A                 | Menu hamburger                                  |
| **Sezioni**         | Tutto in flusso     | 4 sezioni (#home, #about, #countdown, #contact) |
| **Best For**        | Creative/Startup    | Corporate/Business                              |

## 📄 Configurazione Condivisa

Entrambi i temi utilizzano **lo stesso file JSON**: `data/content.json`

Questo significa che:
- ✅ Puoi cambiare tema senza modificare i contenuti
- ✅ Un unico file da aggiornare
- ✅ Facile testare entrambi i design
- ✅ Mantieni coerenza dei dati

## 🎯 Quale Tema Scegliere?

### Scegli **Elegant** se:
- Vuoi un design colorato e fresco
- Il tuo brand è giovane e dinamico
- Preferisci un approccio più giocoso
- Target: creativi, community, eventi

### Scegli **Pro** se:
- Vuoi un look professionale e corporate
- Il tuo brand è serio e affidabile
- Preferisci un design minimalista
- Target: aziende, servizi B2B, tech

## 🚀 Test Rapido

Per testare rapidamente entrambi:

```bash
# Test tema Elegant
echo "theme = 'under-construction-elegant'" >> hugo.toml
hugo server

# Test tema Pro
echo "theme = 'under-construction-pro'" >> hugo.toml
hugo server
```

## 💡 Suggerimenti

1. **Testa entrambi** - Provali per qualche minuto ciascuno
2. **Chiedi feedback** - Mostrali al team o ai clienti
3. **Considera il brand** - Il tema deve riflettere l'identità aziendale
4. **Mobile first** - Testa su mobile, molti utenti visualizzeranno da lì
5. **Accessibilità** - Pro ha miglior contrasto per lettura

## 🎨 Personalizzazione

Entrambi i temi possono essere personalizzati modificando:
- `static/css/style.css` - Colori, spacing, fonts
- `layouts/index.html` - Struttura HTML
- `data/content.json` - Tutti i contenuti

## 📱 Responsive

Entrambi i temi sono completamente responsive e ottimizzati per:
- 📱 Mobile (< 640px)
- 📱 Tablet (< 968px)
- 💻 Desktop (> 968px)

---

**Current Active Theme**: `under-construction-pro` 🌑
