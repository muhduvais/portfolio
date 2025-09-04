import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo: string;
  github: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  demo,
  github,
}: ProjectCardProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-background border border-foreground/10 hover:shadow-lg transition">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded bg-foreground/10 text-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={demo}
            target="_blank"
            className="text-sm text-indigo-500 hover:underline"
          >
            Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            className="text-sm text-indigo-500 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
