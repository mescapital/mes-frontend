import { Mark } from "./brand";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

/**
 * Mismo esquema de tarjeta que Leasing (productos.tsx). Los discos mantienen
 * el código de color del sistema: naranja es prendarios, amarillo es caución.
 */
const productos = [
  {
    disco: "bg-naranja",
    nombre: "Més Prendarios Capital",
    proximamente: true,
    resumen:
      "El bien que comprás queda en garantía y eso baja el costo del crédito. Plazo y cuota definidos desde el arranque, con una estructura simple de aprobar.",
    listaLabel: "Se financia",
    lista: [
      "Unidades 0 km y usadas",
      "Vehículos utilitarios de flota",
      "Maquinaria con inscripción prendaria",
      "Renovación de activos productivos",
    ],
  },
  {
    disco: "bg-amarillo",
    nombre: "Més Seguros de caución",
    proximamente: true,
    resumen:
      "Garantizás el cumplimiento de un contrato sin inmovilizar capital ni consumir tus líneas de crédito bancarias. Trabajamos con Afianzadora como aliado estratégico.",
    listaLabel: "Se garantiza",
    lista: [
      "Licitaciones y adjudicaciones",
      "Obra pública y privada",
      "Anticipos de contrato",
      "Alquileres comerciales",
    ],
  },
];

export function OtrosProductos() {
  return (
    <section id="otros-productos" className="scroll-mt-24">
      <div className="mx-auto max-w-[80rem] px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Otros productos"
          title="Otras formas de financiar y garantizar tu operación"
          lead="No vendemos un producto: analizamos la operación y proponemos el instrumento que mejor le sirve a tu flujo de caja."
        />

        {/* Subgrid en desktop, igual que en Leasing: el rótulo y la lista de
            las dos tarjetas arrancan a la misma altura. */}
        <div className="mt-16 grid grid-cols-1 gap-y-12 lg:mt-20 lg:grid-cols-2 lg:gap-x-0 lg:gap-y-0">
          {productos.map((p, i) => (
            <div
              key={p.nombre}
              className={`lg:row-span-4 lg:grid lg:grid-rows-subgrid lg:px-12 lg:first:pl-0 lg:last:pr-0 ${
                i > 0 ? "border-t border-linea pt-12 lg:border-t-0 lg:border-l lg:pt-0" : ""
              }`}
            >
              <Reveal
                delay={i * 110}
                className="lg:row-span-4 lg:grid lg:grid-rows-subgrid"
              >
                <div>
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${p.disco}`}
                  >
                    <Mark className="h-[1.1rem] w-auto text-white" />
                  </span>

                  <h3 className="mt-7 text-2xl font-bold tracking-[-0.03em]">
                    {p.nombre}
                  </h3>
                  {p.proximamente && (
                    <span className="eyebrow mt-3 inline-block rounded-full border border-linea px-2.5 py-1 text-ink-faint">
                      Próximamente
                    </span>
                  )}
                </div>

                <p className="mt-4 max-w-[52ch] text-ink-soft">{p.resumen}</p>

                <p className="eyebrow mt-9 text-ink-faint">{p.listaLabel}</p>
                <ul className="mt-4 space-y-2.5">
                  {p.lista.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[0.9375rem] text-ink"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-px w-3.5 shrink-0 bg-azul"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
