# Soporte JD – Página web

Página de Soporte JD (Montería, Córdoba) hecha en Astro. Se publica en **soportejd.com** con Cloudflare Workers.

## Estructura

```
soporte_jd/
├── public/
│   ├── logo.jpg
│   ├── img/                  Fotos de los servicios (ver abajo)
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Servicios.astro
│   │   ├── Software.astro    Software, ERP y proyectos (Doret, DISTRIMAS)
│   │   ├── Distrimas.astro
│   │   ├── Proceso.astro
│   │   ├── Contacto.astro
│   │   ├── Footer.astro
│   │   ├── Foto.astro        Foto con color de respaldo
│   │   └── Icon.astro        Íconos SVG
│   ├── data/
│   │   └── servicios.ts      Textos, colores y fotos de los 5 servicios
│   ├── layouts/
│   │   └── Layout.astro      SEO, Open Graph y datos de negocio local
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── wrangler.jsonc            Configuración del Worker de Cloudflare
└── package.json
```

## Uso local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera la carpeta dist
npm run preview
```

## Fotos de los servicios

Van en `public/img/` con estos nombres exactos:
`camaras.jpg`, `computadores.jpg`, `software.jpg`, `ups.jpg`, `redes.jpg`.
Si una foto no existe, la tarjeta muestra el color del servicio con su ícono.

## Publicación (Cloudflare)

- Worker: `soporte-jd`, conectado a este repositorio. Cada cambio en `main` se publica solo.
- Comando de compilación: `npm run build` · Comando de implementación: `npx wrangler deploy`
- `wrangler.jsonc` publica la carpeta `dist`.
- Dominios: `soportejd.com` y `www.soportejd.com`.

## Contacto

Soporte JD · Montería, Córdoba, Colombia
WhatsApp: +57 301 653 7553 · Correo: jdsoporte98@gmail.com
