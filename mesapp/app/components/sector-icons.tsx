/**
 * Pictogramas de sectores, dibujados a medida: cada uno es el objeto que
 * efectivamente se financia en ese rubro, no un símbolo abstracto.
 */

const base = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

/** Espiga: agro. */
export function IconAgro({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M16 29V13" />
      <path d="M16 13c0-3 1.4-5.6 4-7-1 3.2-1.6 5.6-4 7Z" />
      <path d="M16 13c0-3-1.4-5.6-4-7 1 3.2 1.6 5.6 4 7Z" />
      <path d="M16 19c0-3 1.4-5.6 4-7-1 3.2-1.6 5.6-4 7Z" />
      <path d="M16 19c0-3-1.4-5.6-4-7 1 3.2 1.6 5.6 4 7Z" />
      <path d="M16 25c0-3 1.4-5.6 4-7-1 3.2-1.6 5.6-4 7Z" />
      <path d="M16 25c0-3-1.4-5.6-4-7 1 3.2 1.6 5.6 4 7Z" />
    </svg>
  );
}

/** Racimo: vitivinícola y olivícola. */
export function IconVino({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M16 9V4" />
      <path d="M16 4c2.4-.6 4.2.4 5 2.4-2.3.7-4.1-.2-5-2.4Z" />
      <circle cx="16" cy="12" r="3" />
      <circle cx="11.6" cy="18" r="3" />
      <circle cx="20.4" cy="18" r="3" />
      <circle cx="16" cy="24" r="3" />
    </svg>
  );
}

/** Engranaje: metalmecánica. */
export function IconMetal({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <circle cx="16" cy="16" r="5.2" />
      <circle cx="16" cy="16" r="1.6" />
      <path d="M16 3.4v3.6M16 25v3.6M28.6 16H25M7 16H3.4" />
      <path d="m24.9 7.1-2.5 2.5M9.6 22.4l-2.5 2.5M24.9 24.9l-2.5-2.5M9.6 9.6 7.1 7.1" />
    </svg>
  );
}

/** Excavadora sobre orugas: maquinaria. */
export function IconMaquinaria({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="23" width="18" height="5" rx="2.5" />
      <path d="M5 23v-7h7l2.5 4v3" />
      <path d="M13 17.5 21 7l6 5.5" />
      <path d="M27 12.5v4.5l-4 1.5" />
    </svg>
  );
}

/** Monitor con trazo de pulso: equipamiento tecnológico, electrónico y médico. */
export function IconEquipamiento({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="5" width="25" height="17" rx="2" />
      <path d="M16 22v5M11 27h10" />
      <path d="M8 14h4l2-4 3.5 8 2-4H24" />
    </svg>
  );
}

/** Pickup: rodados. */
export function IconRodados({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M3.4 22H3v-6l3.5-5H16v5h11.5a1.5 1.5 0 0 1 1.5 1.5V22h-.4" />
      <circle cx="9" cy="22" r="2.6" />
      <circle cx="23" cy="22" r="2.6" />
      <path d="M11.6 22h8.8" />
      <path d="M6.5 16H16" />
    </svg>
  );
}

/** Panel solar bajo el sol: energías renovables. */
export function IconSolar({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <circle cx="16" cy="7.5" r="2.6" />
      <path d="M16 2v1.4M9.6 7.5H11M21 7.5h1.4M11.5 3.2l1 1M20.5 3.2l-1 1" />
      <path d="M6.5 15h19l3 11h-25Z" />
      <path d="M5 20.5h22M12.8 15l-1.1 11M19.2 15l1.1 11" />
    </svg>
  );
}

/** Camión: logística. */
export function IconLogistica({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M3 8h15v14H3z" />
      <path d="M18 13h5.5l4.5 4.5V22h-10z" />
      <circle cx="9" cy="24" r="2.6" />
      <circle cx="22" cy="24" r="2.6" />
      <path d="M11.6 24h7.8M3 22h3.4M24.6 22H29" />
    </svg>
  );
}
