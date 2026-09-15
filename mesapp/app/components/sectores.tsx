import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import {
  IconEquipamiento,
  IconMaquinaria,
  IconRodados,
  IconSolar,
} from "./sector-icons";

const bienes = [
  {
    Icon: IconMaquinaria,
    nombre: "Maquinaria",
    detalle: "Vial, minera, industrial, petróleo y gas, y agrícola.",
  },
  {
    Icon: IconEquipamiento,
    nombre: "Equipamiento",
    detalle: "Tecnológico, electrónico, médico, entre otros.",
  },
  {
    Icon: IconRodados,
    nombre: "Rodados",
    detalle:
      "Autos, pickups, utilitarios, camiones, motos, autoelevadores y más.",
  },
  {
    Icon: IconSolar,
    nombre: "Energías renovables",
    detalle: "Proyectos llave en mano, principalmente de energía solar.",
  },
];

export function Sectores() {
  return (
    <section id="sectores" className="scroll-mt-24 bg-ink text-white">
      <div className="mx-auto max-w-[80rem] px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Bienes"
          tone="white"
          title="Qué podés financiar"
        />

        {/* Cuatro bienes en fila y el cierre ocupando todo el ancho debajo:
            con 4 + 1 celdas, cualquier otra grilla deja un hueco. */}
        <ul className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {bienes.map((b, i) => (
            <Reveal
              key={b.nombre}
              as="li"
              delay={i * 80}
              className="bg-ink p-8 lg:p-10"
            >
              <b.Icon className="h-8 w-8 text-azul" />
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.025em]">
                {b.nombre}
              </h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-white/60">
                {b.detalle}
              </p>
            </Reveal>
          ))}

          <Reveal
            as="li"
            delay={bienes.length * 80}
            className="col-span-full flex flex-col gap-2.5 bg-ink p-8 lg:flex-row lg:items-baseline lg:justify-between lg:gap-10 lg:p-10"
          >
            <h3 className="text-xl font-semibold tracking-[-0.025em] text-white/50">
              ¿Buscás financiar otro bien?
            </h3>
            <p className="text-[0.9375rem] leading-relaxed text-white/60">
              Nuestra red comercial trabaja con segmentos muy diversos.{" "}
              <a
                href="#contacto"
                className="font-medium text-azul underline-offset-4 hover:underline"
              >
                Contanos qué necesitás financiar.
              </a>
            </p>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
