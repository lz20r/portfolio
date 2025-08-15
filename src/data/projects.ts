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
    title: "Mi Portfolio",
    slug: "mi-portfolio",
    description: "Sitio personal con Astro + Tailwind.",
    url: "https://example.com",
    github: "https://github.com/usuario/portfolio",
    tags: ["Astro", "Tailwind", "Vite"],
    featured: true,
  },
  {
    title: "API de Tareas",
    slug: "api-tareas",
    description: "API REST documentada.",
    github: "https://github.com/usuario/api-tareas",
    tags: ["Node", "Express", "REST"],
  },
];
