export type Project = {
  title: string;
  slug: string;
  description?: string;
  image?: string;       // ruta en /public/images
  url?: string;
  github?: string;
  tags?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Cinammon.net",
    slug: "cinammon-net",
    description: "Mi proyecto principal - una plataforma web innovadora que combina funcionalidad moderna con diseño elegante. Representa la culminación de mis habilidades en desarrollo web y mi visión creativa para experiencias digitales excepcionales.",
    url: "https://cinammon.net",
    github: "https://github.com/lz20r/cinammon",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Database"],
    featured: true,
  },
  {
    title: "Portfolio Digital Interactivo",
    slug: "portfolio-digital-interactivo",
    description: "Mi portfolio personal desarrollado con Astro y diseño sketch/dibujado. Incluye modo oscuro, animaciones CSS personalizadas y diseño responsive. Combina mi formación técnica con mi pasión por el arte digital.",
    url: "https://zhiyao.dev",
    github: "https://github.com/lz20r/portfolio",
    tags: ["Astro", "Tailwind CSS", "TypeScript", "CSS Animations", "Responsive Design"],
  },
  {
    title: "Aplicación de Gestión de Tareas",
    slug: "app-gestion-tareas",
    description: "Aplicación web para gestión de tareas personales y proyectos. Desarrollada durante mi formación en DAW, incluye autenticación, CRUD completo, filtros avanzados y interfaz intuitiva.",
    url: "https://tasks-manager-nz.netlify.app",
    github: "https://github.com/lz20r/task-manager-app",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "Material-UI"],
  },
  {
    title: "App Móvil de Galería Artística",
    slug: "app-galeria-artistica",
    description: "Aplicación móvil para visualizar y compartir arte digital. Proyecto de DAM que combina mi interés en arte con desarrollo móvil. Incluye filtros por categorías y sistema de favoritos.",
    github: "https://github.com/lz20r/art-gallery-mobile",
    tags: ["React Native", "Firebase", "Expo", "Redux", "AsyncStorage"],
  },
  {
    title: "Sistema de Biblioteca Universitaria",
    slug: "sistema-biblioteca",
    description: "Sistema web para gestión de biblioteca desarrollado como proyecto final de DAW. Incluye préstamos, reservas, catálogo online y panel administrativo con reportes.",
    github: "https://github.com/lz20r/library-management-system",
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery", "Chart.js"],
  },
  {
    title: "Calculadora Científica Avanzada",
    slug: "calculadora-cientifica",
    description: "Calculadora web con funciones matemáticas avanzadas, gráficos de funciones y conversión de unidades. Aprovecha mi background en matemáticas aplicado al desarrollo web.",
    url: "https://calc-scientific-nz.vercel.app",
    github: "https://github.com/lz20r/scientific-calculator",
    tags: ["JavaScript", "HTML5 Canvas", "CSS3", "Math.js", "Chart.js"],
  },
  {
    title: "Blog Personal con CMS",
    slug: "blog-personal-cms",
    description: "Blog personal con sistema de gestión de contenido personalizado. Comparto mis experiencias en programación y arte digital. Incluye comentarios, categorías y búsqueda avanzada.",
    url: "https://blog.zhiyao.dev",
    github: "https://github.com/lz20r/personal-blog-cms",
    tags: ["Next.js", "Strapi", "PostgreSQL", "Tailwind CSS", "Markdown"],
  },
  {
    title: "Generador de Arte Digital",
    slug: "generador-arte-digital",
    description: "Herramienta web experimental para crear arte digital generativo. Proyecto que fusiona programación con arte, permitiendo crear patrones y formas únicas usando algoritmos matemáticos.",
    url: "https://art-generator-nz.netlify.app",
    github: "https://github.com/lz20r/digital-art-generator",
    tags: ["JavaScript", "P5.js", "HTML5 Canvas", "CSS3", "Algoritmos Generativos"],
  },
  {
    title: "API REST de Recetas",
    slug: "api-rest-recetas",
    description: "API REST completa para gestión de recetas de cocina. Proyecto de práctica con documentación completa, autenticación JWT, filtros por ingredientes y valoraciones de usuarios.",
    github: "https://github.com/lz20r/recipes-api-rest",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "Jest", "Postman"],
  }
];
