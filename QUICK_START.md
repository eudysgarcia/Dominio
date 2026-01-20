# 🚀 Inicio Rápido

Guía rápida para poner en marcha tu portafolio en 5 minutos.

## ⚡ Instalación Rápida

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en modo desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:3000
```

## 📝 Personalización Básica (5 pasos)

### 1️⃣ Información Personal (2 minutos)

Abre `data.tsx` y actualiza:

```typescript
export const personalInfo = {
    name: "TU NOMBRE COMPLETO",
    phone: "TU-TELEFONO",
    email: "tu-email@ejemplo.com",
    website: "www.tusitio.com",
};
```

### 2️⃣ Redes Sociales (1 minuto)

En el mismo archivo `data.tsx`:

```typescript
export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "TU-URL-YOUTUBE",
        name: "YouTube"
    },
    // Actualiza las demás...
];
```

### 3️⃣ Imágenes (2 minutos)

1. Coloca tu foto de perfil en `public/` (ejemplo: `mi-foto.png`)
2. Actualiza en `data.tsx`:

```typescript
export const personalInfo = {
    // ...
    profileImage: "/mi-foto.png",
    avatarImage: "/mi-avatar.png"
};
```

### 4️⃣ Experiencia (3 minutos)

Actualiza tu experiencia en `data.tsx`:

```typescript
export const experience = [
    {
        id: 1,
        title: {
            es: "Tu Cargo",
            en: "Your Position"
        },
        company: "Tu Empresa",
        date: {
            es: "Mes Año - Actualidad",
            en: "Month Year - Present"
        },
        // ...
    }
];
```

### 5️⃣ Proyectos (2 minutos)

Agrega tus proyectos en `data.tsx`:

```typescript
export const dataPortfolio = [
    {
        id: 1,
        title: "Nombre del Proyecto",
        image: "/imagen-proyecto.png",
        urlGitlab: "URL-REPOSITORIO",
        urlDemo: "URL-DEMO",
        technologies: ["React", "Node.js"],
    }
];
```

## 🎨 Cambiar Colores (1 minuto)

Edita `tailwind.config.ts`:

```typescript
colors: {
    newbrand: "#TU-COLOR-PRINCIPAL", // Cambia #7546E8
}
```

## 🌐 Cambiar Idioma

Haz clic en el botón de idioma en el header (esquina superior derecha).

## 📦 Construir para Producción

```bash
# Construir
npm run build

# Probar build
npm run start
```

## 🚀 Desplegar

### Vercel (Más fácil):

1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio
3. Haz clic en "Deploy"
4. ¡Listo! 🎉

## 📚 Más Información

- **Personalización completa**: Ver `CUSTOMIZATION_GUIDE.md`
- **Despliegue detallado**: Ver `DEPLOYMENT.md`
- **Cambios realizados**: Ver `CHANGELOG.md`
- **Documentación completa**: Ver `README.md`

## 🆘 Problemas Comunes

### Las imágenes no se ven
- Verifica que estén en la carpeta `public/`
- Las rutas deben empezar con `/`
- Ejemplo: `/mi-imagen.png` ✅ no `mi-imagen.png` ❌

### Los cambios no se reflejan
```bash
# Detén el servidor (Ctrl+C) y reinicia
npm run dev
```

### Error al instalar
```bash
# Limpia e instala de nuevo
rm -rf node_modules package-lock.json
npm install
```

## ✅ Checklist Rápido

Antes de publicar:

- [ ] Actualicé mi información personal
- [ ] Agregué mi foto de perfil
- [ ] Actualicé mis redes sociales
- [ ] Agregué mi experiencia
- [ ] Agregué mis proyectos
- [ ] Probé el sitio localmente
- [ ] El build funciona (`npm run build`)

## 🎉 ¡Listo!

Tu portafolio está listo para impresionar. Ahora solo falta:

1. Hacer commit de tus cambios
2. Push a tu repositorio
3. Desplegar en Vercel
4. ¡Compartir con el mundo!

```bash
git add .
git commit -m "Personalización del portafolio"
git push origin main
```

---

**¿Necesitas ayuda?** Revisa los archivos de documentación o abre un issue en el repositorio.

**¡Éxito con tu nuevo portafolio! 🚀**
