import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, HeartHandshake, ShieldCheck } from "lucide-react";

import heroImg from "@/assets/hero-comunidad.jpg";
import { Section, SectionHeading } from "@/components/sections/Section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fundación Por Un Mundo Mejor — Adicciones y salud mental en Córdoba" },
      {
        name: "description",
        content:
          "20 años acompañando a personas y familias de Córdoba: prevención, asistencia y formación en adicciones y salud mental.",
      },
      {
        property: "og:title",
        content: "Fundación Por Un Mundo Mejor — Adicciones y salud mental en Córdoba",
      },
      {
        property: "og:description",
        content:
          "Prevención, asistencia y capacitación en adicciones y salud mental. Córdoba, Argentina.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const ejes = [
  {
    icon: ShieldCheck,
    title: "Preventivo",
    body: "Trabajo comunitario, voluntariados barriales y orientación a familias para evitar el ingreso al consumo problemático.",
  },
  {
    icon: HeartHandshake,
    title: "Asistencial",
    body: "Acompañamiento terapéutico de jóvenes y adultos, con detección precoz, reducción de daños y trabajo con la familia.",
  },
  {
    icon: GraduationCap,
    title: "Formativo",
    body: "Investigación, capacitación del equipo y cursos y jornadas abiertas a estudiantes, docentes y comunidad.",
  },
];

const trayectoria = [
  { dato: "20 años", label: "de trabajo sostenido en Córdoba" },
  { dato: "Obras sociales", label: "y organismos de gobierno en convenio" },
  { dato: "UNC · UPC", label: "unidad de prácticas supervisadas" },
  { dato: "Córdoba +", label: "pacientes de otras provincias" },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden surface-soft">
        <div aria-hidden className="iso-blob absolute -top-32 -left-24 size-96" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase shadow-card">
              <span aria-hidden className="size-2 rounded-full bg-primary" />
              Córdoba · 20 años de trayectoria
            </p>
            <h1 className="mt-6 text-4xl leading-[1.08] font-semibold text-foreground md:text-5xl lg:text-6xl">
              Acompañamos a personas y familias a recuperar el gobierno de su propia vida
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Somos una fundación cordobesa dedicada a la prevención, la asistencia y la capacitación en
              adicciones y salud mental. Trabajamos por la autonomía de cada persona, sin etiquetas y sin
              juicios.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/contacto" search={{ tipo: "familiar" }}>Necesito ayuda</Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/institucional">Quiero saber más</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div aria-hidden className="absolute -inset-4 rounded-[2.5rem] bg-secondary/60" />
            <img
              src={heroImg}
              alt="Grupo de personas adultas conversando en ronda en un espacio terapéutico luminoso"
              width={1408}
              height={1008}
              className="relative aspect-[7/5] w-full rounded-[2rem] object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Nuestros ejes"
          title="Tres formas de estar presentes"
          lead="Prevenir antes de que el consumo aparezca, asistir cuando ya está instalado y formar a quienes acompañan."
          centered
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ejes.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-3xl border border-border bg-card p-7 shadow-card transition-transform hover:-translate-y-1"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="mint">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Trayectoria"
            title="Dos décadas de trabajo con la comunidad"
            lead="Atendemos a población juvenil y adulta de Córdoba y de otras provincias, en articulación con obras sociales y organismos de gobierno."
          />
          <dl className="grid gap-5 sm:grid-cols-2">
            {trayectoria.map((t) => (
              <div key={t.dato} className="rounded-3xl bg-card p-6 shadow-card">
                <dt className="text-2xl font-semibold text-primary">{t.dato}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tone="soft">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy p-8 text-primary-foreground md:p-12">
          <div aria-hidden className="iso-blob absolute -right-16 -bottom-24 size-72" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Si algo te preocupa, es un buen momento para consultar
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
              No hace falta una certeza ni un diagnóstico. Podés escribirnos por vos, por un familiar o
              desde una institución que necesita derivar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="mint" size="xl">
                <Link to="/contacto" search={{ tipo: "familiar" }}>Consultar por un familiar</Link>
              </Button>
              <Button asChild variant="mint" size="xl" className="bg-card text-foreground hover:bg-card/90">
                <Link to="/contacto" search={{ tipo: "institucional" }}>Derivación institucional</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
