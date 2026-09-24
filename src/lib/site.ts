export const PHONE = "17875293156";

export const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Saludos, me interesan sus servicios."
)}`;

export const INSTAGRAM = "https://www.instagram.com/sharkwashpr";

export const FACEBOOK = "https://www.facebook.com/share/1LoYYjekxy/?mibextid=wwXIfr";

export const TAGLINE = "Dirty surfaces become our prey.";

export const SERVICES = [
  {
    id: "driveways",
    title: "Driveways",
    description:
      "Removemos manchas de aceite, goma de mascar y suciedad acumulada en tu marquesina sin dañar el piso.",
  },
  {
    id: "aceras",
    title: "Aceras",
    description:
      "Eliminamos moho, verdín y manchas negras de aceras de concreto y cemento.",
  },
  {
    id: "propiedad-comercial",
    title: "Propiedad comercial",
    description:
      "Limpieza de estacionamientos, gasolineras, fachadas y pisos de concreto. Remoción de aceite, grasa y marcas.",
  },
  {
    id: "canchas",
    title: "Canchas deportivas",
    description:
      "Lavado de canchas de baloncesto, tenis y áreas deportivas. Superficie segura y sin verdín.",
  },
  {
    id: "placas-solares",
    title: "Placas solares",
    description:
      "Limpieza cuidadosa que maximiza la eficiencia de tus paneles sin rayar ni dañar.",
  },
  {
    id: "zafacones",
    title: "Zafacones",
    description:
      "Limpieza y desinfección de zafacones residenciales y comerciales. Eliminamos olores y bacterias.",
  },
  {
    id: "vehiculos",
    title: "Vehículos",
    description:
      "Lavado exterior de carros, guaguas, camiones y equipo pesado. Removemos lodo, grasa y suciedad acumulada.",
  },
  {
    id: "fachadas",
    title: "Fachadas",
    description:
      "Lavado seguro de fachadas residenciales y comerciales. Ajustamos presión y químico según el material.",
  },
  {
    id: "techos",
    title: "Techos",
    description:
      "Removemos verdín, moho y manchas de techos de concreto y metal sin dañar la superficie.",
  },
  {
    id: "piscinas",
    title: "Áreas de piscina",
    description:
      "Limpieza de pisos y bordes alrededor de la piscina. Removemos verdín y manchas de cloro.",
  },
  {
    id: "muros",
    title: "Muros y verjas",
    description:
      "Lavado de muros de bloques, verjas de metal y portones. Devolvemos el color original.",
  },
  {
    id: "mas",
    title: "Y más",
    description:
      "¿Tienes otra superficie? También bregamos con eso. Pregúntanos y te damos precio.",
  },
] as const;

/** The marquee only shows service names (no descriptions). */
export const MARQUEE_SERVICES = [
  "Driveway",
  "Acera",
  "Marquesina",
  "Fachada",
  "Techo",
  "Adoquines",
  "Placas solares",
  "Cancha deportiva",
  "Muro / Verja",
  "Área de piscina",
] as const;

/** Footer-only service list (slightly different from the main SERVICES). */
export const FOOTER_SERVICES = [
  "Driveway",
  "Marquesina",
  "Acera",
  "Fachada",
  "Techo",
  "Adoquines",
  "Placas solares",
  "Cancha deportiva",
  "Muro / Verja",
  "Área de piscina",
  "Propiedad comercial",
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Envíanos fotos y/o videos o agenda una cotización",
    description:
      "Cada trabajo se cotiza individualmente según el área, el tipo de superficie y el nivel de suciedad.",
    meta: "Por WhatsApp",
  },
  {
    step: 2,
    title: "Evaluamos",
    description:
      "Evaluamos el área para escoger el mejor método de limpieza.",
    meta: "Según el material",
  },
  {
    step: 3,
    title: "Precio",
    description:
      "Te damos un precio fijo antes de comenzar. Sin sorpresas y sin cargos adicionales.",
    meta: "Precio fijo",
  },
  {
    step: 4,
    title: "Lavamos",
    description:
      "Llegamos con nuestro equipo profesional y dejamos tu propiedad limpia y como nueva.",
    meta: "1–2 h típico",
  },
] as const;

export const FAQ = [
  {
    question: "¿Cuánto cuesta el servicio?",
    answer:
      "Cada trabajo se cotiza individualmente según el área, tipo de superficie y nivel de suciedad. Mándanos fotos por WhatsApp y te damos precio fijo.",
  },
  {
    question: "¿Necesitan toma de corriente?",
    answer:
      "No. Nuestro equipo es a gasolina, así que no necesitamos electricidad en el lugar.",
  },
  {
    question: "¿El pressure washing puede dañar mi superficie?",
    answer:
      "No cuando se hace correctamente. Ajustamos la presión y el tipo de químico según el material: concreto, adoquín, pintura, panel solar, etc.",
  },
  {
    question: "¿Cuánto toma el trabajo?",
    answer:
      "Depende del área. Una marquesina típica toma entre 1 y 2 horas. Trabajos más grandes pueden tomar medio día.",
  },
  {
    question: "¿Trabajan fines de semana?",
    answer:
      "Sí, disponibles los 7 días de la semana.",
  },
  {
    question: "¿Qué áreas cubren?",
    answer:
      "Servimos toda el área metro de San Juan y municipios cercanos.",
  },
] as const;

export const GALLERY_ITEMS = [
  {
    id: "adoquines",
    alt: "Adoquines antes y después",
    before: "/gallery/adoquines-antes.webp",
    after: "/gallery/adoquines-despues.webp",
  },
  {
    id: "acera",
    alt: "Acera antes y después",
    before: "/gallery/acera-antes.webp",
    after: "/gallery/acera-despues.webp",
  },
  {
    id: "marquesina",
    alt: "Marquesina antes y después",
    before: "/gallery/marquesina-antes.webp",
    after: "/gallery/marquesina-despues.webp",
  },
] as const;
