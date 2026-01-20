# 🚀 Portafolio Personal - Eudys García Saviñón

Portafolio web profesional de Eudys García Saviñón, Desarrollador Full Stack especializado en JavaScript, React, Node.js, PHP y .NET.

## ✨ Características

- 🌐 **Multiidioma**: Soporte completo para Español e Inglés
- 📱 **Responsive**: Diseño adaptable a todos los dispositivos
- 🎨 **Diseño Moderno**: Interfaz atractiva con animaciones y efectos visuales
- ⚡ **Rendimiento Optimizado**: Construido con Next.js 15 y React 19
- 🎯 **Secciones Completas**:
  - Página de inicio con presentación dinámica
  - Sobre mí con experiencia profesional, educación y habilidades
  - Servicios con slider interactivo
  - Portafolio de proyectos
  - Información de contacto

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 15** - Framework de React
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **Framer Motion** - Animaciones
- **Swiper** - Carruseles

### Características Adicionales
- **Partículas Interactivas** - @tsparticles
- **Animaciones de Texto** - react-type-animation
- **Contadores Animados** - react-countup
- **Iconos** - lucide-react

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18 o superior
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repo.git

# Navegar al directorio
cd tu-repo

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en producción
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
├── app/
│   ├── (routes)/
│   │   ├── about-me/      # Página sobre mí
│   │   ├── portfolio/     # Página de portafolio
│   │   └── services/      # Página de servicios
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   └── globals.css        # Estilos globales
├── components/            # Componentes reutilizables
│   ├── education-section.tsx
│   ├── experience-section.tsx
│   ├── skills-section.tsx
│   ├── language-toggle.tsx
│   ├── footer.tsx
│   └── ...
├── contexts/
│   └── LanguageContext.tsx # Contexto de idioma
├── translations/
│   └── index.ts           # Traducciones
├── data.tsx               # Datos del portafolio
└── public/                # Recursos estáticos
```

## 🎨 Personalización

### Cambiar Colores
Edita `tailwind.config.ts` para modificar los colores del tema:

```typescript
colors: {
  secondary: "#f5741c",
  darkBg: "#131424",
  newbrand: "#7546E8", // Color principal
}
```

### Actualizar Información Personal
Modifica `data.tsx` para actualizar tu información:

```typescript
export const personalInfo = {
  name: "Tu Nombre",
  title: {
    es: "Tu Título",
    en: "Your Title"
  },
  // ... más información
}
```

### Agregar Proyectos
Añade nuevos proyectos en `data.tsx`:

```typescript
export const dataPortfolio = [
  {
    id: 1,
    title: "Nombre del Proyecto",
    image: "/ruta-imagen.png",
    urlGitlab: "url-repositorio",
    urlDemo: "url-demo",
    technologies: ["React", "Node.js"],
    description: {
      es: "Descripción en español",
      en: "Description in English"
    }
  }
]
```

## 🌐 Internacionalización

El sitio soporta múltiples idiomas usando React Context. Para agregar un nuevo idioma:

1. Edita `translations/index.ts`
2. Agrega las traducciones correspondientes
3. Actualiza el tipo `Language` en `LanguageContext.tsx`

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🔧 Scripts Disponibles

```bash
npm run dev      # Modo desarrollo
npm run build    # Construir para producción
npm run start    # Iniciar servidor de producción
npm run lint     # Ejecutar linter
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Eudys García Saviñón**
- 🌐 Website: [www.eudexcode.com](https://www.eudexcode.com)
- 📧 Email: eudysgs.s@gmail.com
- 💼 LinkedIn: [Eudys García](https://www.linkedin.com/in/eudys-garcia-s-bb4377290/)
- 🎥 YouTube: [@EudexCode](https://www.youtube.com/@EudexCode)
- 📷 Instagram: [@eudexcode](https://www.instagram.com/eudexcode)

## 🙏 Agradecimientos

Gracias por visitar mi portafolio. Si tienes alguna pregunta o sugerencia, no dudes en contactarme.

---

⭐ Si te gusta este proyecto, dale una estrella en GitHub!
