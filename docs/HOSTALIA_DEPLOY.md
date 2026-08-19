# Despliegue de TR3C3 en Hostalia

## 1. Validar y compilar

Desde la raíz del proyecto:

```powershell
npm ci
npm run validate
```

La salida estática se genera en `dist/`. El build final esperado contiene 98 documentos de página, 70 URLs indexables, `404.html`, `.htaccess`, `robots.txt` y `sitemap-index.xml`.

## 2. Subir el artefacto correcto

Subir el contenido interno de `dist/` directamente al document root de Hostalia, normalmente `httpdocs/`.

Correcto:

```text
httpdocs/index.html
httpdocs/es/
httpdocs/ca/
httpdocs/en/
httpdocs/fr/
httpdocs/de/
httpdocs/zh/
httpdocs/nl/
httpdocs/it/
httpdocs/_astro/
httpdocs/images/
httpdocs/404.html
httpdocs/.htaccess
httpdocs/robots.txt
httpdocs/sitemap-index.xml
```

No subir `dist/` como subcarpeta ni subir `src/`, `node_modules/`, `.git/`, informes QA o archivos de desarrollo.

## 3. Requisitos de Apache

`public/.htaccess` se copia a `dist/.htaccess` y configura:

- HTTPS y `www.tr3c3.com` como host canónico.
- Redirecciones 301 exactas para rutas históricas/consolidadas.
- `ErrorDocument 404 /404.html`.
- Brotli/Gzip cuando el módulo está disponible.
- Caché larga para assets con hash e imágenes/fuentes; HTML se revalida.
- MIME de WOFF2, WebP, AVIF, SVG y manifest.
- Cabeceras de seguridad compatibles.

Comprobar que Hostalia permite `mod_rewrite`, `mod_headers`, `mod_expires` y `mod_deflate` o `mod_brotli`. Si usa proxy HTTPS, la regla contempla `X-Forwarded-Proto`.

## 4. Checklist posterior al despliegue

```powershell
curl.exe -I http://tr3c3.com/es/
curl.exe -I https://tr3c3.com/es/
curl.exe -I https://www.tr3c3.com/menu/
curl.exe -I https://www.tr3c3.com/ruta-inexistente-qa/
```

Verificar:

- HTTP y dominio sin `www` hacen un único 301 a `https://www.tr3c3.com/...`.
- `/menu/` hace 301 a `/es/carta/` sin cadena.
- Una URL inexistente devuelve estado 404 y el documento personalizado, no 200.
- `/robots.txt` y `/sitemap-index.xml` responden 200.
- CSS, JS, fuentes e imágenes no devuelven 404.
- Navegación, menú móvil, idiomas, teléfono, Maps, Instagram y carta funcionan.
- Las respuestas comprimibles incluyen `Content-Encoding: br` o `gzip` cuando el cliente lo solicita.
- HTML no recibe caché inmutable; `_astro/` sí puede cachearse un año porque usa hash.

## 5. Validación externa

Después de publicar:

1. Enviar el sitemap en Google Search Console y Bing Webmaster Tools.
2. Inspeccionar home, carta y contacto.
3. Ejecutar Rich Results Test y Schema Markup Validator.
4. Ejecutar PageSpeed Insights sobre la URL pública.
5. Confirmar que canonical, Open Graph y `hreflang` usan el dominio definitivo.

Si el dominio final no es `https://www.tr3c3.com`, actualizar `astro.config.mjs`, `src/config/business.ts`, `public/robots.txt` y `.htaccess`, y volver a ejecutar el build antes de subirlo.
