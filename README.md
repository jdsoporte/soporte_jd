# Soporte JD – Landing Page en Astro

## 📁 Estructura del proyecto

```
soporte-jd/
├── public/
│   ├── logo.jpg          ← AGREGA AQUÍ TU LOGO (renómbralo a logo.jpg)
│   ├── og-image.jpg      ← AGREGA imagen 1200x630px para compartir en redes
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Servicios.astro
│   │   ├── MenuDigital.astro
│   │   ├── Proceso.astro
│   │   ├── Contacto.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

---

## 🚀 Instalación y uso

### 1. Instalar dependencias
```bash
npm install
```

### 2. Servidor de desarrollo local
```bash
npm run dev
```
Abre http://localhost:4321 en tu navegador.

### 3. Construir para producción
```bash
npm run build
```
Los archivos listos para subir quedan en la carpeta `/dist`

### 4. Vista previa de producción
```bash
npm run preview
```

---

## ⚙️ Configuración antes de subir

### A. Cambiar el dominio
En `astro.config.mjs`, reemplaza:
```js
site: 'https://www.soporte-jd.com'
```
por tu dominio real, por ejemplo:
```js
site: 'https://www.tudominio.com'
```

También actualiza la URL en `src/layouts/Layout.astro` (campo `"url"` del schema JSON-LD).

### B. Agregar tu logo
- Copia tu imagen de logo a `/public/logo.jpg`
- Recomendado: formato JPG o PNG, mínimo 200x200px

### C. Imagen para redes sociales (OG Image)
- Crea una imagen de 1200×630 píxeles con tu logo y nombre
- Guárdala como `/public/og-image.jpg`
- Esta imagen aparece cuando alguien comparte tu página en WhatsApp o Facebook

---

## 📲 Activar redes sociales
Cuando tengas tus perfiles, busca en `src/components/Contacto.astro` la sección marcada con:
```
<!-- INSTRUCCIONES PARA ACTIVAR REDES SOCIALES -->
```
Sigue los 3 pasos indicados ahí.

---

## 🌐 Subir al hosting

### Opción 1 – Hosting tradicional (cPanel, etc.)
1. Ejecuta `npm run build`
2. Sube el contenido de la carpeta `/dist` a la carpeta `public_html` de tu hosting
3. ¡Listo!

### Opción 2 – Netlify (gratis y recomendado)
1. Crea cuenta en netlify.com
2. Arrastra la carpeta `/dist` al panel de Netlify
3. Conecta tu dominio en la configuración

### Opción 3 – Vercel (gratis)
1. Sube el proyecto a GitHub
2. Conecta el repositorio en vercel.com
3. Se despliega automáticamente

---

## 🔍 SEO incluido

- ✅ Meta tags completos (title, description, keywords)
- ✅ Open Graph (Facebook, WhatsApp)
- ✅ Twitter Card
- ✅ Schema.org LocalBusiness con datos de Montería
- ✅ Geo tags (latitud/longitud Montería)
- ✅ robots.txt
- ✅ Sitemap automático (actívalo en astro.config.mjs con @astrojs/sitemap)
- ✅ HTML semántico (article, section, nav, main, footer)
- ✅ Atributos aria-label para accesibilidad
- ✅ Imágenes con alt text descriptivo
- ✅ Carga rápida (Astro genera HTML estático)

### Para activar el Sitemap automático:
```bash
npx astro add sitemap
```
Luego en `astro.config.mjs`:
```js
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://www.tudominio.com',
  integrations: [sitemap()],
});
```

---

## 📞 Contacto del proyecto
**Soporte JD** · Montería, Córdoba, Colombia
- WhatsApp: +57 301 653 7553
- Correo: jdsoporte98@gmail.com
