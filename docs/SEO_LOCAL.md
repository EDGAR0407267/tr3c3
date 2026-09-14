# SEO local — TR3C3 Coffee & Brunch

Documento operativo. La auditoría completa y las evidencias están en `SEO_TECHNICAL_REPORT.md`.

## Fuente única del negocio

Todos los componentes y el JSON-LD deben obtener los datos desde `src/config/business.ts`.

- Marca visible: TR3C3.
- Nombre usado por la web: TR3C3 Coffee & Brunch.
- Nombre alternativo observado en Google Maps: TRECE Brunch &Speciality Coffee.
- Dirección en el proyecto: Avinguda de Barcelona, 160, 43892 Miami Platja, Tarragona.
- Municipio: Mont-roig del Camp.
- Teléfono: +34 877 91 52 61.
- Correo: hola@trecemiami.com.
- Horario: lunes a domingo, 09:00–00:00.
- Coordenadas: 41.0058021, 0.9350192.
- Google Maps: <https://maps.app.goo.gl/6R71tUa5TnFQnZVw5>
- Instagram: <https://www.instagram.com/trecebrunch/>.
- Carta canonica: <https://trecemiami.com/es/carta/>.

Estos datos proceden del código y del contenido visible. Deben confirmarse con el responsable y con Google Business Profile antes de publicar; no añadir rango de precios, reservas, servicios ni horarios especiales sin fuente oficial.

## Arquitectura local

Páginas editoriales que se mantienen indexables:

- `/mejor-brunch-miami-platja/`
- `/mejor-cafeteria-especialidad-miami-platja/`
- `/mejor-restaurante-miami-platja/`
- `/brunch-tarragona/`
- `/cafeteria-especialidad-tarragona/`
- `/restaurante-miami-platja-costa-daurada/`

Consolidaciones permanentes:

- `/desayunos-miami-platja/` → `/mejor-brunch-miami-platja/`
- `/mejores-cafeterias-miami-platja/` → `/mejor-cafeteria-especialidad-miami-platja/`
- `/cafeteria-premium-miami-platja/` → `/mejor-cafeteria-especialidad-miami-platja/`
- `/donde-tomar-cafe-miami-platja/` → `/mejor-cafeteria-especialidad-miami-platja/`

## Publicación y seguimiento

1. Unificar TR3C3/TRECE en Google Business Profile y directorios.
2. Mantener NAP y horarios idénticos en web, GBP, Bing Places y Apple Business Connect.
3. Enviar `sitemap-index.xml` a Search Console.
4. Añadir a GBP la carta canónica y reservas solo si existe un sistema real.
5. Usar UTM en el enlace configurado desde GBP, no en la navegación interna.
6. Revalidar LocalBusiness, canonicals, hreflang y 301 después de cada despliegue.
