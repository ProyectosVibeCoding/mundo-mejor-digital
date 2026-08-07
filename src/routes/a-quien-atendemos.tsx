import { createFileRoute, Link } from "@tanstack/react-router";

import { Section, SectionHeading } from "@/components/sections/Section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/a-quien-atendemos")({
  head: () => ({
    meta: [
      { title: "A quién atendemos — Fundación Por Un Mundo Mejor" },
      {
        name: "description",
        content:
          "Acompañamos a jóvenes y adultos con consumo problemático de sustancias y patología dual, en modalidad ambulatoria, hospital de día y orientación familiar.",
      },
      { property: "og:title", content: "A quién atendemos — Fundación Por Un Mundo Mejor" },
      {
        property: "og:description",
        content: "Personas y familias afectadas por el consumo problemático, con o sin causa judicial.",
      },
      { property: "og:url", content: "/a-quien-atendemos" },
    ],
    links: [{ rel: "canonical", href: "/a-quien-atendemos" }],
  }),
  component: AQuienAtendemos,
});

const perfiles = [
  {
    title: "Consumo problemático de sustancias",
    body: "Jóvenes y adultos cuyo consumo de alcohol u otras sustancias psicotrópicas afectó su salud, sus vínculos, su estudio o su trabajo.",
  },
  {
    title: "Situaciones de salud mental combinadas",
    body: "Personas que además del consumo atraviesan otro padecimiento psíquico —lo que en el ámbito clínico se denomina patología dual— y necesitan un abordaje integral.",
  },
  {
    title: "Personas con causas judiciales",
    body: "Acompañamos tanto a quienes llegan por decisión propia o familiar como a quienes lo hacen en el marco de una medida judicial, siempre con el mismo cuidado y sin distinciones.",
  },
  {
    title: "Familias y adultos a cargo de la crianza",
    body: "Orientamos a madres, padres, parejas, hermanos y referentes afectivos: la familia es parte del tratamiento, no un espectador.",
  },
];

const modalidades = [
  { title: "Ambulatorio", body: "Encuentros terapéuticos sostenidos, compatibles con estudio o trabajo." },
  { title: "Hospital de día", body: "Abordaje intensivo con actividades terapéuticas durante la jornada." },
  { title: "Orientación familiar", body: "Espacio propio para quienes acompañan, con herramientas concretas." },
];

function AQuienAtendemos() {
  return (
    <>
      <Section tone="soft">
        <div aria-hidden className="iso-blob absolute -bottom-28 -left-20 size-80" />
        <SectionHeading
          eyebrow="A quién atendemos"
          title="Si el consumo ocupó demasiado lugar, hay un camino posible"
          lead="Recibimos a jóvenes y adultos de Córdoba y de otras provincias, y a las familias que los acompañan. No hace falta tener todo claro para pedir una primera consulta."
        />
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {perfiles.map((p) => (
            <article key={p.title} className="rounded-3xl border border-border bg-card p-7 shadow-card">
              <h2 className="text-xl font-semibold text-foreground">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="mint">
        <SectionHeading
          eyebrow="Modalidades"
          title="Cómo se organiza el acompañamiento"
          lead="Los procesos suelen extenderse entre 14 y 18 meses, con una intensidad que se ajusta a cada momento del tratamiento."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {modalidades.map((m) => (
            <article key={m.title} className="rounded-3xl bg-card p-7 shadow-card">
              <h3 className="text-lg font-semibold text-foreground">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
            </article>
          ))}
        </div>
        {/* TODO: contenido metodología pendiente — detalle de programas y etapas */}
        <p className="mt-8 text-sm text-muted-foreground">
          El detalle de la metodología y de cada programa se publicará próximamente, con la información
          actualizada del equipo.
        </p>
      </Section>

      <Section>
        <div className="rounded-3xl border border-border surface-soft p-8 text-center shadow-card">
          <h2 className="text-2xl font-semibold text-foreground">¿Consultás por un familiar?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Escribinos y te orientamos sobre los primeros pasos, incluso si la persona todavía no quiere
            iniciar un tratamiento.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/contacto" search={{ tipo: "familiar" }}>Pedir orientación</Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/contacto" search={{ tipo: "institucional" }}>Soy institución derivante</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}