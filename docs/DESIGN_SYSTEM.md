# TR3C3 - Design System

## Personalidad visual

TR3C3 se posiciona como **specialty coffee, brunch & kitchen** en Miami Platja. La marca debe sentirse premium, calida, mediterranea, instagrameable y cercana.

No busca parecer una cafeteria pequena de manana ni un restaurante corporativo. Debe vender experiencia: cafe bien hecho, mesa bonita, cocina informal y ambiente social desde la manana hasta la noche, con descanso de tarde los fines de semana.

## Paleta

Tokens principales en `src/styles/global.css`:

- `espresso`: contraste, header oscuro, fondos intensos.
- `clay`: terracota principal para CTAs y acentos.
- `terracotta`: apoyo calido.
- `paper`: arena/crema de fondo.
- `foam`: blanco roto para superficies.
- `sand`: textura mediterranea.
- `sage` y `olive`: acentos naturales para romper la monotonia.
- `coffee` y `roast`: textos y matices cafe.

Regla: la web puede ser calida, pero no plana ni solo beige. Usar espresso y oliva para profundidad.

## Tipografia

- Titulares: serif editorial mediante `--font-display`.
- Cuerpo, navegacion y CTAs: sans limpia mediante `--font-sans`.

Los titulares son grandes, con aire y ritmo editorial. Los CTAs son compactos, uppercase y tactiles.

## Componentes

### Hero

- Fondo fotografico oscuro con overlay espresso.
- H1 muy grande.
- CTAs: Ver carta, Reservar mesa, Como llegar.
- Elementos flotantes con horario 09:00-23:00 entre semana.

### Escenas

- Cada seccion debe sentirse diferente.
- Alternar imagen izquierda/derecha.
- Usar bloques oscuros, terracota y crema.
- Imagenes grandes, radios organicos y tarjetas superpuestas.

### Timeline

Representa el dia en TR3C3:

- 09:00 Coffee
- 11:00 Brunch
- 14:00 Lunch
- 17:00 Sweet break
- 20:00 Dinner

## Imagenes

Slots actuales:

- `hero-tr3c3-coffee-brunch.webp`
- `specialty-coffee.webp`
- `brunch-table.webp`
- `kitchen-evening.webp`
- `interior-cafe.webp`
- `croissant-coffee.webp`

Estilo recomendado para fotografia real:

- Luz natural calida.
- Terracota, madera, ceramica, lino, plantas.
- Cafe y platos reconocibles.
- Ambiente real del local.
- Evitar fotos oscuras, filtros agresivos o stock generico.

## Animaciones

Permitidas:

- Reveal al scroll.
- Stagger en cards.
- Parallax muy sutil en imagenes.
- Elementos flotantes lentos.
- Hover magnetico en cards y botones.
- Menu movil fluido.

No usar:

- GSAP.
- Parallax agresivo.
- Sliders pesados.
- Animaciones que cansen en movil.

Siempre respetar `prefers-reduced-motion`.

## Tono de comunicacion

Sensorial, directo y mediterraneo.

Frases guia:

- "De la primera taza al ultimo plato."
- "Cafe, brunch y cocina mediterranea para cualquier momento del dia."
- "Un lugar para desayunar lento, comer bien y quedarse un poco mas."
- "Lun-vie 09:00-23:00; sab-dom 09:00-16:00 y 20:00-23:00 en Miami Platja."

Evitar textos largos, cursileria y claims no confirmados.

## Concepto visual

La referencia generada para esta direccion esta guardada en:

```text
docs/design-concept-tr3c3.png
```

Usarla como guia de ritmo, color y composicion, no como asset de UI final.
