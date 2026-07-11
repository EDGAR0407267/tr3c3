# TR3C3 - Project Analysis

## Objetivo del proyecto

Adaptar la web estatica de **TR3C3** a una direccion mas gastronomica y lifestyle: specialty coffee, brunch moderno y kitchen mediterranea informal en Miami Platja.

La web debe transmitir que TR3C3 no es solo una cafeteria de manana. Es un lugar que evoluciona durante el dia: cafe, brunch, lunch, sweet break y dinner, con horario **lun-vie 09:00-23:00** y **sab-dom 09:00-16:00 / 20:00-23:00**.

## Stack tecnologico

- Astro con `output: "static"`.
- TypeScript para interacciones ligeras.
- Tailwind CSS para tokens y composicion visual.
- HTML semantico.
- CSS moderno con curvas, texturas, reveal, hover y `prefers-reduced-motion`.
- Sin backend, CMS, ecommerce ni base de datos.

## Estructura

```text
src/
  components/     Header, Footer, Hero, escenas, timeline, CTA, cards
  layouts/        BaseLayout con SEO, Open Graph y schema
  pages/          Home, carta, brunch, cafe, kitchen, contacto
  scripts/        Menu movil, reveal y parallax ligero
  styles/         Tokens terracota y estilos globales
public/images/    Assets WebP sustituibles por fotografia real
docs/             Documentacion y changelog
```

## Paginas actuales

- `/` Home all-day experience.
- `/menu/` Carta general.
- `/brunch/` Brunch en Miami Platja.
- `/cafe/` Cafe de especialidad.
- `/kitchen/` Comida, cena informal y platos para compartir.
- `/contacto/` Reservas, ubicacion y horario.

## Componentes principales

- `Hero.astro`: hero oscuro, editorial y gastronomico.
- `SceneSection.astro`: secciones alternas coffee/brunch con imagen y texto.
- `DayTimeline.astro`: recorrido de la primera taza a la noche.
- `OrganicDivider.astro`: separadores curvos no rectos.
- `ProductCard.astro`: cards magneticas para carta/destacados.
- `LocationSection.astro`: ubicacion con CTA a Maps.
- `CTASection.astro`: reserva/carta/como llegar.

## Decisiones de diseno

- Nuevo sistema visual terracota, arena, crema, espresso y oliva suave.
- Menos enfoque "slow mornings", mas posicionamiento "all day kitchen".
- Secciones grandes con ritmo de scroll: hero, concepto, coffee, brunch, kitchen, experiencia, timeline, ubicacion y CTA.
- Assets fotograficos generados para que el prototipo se perciba premium hasta sustituirlos por fotos reales.
- Curvas, capas, tarjetas superpuestas y fondos atmosfericos para evitar cortes planos.

## SEO local

La web queda preparada para busquedas como:

- cafeteria de especialidad Miami Platja
- brunch Miami Platja
- cafeteria brunch Miami Platja
- restaurante brunch Miami Platja
- donde desayunar en Miami Platja
- cenar informal Miami Platja
- TR3C3 Miami Platja
- TR3C3 Coffee & Brunch
- TR3C3 coffee brunch Miami Platja

Incluye titles, meta descriptions, canonicals, Open Graph, Twitter Cards, sitemap, robots y schema `CafeOrCoffeeShop` con horario `Mo-Fr 09:00-23:00`, `Sa-Su 09:00-16:00` y `Sa-Su 20:00-23:00`.

## Rendimiento

- Build estatico en `dist/`.
- JavaScript minimo.
- Sin librerias de animacion.
- Imagenes WebP optimizadas.
- Lazy loading en imagenes no criticas.
- Animaciones GPU-friendly y desactivables con `prefers-reduced-motion`.

## Hostalia

Ejecutar:

```bash
npm run build
```

Subir el contenido interno de `dist/` directamente a `httpdocs/`.

## Limitaciones actuales

- Fotos generadas, pendientes de sustituir por imagen real del local.
- Direccion exacta, telefono, WhatsApp e Instagram pendientes.
- Carta sin precios ni alergenos.
- Reserva enlazada a email/contacto, sin sistema complejo.

## Siguientes pasos

1. Confirmar direccion, telefono, WhatsApp, Instagram y dominio final.
2. Sustituir fotos generadas por fotos reales del local y platos.
3. Completar carta con precios, alergenos y platos definitivos.
4. Revisar textos con tono final de marca.
5. Medir Lighthouse en movil antes de publicar.
