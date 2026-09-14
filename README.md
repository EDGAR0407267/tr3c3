# TR3C3 Coffee & Brunch

Este repositorio contiene la web oficial de **TR3C3 Coffee & Brunch**, un espacio en Miami Platja (Tarragona) dedicado al café de especialidad, los desayunos, el brunch y la cocina mediterránea. He desarrollado esta web para trasladar al entorno digital la identidad de TR3C3: un lugar cercano, cuidado y pensado para disfrutar desde el primer café de la mañana hasta la cena y las copas de la noche.

## La web

Mi objetivo ha sido crear una experiencia visual, rápida y fácil de utilizar desde cualquier dispositivo. La web permite conocer el concepto de TR3C3, consultar sus cartas, descubrir al equipo y encontrar toda la información necesaria para visitar el local.

Entre sus principales características están:

- Diseño responsive para móvil, tablet y escritorio.
- Cartas de desayunos, brunch, comida, bebidas, vinos y cócteles.
- Contenido disponible en español, catalán, inglés, francés, alemán, neerlandés, italiano y chino simplificado.
- Información de contacto, horarios y ubicación mediante Google Maps.
- Integración con el perfil oficial de Instagram.
- Imágenes optimizadas en formatos WebP y AVIF.
- SEO técnico, datos estructurados, sitemap, etiquetas canonical y páginas orientadas a búsquedas locales.
- Navegación accesible, página 404 y redirecciones para rutas antiguas.
- Auditorías automáticas de SEO y enlaces internos.

## Tecnologías que he utilizado

He construido el proyecto principalmente con:

- [Astro 5](https://astro.build/) para crear una web estática rápida, modular y optimizada.
- **TypeScript** para mantener el código tipado, ordenado y fácil de mantener.
- **JavaScript** para las interacciones y el comportamiento en el navegador.
- **HTML semántico** y componentes `.astro` para estructurar el contenido.
- **CSS** para desarrollar todo el sistema visual, las animaciones y el diseño responsive.
- [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/) para generar el sitemap automáticamente.
- **Node.js y npm** para gestionar dependencias, scripts de desarrollo, validación y build.

También he trabajado especialmente la optimización de recursos, el rendimiento, la accesibilidad, la arquitectura multidioma y el SEO local.

## Enlaces

- Web: [trecemiami.com](https://trecemiami.com)
- Instagram: [@trece.coffee.brunch](https://www.instagram.com/trece.coffee.brunch/)

## Desarrollo local

Para ejecutar el proyecto es necesario tener instalada una versión moderna de Node.js y npm.

```bash
npm install
npm run dev
```

Para comprobar el código, generar la versión de producción y ejecutar las auditorías de SEO y enlaces:

```bash
npm run validate
```

También se puede generar únicamente el build de producción con:

```bash
npm run build
```

Los archivos estáticos finales se generan en `dist/`.

## Estructura del proyecto

```text
src/
  components/   Componentes reutilizables de Astro
  config/       Configuración del negocio y del SEO
  data/         Cartas, traducciones y contenido estructurado
  i18n/         Configuración multidioma
  layouts/      Layout principal y metadatos compartidos
  pages/        Rutas, páginas localizadas y páginas de SEO local
  scripts/      Interacciones del lado del cliente
  styles/       Sistema visual y estilos de cada sección
public/
  brand/        Logotipos y recursos de identidad visual
  fonts/        Tipografías alojadas localmente
  images/       Fotografías y variantes responsive
tools/          Scripts de optimización y auditoría
docs/           Documentación técnica y de despliegue
```

## Licencia y uso

El código, la marca, las fotografías y los recursos visuales de este repositorio pertenecen al proyecto TR3C3 Coffee & Brunch. No se autoriza su reutilización fuera de este proyecto sin permiso previo.
