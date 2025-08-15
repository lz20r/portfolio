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
    title: "Portfolio Personal",
    slug: "portfolio-personal",
    description: "Sitio web personal desarrollado con Astro y Tailwind CSS. Diseño moderno, responsivo y optimizado para SEO con animaciones suaves y efectos visuales.",
    url: "https://example.com",
    github: "https://github.com/usuario/portfolio",
    tags: ["Astro", "Tailwind CSS", "TypeScript", "Vite"],
    featured: true,
  },
  {
    title: "E-commerce Dashboard",
    slug: "ecommerce-dashboard",
    description: "Dashboard administrativo para tienda online con gestión de productos, pedidos y analytics en tiempo real. Incluye gráficos interactivos y reportes detallados.",
    url: "https://dashboard-example.com",
    github: "https://github.com/usuario/ecommerce-dashboard",
    tags: ["React", "Next.js", "Chart.js", "Prisma", "PostgreSQL"],
  },
  {
    title: "API REST de Tareas",
    slug: "api-rest-tareas",
    description: "API robusta para gestión de tareas con autenticación JWT, documentación con Swagger y pruebas automatizadas. Incluye rate limiting y validación de datos.",
    github: "https://github.com/usuario/api-tareas",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
  },
  {
    title: "Chat en Tiempo Real",
    slug: "chat-tiempo-real",
    description: "Aplicación de chat con mensajería instantánea, salas privadas y públicas, notificaciones push y sistema de presencia en línea.",
    url: "https://chat-example.com",
    github: "https://github.com/usuario/chat-realtime",
    tags: ["React", "Socket.io", "Node.js", "Redis", "Material-UI"],
  },
  {
    title: "App de Gestión Financiera",
    slug: "app-finanzas",
    description: "Aplicación móvil para control de gastos personales con categorización automática, presupuestos y reportes visuales. Sincronización en la nube.",
    tags: ["React Native", "Expo", "Firebase", "Chart.js", "AsyncStorage"],
  },
  {
    title: "Blog con CMS",
    slug: "blog-cms",
    description: "Blog personal con sistema de gestión de contenido, editor de texto enriquecido, comentarios y sistema de etiquetas. SEO optimizado.",
    url: "https://blog-example.com",
    github: "https://github.com/usuario/blog-cms",
    tags: ["Gatsby", "Contentful", "GraphQL", "Tailwind CSS"],
  }
];
