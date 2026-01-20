# 📝 Guía de Personalización del Portafolio

Esta guía te ayudará a personalizar tu portafolio con tu propia información.

## 🎯 Paso 1: Información Personal

Edita el archivo `data.tsx` y actualiza la sección `personalInfo`:

```typescript
export const personalInfo = {
    name: "Tu Nombre Completo",
    title: {
        es: "Tu Título en Español",
        en: "Your Title in English"
    },
    location: {
        es: "Tu Ciudad, País",
        en: "Your City, Country"
    },
    phone: "tu-telefono",
    email: "tu-email@ejemplo.com",
    website: "www.tusitio.com",
    profileImage: "/tu-imagen-perfil.png",
    avatarImage: "/tu-avatar.png"
};
```

## 👔 Paso 2: Experiencia Profesional

Actualiza la sección `experience` en `data.tsx`:

```typescript
export const experience = [
    {
        id: 1,
        title: {
            es: "Tu Cargo en Español",
            en: "Your Position in English"
        },
        company: "Nombre de la Empresa",
        location: {
            es: "Ciudad, País",
            en: "City, Country"
        },
        date: {
            es: "Mes Año - Actualidad",
            en: "Month Year - Present"
        },
        description: {
            es: [
                "Logro o responsabilidad 1",
                "Logro o responsabilidad 2",
                // Agrega más según necesites
            ],
            en: [
                "Achievement or responsibility 1",
                "Achievement or responsibility 2",
                // Add more as needed
            ]
        }
    }
];
```

## 🎓 Paso 3: Educación

Actualiza la sección `education`:

```typescript
export const education = [
    {
        id: 1,
        degree: {
            es: "Tu Título",
            en: "Your Degree"
        },
        institution: "Nombre de la Institución",
        date: "Año Inicio - Año Fin",
        icon: <GraduationCap size={24} />
    }
];
```

## 💼 Paso 4: Servicios

Personaliza tus servicios en la sección `serviceData`:

```typescript
export const serviceData = [
    {
        id: 1,
        icon: <Monitor />, // Cambia el icono según tu servicio
        title: {
            es: "Nombre del Servicio",
            en: "Service Name"
        },
        description: {
            es: "Descripción detallada del servicio en español",
            en: "Detailed service description in English"
        },
    }
];
```

## 🎨 Paso 5: Proyectos del Portafolio

Agrega tus proyectos en `dataPortfolio`:

```typescript
export const dataPortfolio = [
    {
        id: 1,
        title: "Nombre del Proyecto",
        image: "/ruta-a-tu-imagen.png",
        urlGitlab: "https://gitlab.com/tu-usuario/tu-proyecto",
        urlDemo: "https://tu-demo.com",
        technologies: ["React", "Node.js", "MongoDB"],
        description: {
            es: "Descripción del proyecto en español",
            en: "Project description in English"
        }
    }
];
```

## 🛠️ Paso 6: Habilidades Técnicas

Actualiza tus habilidades en la sección `skills`:

```typescript
export const skills = {
    languages: ["JavaScript", "Python", "Java"],
    frameworks: ["React", "Angular", "Vue"],
    databases: ["MySQL", "MongoDB", "PostgreSQL"],
    tools: ["Git", "Docker", "AWS"],
    frontend: ["HTML5", "CSS3", "Sass"],
    methodology: ["Agile", "Scrum", "Kanban"],
};
```

## 🌐 Paso 7: Redes Sociales

Actualiza tus enlaces de redes sociales en `socialNetworks`:

```typescript
export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://youtube.com/tu-canal",
        name: "YouTube"
    },
    // Agrega más redes según necesites
];
```

## 📊 Paso 8: Estadísticas

Personaliza tus números en `dataCounter`:

```typescript
export const dataCounter = [
    {
        id: 0,
        endCounter: 5, // Cambia este número
        text: {
            es: "Años de experiencia",
            en: "Years of experience"
        },
        lineRight: true,
        lineRightMobile: true,
    }
];
```

## 🖼️ Paso 9: Imágenes

1. Coloca tus imágenes en la carpeta `public/`
2. Actualiza las rutas en `data.tsx`
3. Formatos recomendados:
   - Foto de perfil: 400x400px (PNG con fondo transparente)
   - Imágenes de proyectos: 800x600px (JPG o PNG)
   - Avatar: 300x300px (PNG con fondo transparente)

## 🎨 Paso 10: Colores del Tema

Edita `tailwind.config.ts` para cambiar los colores:

```typescript
colors: {
  secondary: "#tu-color-secundario",
  darkBg: "#tu-color-fondo-oscuro",
  newbrand: "#tu-color-principal", // Este es el color morado/violeta
}
```

## 📝 Paso 11: Traducciones Adicionales

Si necesitas agregar más traducciones, edita `translations/index.ts`:

```typescript
export const translations = {
  es: {
    nueva_clave: "Texto en español",
  },
  en: {
    nueva_clave: "Text in English",
  }
};
```

## 📄 Paso 12: CV Descargable

1. Crea tu CV en formato PDF
2. Nómbralo `cv-tu-nombre.pdf`
3. Colócalo en la carpeta `public/`
4. Actualiza la ruta en los componentes:
   - `components/introduction.tsx`
   - `components/contact-info.tsx`

```tsx
<a href="/cv-tu-nombre.pdf" download>
```

## 🚀 Paso 13: Metadata y SEO

Actualiza el SEO en `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Tu Nombre | Tu Título",
  description: "Tu descripción profesional",
  keywords: "tus, palabras, clave",
  authors: [{ name: "Tu Nombre" }],
  openGraph: {
    title: "Tu Nombre | Tu Título",
    description: "Tu descripción",
    url: "https://tu-sitio.com",
    siteName: "Tu Sitio",
    locale: "es_DO",
    type: "website",
  },
};
```

## ✅ Checklist Final

Antes de publicar, verifica:

- [ ] Toda la información personal está actualizada
- [ ] Las imágenes están optimizadas y cargadas
- [ ] Los enlaces de redes sociales funcionan
- [ ] El CV descargable está disponible
- [ ] Las traducciones están completas
- [ ] Los colores del tema están personalizados
- [ ] La información de contacto es correcta
- [ ] Los proyectos tienen imágenes y enlaces válidos
- [ ] El sitio es responsive en móvil, tablet y desktop
- [ ] No hay errores de consola

## 🆘 Solución de Problemas

### Las imágenes no se muestran
- Verifica que las imágenes estén en la carpeta `public/`
- Asegúrate de que las rutas comiencen con `/`
- Ejemplo: `/mi-imagen.png` no `mi-imagen.png`

### Los cambios no se reflejan
- Detén el servidor (Ctrl+C)
- Ejecuta `npm run dev` nuevamente
- Limpia el caché del navegador (Ctrl+Shift+R)

### Errores de TypeScript
- Asegúrate de que todos los objetos tengan las propiedades requeridas
- Verifica que las traducciones estén en ambos idiomas (es y en)

## 📞 Soporte

Si tienes problemas, revisa:
1. La consola del navegador (F12)
2. La terminal donde corre el servidor
3. El archivo `README.md` para instrucciones de instalación

---

¡Buena suerte con tu portafolio! 🎉
