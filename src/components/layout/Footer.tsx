import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-navy text-primary-foreground">
      <div aria-hidden className="iso-blob absolute -left-16 -top-24 size-64" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="w-fit rounded-xl bg-background/95 p-2">
            <Logo muted className="h-9" />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
            Veinte años acompañando a personas y familias de Córdoba en prevención, asistencia y
            formación en adicciones y salud mental.
          </p>
        </div>

        <nav aria-label="Secciones del sitio" className="text-sm">
          <h2 className="text-sm font-semibold tracking-wide text-primary-foreground/90">Secciones</h2>
          <ul className="mt-4 space-y-2 text-primary-foreground/75">
            <li><Link to="/institucional" className="hover:text-primary-foreground">Institucional</Link></li>
            <li><Link to="/a-quien-atendemos" className="hover:text-primary-foreground">A quién atendemos</Link></li>
            <li><Link to="/formacion" className="hover:text-primary-foreground">Formación y capacitación</Link></li>
            <li><Link to="/contacto" className="hover:text-primary-foreground">Contacto y derivación</Link></li>
          </ul>
        </nav>

        <div className="text-sm">
          <h2 className="text-sm font-semibold tracking-wide text-primary-foreground/90">Contacto</h2>
          <ul className="mt-4 space-y-3 text-primary-foreground/75">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              {/* Placeholder: dirección exacta a confirmar */}
              <span>Ciudad de Córdoba, Argentina</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" />
              <span>+54 351 000 0000 <span className="text-primary-foreground/50">(placeholder)</span></span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" />
              <a href="mailto:contacto@porunmundomejor.org" className="hover:text-primary-foreground">
                contacto@porunmundomejor.org
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Instagram className="mt-0.5 size-4 shrink-0" />
              <a
                href="https://www.instagram.com/fundacion.porunmundomejor/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground"
              >
                @fundacion.porunmundomejor
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-primary-foreground/15 px-5 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Fundación Por Un Mundo Mejor. Todos los derechos reservados.
      </div>
    </footer>
  );
}