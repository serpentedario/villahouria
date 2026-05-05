# Villa Houria

Sito statico (Astro) per `villahouria.it`.

## Struttura
- Pagine: `src/pages/…`
- Dati spazi: `src/data/spazi.ts`
- Foto: `public/photos/…`

## Come aggiungere le foto (il modo “pigro”)
1. Crea una cartella per ogni spazio, es. `public/photos/taverna-del-fuoco/`
2. Inserisci 6 coppie `prima/dopo`, es:
   - `a1-prima.jpg` + `a1-dopo.jpg`
   - …
3. Aggiorna i percorsi in `src/data/spazi.ts` (campo `angles`)

## Prenotazioni
La pagina `Prenota` usa un form esterno. Imposta l’endpoint in:
- `src/pages/prenota/index.astro` → `action="https://formspree.io/f/CHANGE_ME"`

## Deploy
GitHub Pages via workflow `.github/workflows/deploy.yml`.
Il dominio è configurato tramite `public/CNAME`.

