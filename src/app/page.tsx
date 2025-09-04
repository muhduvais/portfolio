import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import ProjectCard from "@/components/ui/ProjectCard";

export default function HomePage() {
  return (
    <main className="relative space-y-12">
      <div className="fixed right-4 top-4 sm:right-8 sm:top-5 z-10">
        <ThemeToggle />
      </div>

      <section id="about">
        <h2 className="py-3 text-2xl font-bold">Hey, I'm Uvais 👋</h2>

        <p className="pb-3">
          I enjoy exploring ideas through code, turning them into simple yet
          creative interfaces. Building things that look good and feel right
          excites me, and I'm always pushing myself to learn and improve a
          little every day.
        </p>

        <p>
          Beyond coding, I dedicate time to reading and I'm steadily growing
          that habit. I also enjoy gaming — from adventurous period stories to
          modern open worlds — as they inspire me to think about narratives and
          experiences. I'm curious about design too, and I love crafting
          minimal, functional visuals that feel both creative and premium.
        </p>
      </section>

      <section id="skills">
        <h2 className="py-3 text-2xl font-bold">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 list-disc list-inside">
          <li>Next.js / React</li>
          <li>TypeScript</li>
          <li>Node.js / Express</li>
          <li>MongoDB</li>
          <li>TailwindCSS</li>
          <li>Git / GitHub</li>
          <li>Docker (basics)</li>
          <li>REST APIs</li>
        </ul>
      </section>

      <section id="projects">
        <h2 className="py-3 text-2xl font-bold">Projects</h2>

        <div className="space-y-8">
          <ProjectCard
            title="HelpOre"
            description="A welfare management platform that helps charitable societies
              organize requests, events, and donations. Includes volunteer and
              ambulance assistance, live chat, video calls, and a Stripe-powered
              donation system."
            image="/projects/helpore.jpg"
            tech={["Next.js", "MongoDB", "Stripe", "WebRTC"]}
            demo="https://helpore.online"
            github="https://github.com/muhduvais/helpore"
          />

          <ProjectCard
            title="DayTiles"
            description="A goal-tracking app designed for teams to set short-term goals and
              track daily progress visually. Includes modular architecture,
              PostgreSQL, Prisma ORM, and Docker setup."
            image="/projects/daytiles.jpg"
            tech={["Next.js", "Prisma", "PostgreSQL", "Docker"]}
            demo="https://daytiles.online"
            github="https://github.com/muhduvais/daytiles"
          />
        </div>
      </section>

      <section id="blog">
        <h2 className="py-3 text-2xl font-bold">Blog</h2>
        <p className="text-gray-600 dark:text-gray-400">
          I'll be sharing thoughts, tutorials, and learnings here soon. Stay
          tuned!
        </p>
      </section>

      <section id="contact">
        <h2 className="py-3 text-2xl font-bold">Get in Touch</h2>
        <p>
          Feel free to reach out to me for collaborations, opportunities, or
          just a chat.
        </p>
        <ul className="mt-2 space-y-1">
          <li>
            <a
              href="mailto:uvaisp110@gmail.com"
              className="text-indigo-500 hover:underline"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://github.com/muhduvais"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/muhduvais"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}