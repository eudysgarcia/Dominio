# 🚀 Guía de Despliegue del Portafolio

Esta guía te ayudará a desplegar tu portafolio en diferentes plataformas.

## 📋 Requisitos Previos

Antes de desplegar, asegúrate de:

- ✅ Haber personalizado toda tu información en `data.tsx`
- ✅ Haber actualizado las traducciones en `translations/index.ts`
- ✅ Haber agregado tus imágenes en la carpeta `public/`
- ✅ Haber probado el sitio localmente (`npm run dev`)
- ✅ No tener errores de linting (`npm run lint`)
- ✅ Que el build funcione correctamente (`npm run build`)

## 🌐 Opción 1: Vercel (Recomendado)

Vercel es la plataforma oficial de Next.js y ofrece despliegue gratuito.

### Pasos:

1. **Crear cuenta en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Regístrate con tu cuenta de GitHub, GitLab o Bitbucket

2. **Conectar tu repositorio**
   - Haz clic en "New Project"
   - Importa tu repositorio de Git
   - Vercel detectará automáticamente que es un proyecto Next.js

3. **Configurar el proyecto**
   - Framework Preset: Next.js (detectado automáticamente)
   - Build Command: `npm run build`
   - Output Directory: `.next` (por defecto)
   - Install Command: `npm install`

4. **Variables de entorno** (si las necesitas)
   - Agrega cualquier variable de entorno necesaria
   - Ejemplo: API keys, URLs de bases de datos, etc.

5. **Desplegar**
   - Haz clic en "Deploy"
   - Espera a que termine el proceso (2-3 minutos)
   - ¡Tu sitio estará en línea!

### Dominio personalizado en Vercel:

```bash
# En la configuración del proyecto en Vercel:
1. Ve a Settings > Domains
2. Agrega tu dominio personalizado
3. Configura los DNS según las instrucciones
```

## 🔷 Opción 2: Netlify

Netlify es otra excelente opción para desplegar aplicaciones Next.js.

### Pasos:

1. **Crear cuenta en Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Regístrate con tu cuenta de Git

2. **Nuevo sitio desde Git**
   - Haz clic en "New site from Git"
   - Conecta tu repositorio

3. **Configuración de build**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **Variables de entorno**
   - Ve a Site settings > Build & deploy > Environment
   - Agrega tus variables

5. **Desplegar**
   - Haz clic en "Deploy site"

## 🐙 Opción 3: GitHub Pages

Para usar GitHub Pages con Next.js, necesitas configuración adicional.

### Pasos:

1. **Instalar gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Actualizar package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d out"
     }
   }
   ```

3. **Actualizar next.config.ts**
   ```typescript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   ```

4. **Desplegar**
   ```bash
   npm run deploy
   ```

## ☁️ Opción 4: AWS Amplify

AWS Amplify ofrece hosting gratuito con CI/CD integrado.

### Pasos:

1. **Crear cuenta en AWS**
   - Ve a [aws.amazon.com](https://aws.amazon.com)
   - Crea una cuenta (necesitas tarjeta de crédito)

2. **Ir a AWS Amplify**
   - Busca "Amplify" en la consola de AWS
   - Haz clic en "Get Started" bajo "Host your web app"

3. **Conectar repositorio**
   - Selecciona tu proveedor de Git
   - Autoriza y selecciona tu repositorio

4. **Configuración de build**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

5. **Desplegar**
   - Revisa la configuración
   - Haz clic en "Save and deploy"

## 🔧 Configuración de Dominio Personalizado

### Para cualquier plataforma:

1. **Comprar un dominio**
   - Namecheap, GoDaddy, Google Domains, etc.

2. **Configurar DNS**
   - Tipo A: Apunta a la IP de tu hosting
   - Tipo CNAME: Apunta a tu subdominio de hosting

3. **Ejemplo de configuración DNS:**
   ```
   Type    Name    Value
   A       @       76.76.21.21
   CNAME   www     tu-sitio.vercel.app
   ```

4. **Esperar propagación**
   - Puede tomar de 1 a 48 horas

## 🔒 HTTPS y SSL

Todas las plataformas mencionadas ofrecen SSL gratuito:

- **Vercel**: Automático
- **Netlify**: Automático
- **GitHub Pages**: Automático (con dominio personalizado)
- **AWS Amplify**: Automático

## 📊 Analytics (Opcional)

### Google Analytics:

1. **Crear cuenta en Google Analytics**
   - Ve a [analytics.google.com](https://analytics.google.com)

2. **Obtener ID de seguimiento**
   - Ejemplo: `G-XXXXXXXXXX`

3. **Instalar next/script**
   ```tsx
   // app/layout.tsx
   import Script from 'next/script'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <head>
           <Script
             src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
             strategy="afterInteractive"
           />
           <Script id="google-analytics" strategy="afterInteractive">
             {`
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', 'G-XXXXXXXXXX');
             `}
           </Script>
         </head>
         <body>{children}</body>
       </html>
     )
   }
   ```

## 🔄 Actualizaciones Automáticas

Con Vercel, Netlify o AWS Amplify:

1. Haz cambios en tu código
2. Haz commit y push a tu repositorio
3. El sitio se actualizará automáticamente

```bash
git add .
git commit -m "Actualización del portafolio"
git push origin main
```

## 🐛 Solución de Problemas

### Error: "Module not found"
```bash
# Limpia node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
```

### Error de build
```bash
# Verifica que el build funcione localmente
npm run build
npm run start
```

### Imágenes no se cargan
- Verifica que las rutas comiencen con `/`
- Asegúrate de que las imágenes estén en `public/`
- Si usas GitHub Pages, configura `images.unoptimized: true`

### CSS no se aplica
- Verifica que `globals.css` esté importado en `layout.tsx`
- Limpia la caché del navegador

## 📈 Optimización Post-Despliegue

1. **Lighthouse Score**
   - Abre DevTools (F12)
   - Ve a la pestaña "Lighthouse"
   - Ejecuta un análisis
   - Sigue las recomendaciones

2. **Optimizar imágenes**
   ```bash
   # Instala herramienta de optimización
   npm install -g sharp-cli
   
   # Optimiza imágenes
   sharp -i input.jpg -o output.jpg -q 80
   ```

3. **Comprimir archivos**
   - Vercel y Netlify lo hacen automáticamente
   - Habilita compresión gzip/brotli

## ✅ Checklist de Despliegue

Antes de hacer público tu sitio:

- [ ] Toda la información personal está actualizada
- [ ] Las imágenes están optimizadas
- [ ] Los enlaces funcionan correctamente
- [ ] El sitio es responsive
- [ ] No hay errores en la consola
- [ ] El SEO está configurado
- [ ] Analytics está configurado (opcional)
- [ ] El dominio personalizado está configurado
- [ ] SSL/HTTPS está activo
- [ ] Has probado el sitio en diferentes navegadores

## 🎉 ¡Felicidades!

Tu portafolio está en línea. Ahora puedes:

- Compartirlo en redes sociales
- Agregarlo a tu CV
- Incluirlo en tu firma de email
- Usarlo en aplicaciones de trabajo

---

**Recursos adicionales:**
- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Vercel](https://vercel.com/docs)
- [Documentación de Netlify](https://docs.netlify.com)
