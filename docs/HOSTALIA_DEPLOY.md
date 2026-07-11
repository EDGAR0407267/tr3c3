# Hostalia Deploy Guide

## 1. Instalar dependencias

En el entorno de desarrollo, ejecutar:

```bash
npm install
```

Esto instala Astro, Tailwind CSS y las herramientas necesarias para generar la web estatica.

## 2. Ejecutar build

Generar la version de produccion con:

```bash
npm run build
```

Astro creara una carpeta:

```text
dist/
```

Esa carpeta contiene la web final ya compilada.

## 3. Que carpeta se genera

La estructura de salida sera similar a:

```text
dist/
  index.html
  menu/
  brunch/
  cafe/
  contacto/
  kitchen/
  _astro/
  images/
  favicon.svg
  robots.txt
  sitemap-index.xml
```

El contenido exacto puede variar segun assets y versiones, pero `dist/` es siempre la carpeta que se entrega a produccion.

## 4. Que archivos subir a Hostalia

En Hostalia, abrir el gestor de archivos o conectarse por FTP/SFTP y entrar en:

```text
httpdocs/
```

Subir **el contenido interno de `dist/`** directamente dentro de `httpdocs/`.

Correcto:

```text
httpdocs/index.html
httpdocs/menu/
httpdocs/brunch/
httpdocs/cafe/
httpdocs/contacto/
httpdocs/kitchen/
httpdocs/_astro/
httpdocs/images/
httpdocs/favicon.svg
httpdocs/robots.txt
```

Incorrecto:

```text
httpdocs/dist/index.html
```

La carpeta `dist/` no debe quedar como carpeta visible dentro de `httpdocs/`.

## 5. Que no se debe subir

No subir:

- `node_modules/`
- `src/`
- `docs/`
- `.astro/`
- `.git/`
- `package.json`
- `package-lock.json`
- `astro.config.mjs`
- `tsconfig.json`
- Archivos `.log`

Solo se sube la web compilada dentro de `dist/`.

## 6. Como comprobar que funciona

Despues de subir:

1. Abrir el dominio principal.
2. Verificar que carga la home.
3. Probar rutas:
   - `/menu/`
   - `/brunch/`
   - `/cafe/`
   - `/contacto/`
   - `/kitchen/`
4. Probar la navegacion en movil.
5. Confirmar que las imagenes se ven.
6. Confirmar que el favicon aparece en la pestaña.
7. Abrir la consola del navegador y revisar que no haya errores 404.

## 7. Validar sitemap

Abrir:

```text
https://dominio-final.com/sitemap-index.xml
```

Debe cargar un XML valido con las URLs del sitio.

Importante: antes de publicar, actualizar `site` en `astro.config.mjs` con el dominio real y volver a ejecutar `npm run build`.

## 8. Validar robots.txt

Abrir:

```text
https://dominio-final.com/robots.txt
```

Debe incluir:

```text
User-agent: *
Allow: /
Sitemap: https://dominio-final.com/sitemap-index.xml
```

Actualizar `public/robots.txt` si el dominio final no es `https://www.tr3c3.com`.

## 9. Validar favicon

Abrir:

```text
https://dominio-final.com/favicon.svg
```

Debe verse el icono TR3C3.

## 10. Validar imagenes

Comprobar que estas rutas cargan:

```text
/images/hero-tr3c3-coffee-brunch.webp
/images/brunch-table.webp
/images/specialty-coffee.webp
/images/interior-cafe.webp
/images/croissant-coffee.webp
```

Cuando se sustituyan por fotos reales, mantener nombres o actualizar referencias en componentes y paginas.

## 11. Checklist final antes de entregar al cliente

- [ ] Dominio final configurado en `astro.config.mjs`.
- [ ] `public/robots.txt` actualizado con dominio final.
- [ ] Build ejecutado sin errores.
- [ ] Contenido de `dist/` subido directamente a `httpdocs/`.
- [ ] Home carga correctamente.
- [ ] Todas las rutas internas funcionan.
- [ ] Menu movil abre, cierra y navega.
- [ ] Imagenes cargan sin 404.
- [ ] Favicon visible.
- [ ] Sitemap accesible.
- [ ] Robots accesible.
- [ ] Titles y meta descriptions revisadas.
- [ ] Direccion, horarios, telefono e Instagram confirmados.
- [ ] Lighthouse revisado en movil.
- [ ] Google Search Console preparado para enviar sitemap.
