# SEO local — TR3C3 Coffee & Brunch

## Implementación realizada

- Home `/es/` con un único H1 visible y local, title, description, canonical, Open Graph, Twitter Cards y preload de la imagen principal.
- Entidad local centralizada en `src/data/site.ts` para evitar discrepancias de nombre, dirección, horarios y enlaces.
- Schema global con `LocalBusiness`, `CafeOrCoffeeShop`, `Restaurant`, `WebSite` y `WebPage`.
- Seis landings locales con contenido propio, un único H1, canonical, breadcrumbs, `BreadcrumbList`, `FAQPage`, `Article`, CTA e interlinking.
- Footer con NAP visible y seis enlaces discretos de “Guías locales”.
- Sitemap filtrado para excluir raíz noindex y URLs redirigidas.
- Redirecciones 301 para evitar canibalización desde `/brunch-miami-platja/` y `/mejor-cafe-especialidad-miami-platja/`.
- Robots, favicon, Apple Touch Icon, alt text, lazy loading y renderizado estático revisados.

## Páginas y metadatos

| URL | Title | Meta description |
| --- | --- | --- |
| `/mejor-brunch-miami-platja/` | Brunch en Miami Platja con café de especialidad \| TR3C3 | Descubre TR3C3 Coffee & Brunch para disfrutar de brunch, desayunos cuidados y café de especialidad en un ambiente premium de Miami Platja. |
| `/mejor-cafeteria-especialidad-miami-platja/` | Cafetería de especialidad en Miami Platja \| TR3C3 | Café de especialidad en Miami Platja: espresso, filtrados y bebidas cuidadas en TR3C3 Coffee & Brunch, una cafetería moderna en la Costa Daurada. |
| `/mejor-restaurante-miami-platja/` | Restaurante en Miami Platja: café, brunch y cocina \| TR3C3 | TR3C3 es una propuesta gastronómica moderna en Miami Platja para desayunar, tomar brunch, comer, merendar o disfrutar de una cena informal. |
| `/brunch-tarragona/` | Brunch en Tarragona y Costa Daurada \| TR3C3 Miami Platja | Descubre TR3C3 en Miami Platja, un destino de brunch y café de especialidad en la provincia de Tarragona y la Costa Daurada. |
| `/cafeteria-especialidad-tarragona/` | Cafetería de especialidad en Tarragona \| TR3C3 Miami Platja | TR3C3 Coffee & Brunch es una cafetería de especialidad en Miami Platja, provincia de Tarragona, con espresso, filtrados, brunch y bebidas frías. |
| `/restaurante-miami-platja-costa-daurada/` | Dónde comer en Miami Platja y Costa Daurada \| TR3C3 | Descubre TR3C3 para comer en Miami Platja: café de especialidad, brunch y cocina mediterránea en una parada gastronómica de la Costa Daurada. |

## Datos que deben confirmarse antes de publicar

1. Nombre oficial exacto de la ficha: `TR3C3 Coffee & Brunch` frente a la variante `TR3C3 Coffee & Brunch`.
2. Dominio definitivo. El proyecto sigue configurado en `https://www.tr3c3.com`.
3. Email definitivo. Actualmente se conserva `hola@tr3c3.com`.
4. Teléfono y WhatsApp.
5. URLs reales de Instagram y TikTok.
6. Dirección exacta: el proyecto usa `Avinguda de Barcelona, 160, 43892 Miami Platja`.
7. Horario: se ha configurado lun–vie 09:00–23:00 y sáb–dom 09:00–16:00 / 20:00–23:00.
8. Sistema real de reservas y su URL.
9. Fotografías reales del local, equipo, platos y café para sustituir imágenes de concepto.

## Google Business Profile

- Usar exactamente el mismo nombre, dirección, teléfono y horario que en `src/data/site.ts`.
- Enlazar la home o la landing más relevante desde la ficha.
- Añadir carta, categoría principal y categorías secundarias correctas.
- Subir fotografías reales y recientes del exterior, interior, barra, equipo, café y platos.
- Solicitar reseñas honestas tras la visita y responderlas con naturalidad.
- Publicar novedades, cambios de horario y propuestas de temporada.
- Añadir parámetros UTM al enlace web de la ficha para medir tráfico local.
- Validar sitemap y páginas en Google Search Console tras publicar.
