import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

// TODO: contenido metodología pendiente — la sección "Metodología / Programas"
// se agrega al menú cuando llegue el contenido actualizado.
const nav = [
  { to: "/", label: "Inicio" },
  { to: "/institucional", label: "Institucional" },
  { to: "/a-quien-atendemos", label: "A quién atendemos" },
  { to: "/formacion", label: "Formación" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3">
        <Link to="/" className="shrink-0" aria-label="Ir al inicio">
          <Logo />
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
              activeProps={{ className: "bg-accent/70 text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="hero" size="default" className="ml-3">
            <Link to="/contacto" search={{ tipo: "familiar" }}>
              Necesito ayuda
            </Link>
          </Button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Navegación principal móvil" className="border-t border-border bg-card lg:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-foreground/90 hover:bg-accent/50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 pb-3">
              <Button asChild variant="hero" size="xl" className="w-full">
                <Link to="/contacto" search={{ tipo: "familiar" }} onClick={() => setOpen(false)}>
                  Necesito ayuda
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}