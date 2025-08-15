export type Project = {
  title: string;
  slug: string;
  description?: string;
  image?: string;
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
    title: "Portfolio Aesthetic",
    slug: "portfolio-aesthetic",
    description: "Mi portfolio personal desarrollado con Astro y diseño sketch/dibujado. Incluye modo oscuro, animaciones CSS personalizadas y diseño responsive. Combina mi formación técnica con mi pasión por el arte digital.",
    url: "https://zhiyao.dev",
    github: "https://github.com/lz20r/portfolio",
    tags: ["Astro", "Tailwind CSS", "TypeScript", "CSS Animations", "Responsive Design"],
  },
];