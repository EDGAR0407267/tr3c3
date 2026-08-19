# TR3C3 Coffee & Brunch

Web oficial de **TR3C3 Coffee & Brunch**, una propuesta de café de especialidad, brunch y gastronomía mediterránea en Miami Platja, Tarragona.

## Sobre el proyecto

Sitio web corporativo desarrollado para un negocio real de restauración y cafetería. El proyecto presenta la identidad y la propuesta gastronómica de TR3C3, facilita el acceso a sus cartas y centraliza la información de ubicación, horarios y contacto.

## Objetivos

- Presentar la marca y su propuesta de café de especialidad, brunch y cocina mediterránea.
- Ofrecer cartas de comida, café, cócteles y vinos en varios idiomas.
- Facilitar la ubicación, el contacto y el acceso a los perfiles sociales del negocio.
- Mejorar la presencia digital mediante SEO técnico y páginas de búsqueda local.
- Mantener una experiencia rápida, accesible y responsive en móvil, tablet y escritorio.

## Características

- Diseño responsive con navegación y menú móvil.
- Contenido localizado en español, catalán, inglés, francés, alemán, neerlandés, italiano y chino simplificado.
- Cartas estructuradas por secciones para comida, bebidas, cócteles y vinos.
- Secciones editoriales sobre el equipo, la esencia de la marca y el café de especialidad.
- Integración con Google Maps e Instagram.
- Galerías, carruseles, reseñas y llamadas a la acción contextuales.
- Metadatos SEO, datos estructurados, canonical, Open Graph, sitemap y `robots.txt`.
- Imágenes responsive en WebP y AVIF y fuentes alojadas localmente.
- Página 404 y redirecciones para rutas anteriores.
- Auditorías automatizadas de SEO y enlaces internos.

## Tecnologías

- [Astro 5](https://astro.build/)
- TypeScript
- JavaScript
- CSS
- `@astrojs/sitemap`

## Instalación

Requiere una versión moderna de Node.js y npm.

```bash
npm install
npm run dev
```

El servidor de desarrollo muestra la URL local en la terminal.

## Validación y build

```bash
npm run validate
```

Este comando ejecuta la comprobación de Astro y TypeScript, genera el build de producción y valida SEO y enlaces. Para ejecutar únicamente el build:

```bash
npm run build
```

La salida estática se genera en `dist/`.

## Producción

[www.tr3c3.com](https://www.tr3c3.com)

## Estructura principal

```text
src/
  components/   Componentes Astro reutilizables
  config/       Configuración canónica del negocio y SEO
  data/         Cartas, traducciones y contenido estructurado
  i18n/         Configuración multidioma
  layouts/      Layout base y metadatos compartidos
  pages/        Rutas principales, localizadas y páginas SEO
  scripts/      Comportamiento del sitio en cliente
  styles/       Sistema visual y estilos por sección
public/
  brand/        Logotipos e identidad visual
  fonts/        Tipografías locales
  images/       Fotografías y variantes responsive
tools/          Auditorías de SEO, enlaces y sitio completo
docs/           Documentación técnica y de diseño
```

## Licencia y uso

El código y los recursos visuales de este repositorio corresponden al proyecto TR3C3 Coffee & Brunch. No se concede permiso para reutilizar la marca, fotografías o identidad visual fuera de este proyecto.
