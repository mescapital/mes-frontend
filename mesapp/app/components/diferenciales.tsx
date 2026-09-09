import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const puntos = [
  {
    disco: "bg-azul",
    titulo: "Una gestión, varias entidades",
    texto:
      "En vez de golpear puerta por puerta, presentás la operación una sola vez y nosotros la llevamos a las entidades que corresponden.",
  },
  {
    disco: "bg-naranja",
    titulo: "Especialistas, no generalistas",
    texto:
      "Trabajamos solo con financiamiento productivo, lo que nos permite estructurar operaciones con precisión técnica.",
  },
  {
    disco: "bg-amarillo",
    titulo: "Presencia territorial",
    texto:
      "Catorce productores distribuidos en el país. El que analiza tu operación conoce la zona y la actividad.",
  },
  {
    disco: "bg-azul",
    titulo: "Acompañamiento hasta el final",
    texto:
      "El seguimiento no termina con la aprobación: gestionamos requisitos, contratos y la puesta en marcha.",
  },
];

/* Divisores del grid: línea arriba al saltar de fila, línea a la izquierda
   entre columnas. El grid pasa de 1 a 2 columnas en sm y se mantiene en 2
   de ahí en adelante, así que cada eje se resuelve por separado según el
   índice. La línea horizontal se dibuja con un pseudo-elemento (no con
   border-t) para poder extenderla sobre el gap-x-10 y que no quede cortada
   entre columnas; solo se extiende hacia adentro, nunca más allá del borde
   exterior del grid. */
/* Clases antes:left/antes:right completas y literales (no armadas por
   concatenación): Tailwind extrae clases escaneando el archivo en busca de
   substrings exactos, así que un `before:${cond ? "-left-5" : "left-0"}`
   nunca se detecta y la clase se pierde en build. */
const ANTES_SM_IZQ_EXT = "sm:before:-left-5";
const ANTES_SM_IZQ_0 = "sm:before:left-0";
const ANTES_SM_DER_EXT = "sm:before:-right-5";
const ANTES_SM_DER_0 = "sm:before:right-0";

function bordes(i: number) {
  const fila = i >= 2;
  const colDer = i % 2 !== 0;

  return [
    "relative pb-10",
    i > 0 &&
      "pt-10 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-linea before:content-['']",
    fila
      ? [
          "sm:pt-10 sm:before:block",
          colDer ? ANTES_SM_IZQ_EXT : ANTES_SM_IZQ_0,
          colDer ? ANTES_SM_DER_0 : ANTES_SM_DER_EXT,
        ].join(" ")
      : "sm:pt-0 sm:before:hidden",
    colDer
      ? "sm:border-l sm:border-linea sm:pl-8 lg:pl-10"
      : "sm:border-l-0 sm:pl-0",
  ]
    .filter(Boolean)
    .join(" ");
}

export function Diferenciales() {
  return (
    <section id="por-que-mes" className="scroll-mt-24 border-y border-linea bg-niebla">
      <div className="mx-auto max-w-[80rem] px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Por qué Més"
          title="Un bróker cambia el resultado, no solo el trámite"
        />

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2 lg:mt-20">
          {puntos.map((p, i) => (
            <Reveal key={p.titulo} delay={(i % 2) * 90} className={bordes(i)}>
              <span
                className={`num flex h-9 w-9 items-center justify-center rounded-full text-[0.8125rem] font-bold text-white ${p.disco}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em]">
                {p.titulo}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                {p.texto}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
