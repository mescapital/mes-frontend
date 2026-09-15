import { Mark } from "./brand";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

/**
 * Las tres modalidades comparten el disco azul: en el sistema de color el azul
 * es Leasing, así que pintarlas de naranja o amarillo las confundiría con
 * prendarios o caución.
 */
const modalidades = [
  {
    nombre: "Leasing financiero",
    resumen:
      "El Tomador utiliza el bien a cambio de un canon mensual durante el plazo del contrato.",
    listaLabel: "Al finalizar, el Tomador puede",
    lista: [
      "Ejercer una opción de compra previamente establecida, generalmente por un canon adicional",
    ],
  },
  {
    nombre: "Leasing operativo",
    resumen:
      "Ofrece cuotas más bajas porque no busca recuperar el valor total del bien.",
    listaLabel: "Al finalizar, el Tomador puede",
    lista: [
      "Devolver el bien",
      "Extender el contrato",
      "Comprar el bien a valor de mercado",
    ],
  },
  {
    nombre: "Sale and Leaseback",
    resumen:
      "El propietario jurídico de un bien de capital puede venderlo a una entidad financiera para obtener liquidez inmediata, y simultáneamente firmar un contrato de leasing para seguir utilizándolo.",
    listaLabel: "Cómo quedan los roles",
    lista: [
      "La entidad pasa a ser el Dador",
      "El vendedor original se convierte en Tomador",
    ],
  },
];

/**
 * Cada ventaja se lee igual: el impuesto, la cifra o palabra que la resume y
 * el detalle. Así "100%" y "Diferido" pesan lo mismo y no queda una cifra
 * sola frente a una sigla.
 */
const ventajas = [
  {
    impuesto: "Impuesto a las Ganancias",
    destaque: "100%",
    texto: "Deducción del canon en su totalidad.",
  },
  {
    impuesto: "IVA",
    destaque: "Diferido",
    texto:
      "Se computa a lo largo del contrato, en lugar de pagarlo todo al inicio.",
  },
];

export function Productos() {
  return (
    <section id="productos" className="scroll-mt-24">
      <div
        id="leasing"
        className="mx-auto max-w-[80rem] scroll-mt-24 px-6 py-24 lg:px-10 lg:py-32"
      >
        <SectionHeading
          eyebrow="Leasing"
          title="Tres modalidades para tu próxima inversión"
          lead="Usás el bien desde el primer día. Analizamos la operación y proponemos la modalidad que mejor le sirve a tu flujo de caja."
        />

        {/* En desktop cada tarjeta ocupa cuatro filas compartidas (subgrid):
            encabezado, resumen, rótulo y lista. Así el rótulo y la lista
            arrancan a la misma altura aunque los resúmenes tengan distinto largo. */}
        <div className="mt-16 grid grid-cols-1 gap-y-12 lg:mt-20 lg:grid-cols-3 lg:gap-x-0 lg:gap-y-0">
          {modalidades.map((m, i) => (
            <div
              key={m.nombre}
              className={`lg:row-span-4 lg:grid lg:grid-rows-subgrid lg:px-9 lg:first:pl-0 lg:last:pr-0 ${
                i > 0 ? "border-t border-linea pt-12 lg:border-t-0 lg:border-l lg:pt-0" : ""
              }`}
            >
              <Reveal
                delay={i * 110}
                className="lg:row-span-4 lg:grid lg:grid-rows-subgrid"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-azul">
                    <Mark className="h-[1.1rem] w-auto text-white" />
                  </span>

                  <h3 className="mt-7 text-2xl font-bold tracking-[-0.03em]">
                    {m.nombre}
                  </h3>
                </div>

                <p className="mt-4 text-ink-soft">{m.resumen}</p>

                <p className="eyebrow mt-9 text-ink-faint">{m.listaLabel}</p>
                <ul className="mt-4 space-y-2.5">
                  {m.lista.map((item) => (
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

        <Reveal className="mt-20 lg:mt-28">
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 rounded-2xl bg-azul px-7 py-10 text-white sm:px-10 sm:py-12 lg:grid-cols-12 lg:items-center lg:px-14 lg:py-16">
            <div className="lg:col-span-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                <Mark className="h-[1.1rem] w-auto text-azul" />
              </span>
              <h3 className="mt-7 font-display text-[1.75rem] leading-[1.08] font-bold tracking-[-0.02em] text-balance lg:text-[2rem]">
                Principales ventajas impositivas del leasing
              </h3>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-7">
              {ventajas.map((v, i) => (
                <div
                  key={v.impuesto}
                  className={`flex flex-col ${
                    i > 0
                      ? "mt-8 border-t border-white/25 pt-8 sm:mt-0 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-10"
                      : "sm:pr-10"
                  }`}
                >
                  <dt className="eyebrow text-white/70">{v.impuesto}</dt>
                  <dd className="mt-5">
                    <p className="num font-display text-[3rem] leading-none font-bold tracking-[-0.03em] lg:text-[3.75rem]">
                      {v.destaque}
                    </p>
                    <p className="mt-4 max-w-[30ch] text-base leading-relaxed text-white/90">
                      {v.texto}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
