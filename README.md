# 🎲 RandomLab — V1

Web estática que genera dinero de 3 formas: anuncios + afiliados + Pack Pro 9€.
Coste: 0€/mes. Sin backend. La mantienes sin saber programar.

## 1. Verla en tu PC
Haz doble clic en `index.html`. Funciona sin internet (salvo las fuentes).

## 2. Publicarla gratis (elige 1)
**Opción fácil — Netlify Drop:**
1. Ve a app.netlify.com/drop
2. Arrastra la carpeta `RandomeProyect`
3. Te da un link tipo `https://randomlab.netlify.app` → ya está online

**Opción pro — Cloudflare Pages (gratis, más rápido):**
1. Crea cuenta en cloudflare.com
2. Pages → Upload → sube la carpeta
3. Conecta tu dominio si tienes (opcional)

## 3. Ganar dinero (por orden)
1. **Afiliados (día 1):** edita `data.js` y cambia `TU-CODIGO` / `TU-TAG-21` por tus links reales de Amazon, Booking, Shopify. Cada venta = 5-15%.
2. **Pack Pro 9€ (semana 1):** crea un Gumroad gratis, sube un PDF con las 900 ideas (te lo genero yo si quieres), pega el link en `data.js → PRO_LINK`.
3. **AdSense (mes 1-2, con 30+ visitas/día):** solicita AdSense, pega su código donde pone `<!-- Espacio anuncio -->` en `index.html`.

Expectativa honesta: 0-10€ mes 1, 50-150€/mes desde mes 2-3 si publicas 2 posts/semana en TikTok/IG con tus generadores.

## 4. Mantenerla sin código
- Añadir ideas: abre `data.js` con Bloc de notas, añade `"Mi idea",` dentro de `items:[…]`.
- Añadir generador: copia un bloque `{id:…}` entero, cambia título y lista.
- Cambiar colores/precio: dime y lo hago yo.

## 5. V2 (cuando V1 dé 100€/mes)
- +9 generadores para llegar a 15 (SEO programático)
- Páginas individuales por generador (`/generador/recetas`) para Google
- Inglés ES+EN, modo oscuro, PWA instalable
