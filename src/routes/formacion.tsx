import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Building2, Users } from "lucide-react";

import { Section, SectionHeading } from "@/components/sections/Section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/formacion")({
  head: () => ({
    meta: [
      { title: "Formación y capacitación — Fundación Por Un Mundo Mejor" },
      {
        name: "description",
        content:
          "Cursos y jornadas abiertas a estudiantes, docentes y comunidad. Convenios de prácticas supervisadas con UNC, UPC e institutos privados.",
      },
      { property: "og:title", content: "Formación y capacitación — Fundación Por Un Mundo Mejor" },
      {
        property: "og:description",
        content: "Capacitación en adicciones y salud mental, y unidad de prácticas supervisadas.",
      },
      { property: "og:url", content: "/formacion" },
    ],
    links: [{ rel: "canonical", href: "/formacion" }],
  }),
  component: Formacion,
});

const propuestas = [
  {
    icon: BookOpen,
    title: "Cursos de capacitación",
    body: "Formación introductoria y de actualización en problemáticas de consumo, prevención y abordaje familiar.",
  },
  {
    icon: Users,
    title: "Jornadas abiertas",
    body: "Encuentros gratuitos o a matrícula accesible para estudiantes, docentes, equipos de salud y comunidad.",
  },
  {
    icon: Building2,
    title: "Prácticas supervisadas",
    body: "Somos unidad de prácticas de carreras de la UNC, la UPC e institutos privados, con supervisión del equipo.",
  },
];

// Placeholder institucional: agenda real a completar cuando el equipo la confirme.
const agenda = [
  { fecha: "Fecha a confirmar", titulo: "Jornada: prevención en el ámbito escolar", nota: "Placeholder" },
  { fecha: "Fecha a confirmar", titulo: "Curso: abordaje familiar del consumo problemático", nota: "Placeholder" },
  { fecha: "Fecha a confirmar", titulo: "Ateneo abierto del equipo terapéutico", nota: "Placeholder" },
];

function Formacion() {
  return (
    <>
      <Section tone="soft">
        <div aria-hidden className="iso-blob absolute -top-20 right-10 size-64" />
        <SectionHeading
          eyebrow="Formación"
          title="Formarse también es prevenir"
          lead="Investigamos, capacitamos a nuestro equipo y compartimos con la comunidad conceptos que cambian la forma de mirar el consumo problemático."
        />
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {propuestas.map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-3xl border border-border bg-card p-7 shadow-card">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Icon className="size-6" aria-hidden />
              </span>
              <h2 className="mt-5 text-xl font-semibold text-foreground">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="mint">
        <SectionHeading eyebrow="Agenda" title="Próximas propuestas" lead="Contenido de ejemplo: la agenda definitiva se publicará al confirmarse las fechas." />
        <ul className="mt-10 space-y-4">
          {agenda.map((item) => (
            <li
              key={item.titulo}
              className="flex flex-col gap-2 rounded-2xl bg-card p-6 shadow-card sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-lg font-semibold text-foreground">{item.titulo}</p>
                <p className="text-sm text-muted-foreground">
                  {item.fecha} · <span className="italic">{item.nota}</span>
                </p>
              </div>
              <Button asChild variant="mint" size="default">
                <Link to="/contacto" search={{ tipo: "capacitacion" }}>Quiero inscribirme</Link>
              </Button>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="rounded-3xl border border-border surface-soft p-8 shadow-card md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Convenios académicos</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Trabajamos con la Universidad Nacional de Córdoba, la Universidad Provincial de Córdoba e
              institutos privados, recibiendo estudiantes para prácticas supervisadas.
            </p>
          </div>
          <Button asChild variant="hero" size="xl" className="mt-6 md:mt-0">
            <Link to="/contacto" search={{ tipo: "capacitacion" }}>Consultar por prácticas</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}