# 🎲 RandomLab — V2 en vivo

**Web:** https://randomlab-zzolrac.netlify.app
**Repo:** https://github.com/zzolrac/RandomeProyect
**Estado:** 15 generadores · ~280 ideas · SEO + PWA · 0€/mes

## Flujo CLI (el que siempre usamos)

```powershell
# 1. Cambios
git add -A; git commit -m "lo que cambie"
git push -u origin main

# 2. Deploy prod
netlify deploy --prod --dir .

# 3. Ver estado
gh repo view --web
netlify status
netlify logs --help
```

GitHub auto-despliega si conectas el repo en Netlify Dashboard → Add new site → Import. El `netlify.toml` ya lleva headers, caché y redirects `/g/:slug`.

## Ganar dinero (por orden)
1. **Afiliados:** edita `data.js`, cambia `TU-TAG-21` / `TU-CODIGO` por tus tags Amazon, Booking, Shopify.
2. **Pack Pro 9€:** crea producto en Gumroad, pega link en `data.js → PRO_LINK` (auto-actualiza `index.html` + `pack-pro.html`).
3. **AdSense:** pide aprobación con 10-20 visitas/día, pega código en `index.html → Espacio anuncio`.

## Mantener sin código
- Añadir idea: Bloc de notas → `data.js` → dentro de `items:[...]` añade `"Mi idea",`
- Nuevo generador: copia un bloque `{id:...}` entero.
- Precio/títulos Pack: edita `pack-pro.html` (textos ya listos del subagente SEO).

## Qué se hizo en V2
- 6 → 15 generadores (pelis, libros, side-hustle, citas, nombres-bebé, recetas-fit, contenido, rompehielos, regalos)
- `generador.html?g=slug` deep-link compartible + `history` + recientes `localStorage`
- SEO: canonical, OG, JSON-LD, `sitemap.xml`, `robots.txt`
- PWA: `manifest.json` + `sw.js` (offline)
- Ventas: `pack-pro.html` con copy 9€ + garantía
- Infra: `netlify.toml` (seguridad + caché), `.gitignore`

## V3 (cuando dé 100€/mes)
- 15 páginas estáticas `/g/slug` pre-render para SEO total
- ES+EN (`/en/`), modo oscuro, PWA instalable con iconos PNG
- Generador PDF del Pack directo desde la web
