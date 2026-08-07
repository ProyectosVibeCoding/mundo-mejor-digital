import logo from "@/assets/logo-pumm.png.asset.json";
import { cn } from "@/lib/utils";

/** Logo institucional. `muted` lo usa el footer en versión suave. */
export function Logo({ className, muted = false }: { className?: string; muted?: boolean }) {
  return (
    <img
      src={logo.url}
      alt="Fundación Por Un Mundo Mejor — atención y prevención de las adicciones"
      className={cn("h-11 w-auto", muted && "opacity-90 brightness-105", className)}
      width={232}
      height={80}
    />
  );
}

/** Círculo del isotipo reutilizado como elemento gráfico de fondo. */
export function IsoBlob({ className }: { className?: string }) {
  return <div aria-hidden className={cn("iso-blob pointer-events-none absolute", className)} />;
}
