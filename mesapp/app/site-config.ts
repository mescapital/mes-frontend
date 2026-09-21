/**
 * Datos de contacto y perfil público del sitio.
 *
 * TODO(contacto): los valores marcados como MOCK son provisorios. Reemplazar por
 * los datos reales antes de publicar — están centralizados acá para que sea un
 * solo cambio.
 */
export const site = {
  name: "Més Capital",
  tagline: "Impulsamos proyectos, potenciamos empresas.",
  url: "https://mescapital.com.ar", // MOCK
  email: "contacto@mes-capital.com",
  phoneDisplay: "+54 9 11 2642-1964",
  phoneHref: "+5491126421964",
  whatsappHref: "https://wa.me/5491126421964",
  linkedin: "https://www.linkedin.com/company/mes-capital", // MOCK
  instagram: "https://www.instagram.com/mescapital", // MOCK
} as const;

export const nav = [
  { href: "#leasing", label: "Leasing" },
  { href: "#otros-productos", label: "Otros productos" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#vendors", label: "Vendors" },
  { href: "#por-que-mes", label: "Por qué Més" },
  { href: "#nosotros", label: "Nosotros" },
] as const;

export const provincias = [
  "Buenos Aires",
  "CABA",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán",
] as const;
