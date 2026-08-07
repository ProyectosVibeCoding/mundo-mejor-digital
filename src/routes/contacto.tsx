import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

import { Section, SectionHeading } from "@/components/sections/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Tipo = "familiar" | "institucional" | "capacitacion";

const TIPOS: { value: Tipo; label: string; hint: string }[] = [
  {
    value: "familiar",
    label: "Consulta por un familiar o paciente",
    hint: "Contanos brevemente la situación. Si preferís, no incluyas nombres.",
  },
  {
    value: "institucional",
    label: "Consulta institucional / derivación",
    hint: "Obras sociales, organismos de gobierno, juzgados e instituciones derivantes.",
  },
  {
    value: "capacitacion",
    label: "Quiero capacitarme",
    hint: "Cursos, jornadas y prácticas supervisadas.",
  },
];

export const Route = createFileRoute("/contacto")({
  validateSearch: (search: Record<string, unknown>): { tipo?: Tipo } => {
    const tipo = search.tipo;
    return typeof tipo === "string" && TIPOS.some((t) => t.value === tipo)
      ? { tipo: tipo as Tipo }
      : {};
  },
  head: () => ({
    meta: [
      { title: "Contacto y derivación — Fundación Por Un Mundo Mejor" },
      {
        name: "description",
        content:
          "Escribinos por una consulta familiar, una derivación institucional o para capacitarte. Fundación Por Un Mundo Mejor, Córdoba.",
      },
      { property: "og:title", content: "Contacto y derivación — Fundación Por Un Mundo Mejor" },
      {
        property: "og:description",
        content: "Formularios diferenciados para familias, instituciones derivantes y formación.",
      },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Contacto,
});

function Contacto() {
  const { tipo } = Route.useSearch();
  const [activo, setActivo] = useState<Tipo>(tipo ?? "familiar");
  const actual = TIPOS.find((t) => t.value === activo)!;

  // Etapa 1: envío por mailto. TODO: conectar a n8n/Make o endpoint propio en etapa 2.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const cuerpo = [
      `Tipo de consulta: ${actual.label}`,
      `Nombre: ${data.get("nombre")}`,
      `Email: ${data.get("email")}`,
      `Teléfono: ${data.get("telefono")}`,
      activo === "institucional" ? `Institución: ${data.get("institucion")}` : null,
      "",
      `${data.get("mensaje")}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:contacto@porunmundomejor.org?subject=${encodeURIComponent(
      `[Web] ${actual.label}`,
    )}&body=${encodeURIComponent(cuerpo)}`;
  }

  return (
    <>
      <Section tone="soft" className="pb-8">
        <div aria-hidden className="iso-blob absolute -top-24 -right-16 size-72" />
        <SectionHeading
          eyebrow="Contacto"
          title="Escribinos: el primer paso puede ser solo una pregunta"
          lead="Respondemos consultas de familias, de instituciones derivantes y de quienes quieren formarse. Lo que nos cuentes se trata con confidencialidad."
        />
      </Section>

      <Section className="pt-4">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
            <fieldset>
              <legend className="text-sm font-semibold text-foreground">Tipo de consulta</legend>
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {TIPOS.map((t) => (
                  <button
                    key={t.value}
                    type="button"
                    aria-pressed={activo === t.value}
                    onClick={() => setActivo(t.value)}
                    className={cn(
                      "rounded-2xl border p-3 text-left text-sm font-medium transition-colors",
                      activo === t.value
                        ? "border-primary bg-accent/70 text-accent-foreground"
                        : "border-border bg-background text-muted-foreground hover:bg-accent/30",
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{actual.hint}</p>
            </fieldset>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="nombre">Nombre y apellido</Label>
                  <Input id="nombre" name="nombre" required autoComplete="name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" name="email" type="email" required autoComplete="email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" name="telefono" type="tel" autoComplete="tel" />
                </div>
                {activo === "institucional" && (
                  <div className="grid gap-2">
                    <Label htmlFor="institucion">Institución u organismo</Label>
                    <Input id="institucion" name="institucion" />
                  </div>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="mensaje">
                  {activo === "capacitacion" ? "¿Qué te interesa cursar?" : "Contanos brevemente"}
                </Label>
                <Textarea id="mensaje" name="mensaje" rows={6} required />
              </div>
              <Button type="submit" variant="hero" size="xl" className="w-full sm:w-auto">
                Enviar consulta
              </Button>
              <p className="text-xs text-muted-foreground">
                Al enviar se abre tu cliente de correo. En una próxima etapa el formulario se enviará
                directamente desde el sitio.
              </p>
            </form>
          </div>

          <aside className="grid gap-4">
            <div className="rounded-3xl border border-border surface-soft p-7">
              <h2 className="text-xl font-semibold text-foreground">Datos de contacto</h2>
              <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  {/* Placeholder: dirección exacta a confirmar */}
                  <span>Ciudad de Córdoba, Argentina</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <span>+54 351 000 0000 (placeholder)</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <a href="mailto:contacto@porunmundomejor.org" className="hover:text-foreground">
                    contacto@porunmundomejor.org
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="https://wa.me/5493510000000"
              className="flex items-center gap-3 rounded-3xl border border-primary/30 bg-accent/40 p-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/70"
            >
              <MessageCircle className="size-5 text-primary" aria-hidden />
              Escribir por WhatsApp
            </a>
            <p className="px-2 text-xs text-muted-foreground">
              Si se trata de una urgencia con riesgo para la vida, comunicate con el 911 o con la guardia
              de salud mental más cercana.
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}