import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartHandshake, GraduationCap, ShieldCheck } from "lucide-react";

import { Section, SectionHeading } from "@/components/sections/Section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/institucional")({
  head: () => ({
    meta: [
      { title: "Institucional — Fundación Por Un Mundo Mejor" },
      {
        name: "description",
        content:
          "Quiénes somos: objeto, objetivos preventivos, asistenciales y formativos, y el equipo de la Fundación Por Un Mundo Mejor.",
      },
      { property: "og:title", content: "Institucional — Fundación Por Un Mundo Mejor" },
      {
        property: "og:description",
        content: "Nuestra fundamentación, nuestro objeto y los tres ejes de trabajo de la Fundación.",
      },
      { property: "og:url", content: "/institucional" },
    ],
    links: [{ rel: "canonical", href: "/institucional" }],
  }),
  component: Institucional,
});

const objetivos = [
  {
    icon: ShieldCheck,
    title: "Objetivos preventivos",
    items: [
      "Evitar el ingreso al consumo problemático, con foco en la prevención primaria.",
      "Promover voluntariados barriales y trabajo comunitario con niñas, niños y adolescentes en situación de vulnerabilidad.",
      "Orientar a las familias para que puedan sostener y acompañar.",
      "Favorecer la inclusión social y laboral de los jóvenes.",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Objetivos asistenciales",
    items: [
      "Acompañar la recuperación de personas afectadas por el consumo.",
      "Detección precoz e intervención oportuna junto a los adultos responsables de la crianza.",
      "Reducción de daños y mejora concreta de la calidad de vida.",
    ],
  },
  {
    icon: GraduationCap,
    title: "Objetivos formativos",
    items: [
      "Investigación y capacitación permanente en la problemática adictiva.",
      "Actualización continua del equipo terapéutico.",
      "Divulgación comunitaria de conceptos que transforman miradas.",
    ],
  },
];

const equipo = [
  { rol: "Dirección terapéutica", nota: "Bio pendiente — placeholder" },
  { rol: "Coordinación clínica", nota: "Bio pendiente — placeholder" },
  { rol: "Psicología", nota: "Bio pendiente — placeholder" },
  { rol: "Trabajo social", nota: "Bio pendiente — placeholder" },
  { rol: "Psiquiatría", nota: "Bio pendiente — placeholder" },
  { rol: "Operadores socioterapéuticos", nota: "Bio pendiente — placeholder" },
];

function Institucional() {
  return (
    <>
      <Section tone="soft" className="pb-10">
        <div aria-hidden className="iso-blob absolute -top-24 right-0 size-72" />
        <SectionHeading
          eyebrow="Institucional"
          title="Una fundación que trabaja por la autonomía de las personas"
          lead="Promovemos la salud mental y la educación integral de poblaciones vulnerables. Trabajamos por la autonomía y el autogobierno de cada persona, desalentando las alternativas ilusorias de realización personal —como el abuso de alcohol y otras drogas— y acompañando a quienes ya se vieron afectados."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <p className="text-base leading-relaxed text-muted-foreground">
            En el plano comunitario impulsamos la educación no formal, la organización barrial y la
            contención de niños y jóvenes: creemos que la prevención primaria es la intervención más
            valiosa que una comunidad puede darse.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            En el plano asistencial acompañamos procesos de recuperación junto a las familias, y en el
            formativo capacitamos a nuestro equipo y a la comunidad, además de funcionar como unidad de
            prácticas supervisadas de carreras universitarias.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <SectionHeading eyebrow="Objeto" title="Nuestro objeto" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Prevenir, asistir y capacitar en materia de adicciones y salud mental, con una mirada que
              cuida la dignidad de cada persona y de cada familia. Atendemos a población juvenil y adulta
              de Córdoba y de otras provincias, en articulación con obras sociales y organismos de
              gobierno.
            </p>
          </div>
          <aside className="rounded-3xl border border-border bg-card p-7 shadow-card">
            <h3 className="text-xl font-semibold text-foreground">Nuestro marco de trabajo</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              El equipo se nutre de distintas corrientes de la psicología y del psicoanálisis orientadas
              a la autonomía y el autogobierno del sujeto. Lo traducimos en una práctica concreta: que
              cada persona recupere la capacidad de decidir sobre su propia vida.
            </p>
          </aside>
        </div>
      </Section>

      <Section tone="mint">
        <SectionHeading
          eyebrow="Objetivos"
          title="Tres ejes que sostienen todo lo que hacemos"
          centered
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {objetivos.map(({ icon: Icon, title, items }) => (
            <article key={title} className="rounded-3xl border border-border bg-card p-7 shadow-card">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* TODO: contenido metodología pendiente — programas terapéuticos actualizados */}
      <Section>
        <div className="rounded-3xl border border-dashed border-primary/40 bg-accent/30 p-8 text-center">
          <h2 className="text-2xl font-semibold text-foreground">Metodología y programas</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Estamos actualizando la información sobre nuestra metodología y nuestros programas
            terapéuticos. Próximamente disponible en esta sección.
          </p>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Equipo"
          title="Equipo terapéutico"
          lead="Un equipo interdisciplinario en formación permanente. Fotos y biografías: contenido pendiente de completar."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {equipo.map((m) => (
            <li key={m.rol} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <div aria-hidden className="size-14 shrink-0 rounded-full bg-secondary" />
              <div>
                <p className="font-semibold text-foreground">{m.rol}</p>
                <p className="text-xs text-muted-foreground">{m.nota}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild variant="hero" size="xl">
            <Link to="/contacto" search={{ tipo: "familiar" }}>Necesito ayuda</Link>
          </Button>
          <Button asChild variant="heroOutline" size="xl">
            <Link to="/formacion">Ver formación y capacitación</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}