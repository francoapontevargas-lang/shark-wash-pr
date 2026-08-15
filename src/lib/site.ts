export const PHONE = "17875293156";

export const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hola, me interesa un servicio de pressure washing. ¿Me pueden dar un estimado?"
)}`;

export const INSTAGRAM = "https://www.instagram.com/sharkwashpr";

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

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Mandas fotos",
    description:
      "Nos envías fotos del área por WhatsApp. Así evaluamos el tamaño, el tipo de superficie y el nivel de suciedad.",
  },
  {
    step: 2,
    title: "Precio fijo",
    description:
      "Te damos un precio fijo por el trabajo completo. Sin sorpresas, sin cargos adicionales.",
  },
  {
    step: 3,
    title: "Lavamos",
    description:
      "Llegamos con equipo a gasolina (no necesitamos toma de corriente), ajustamos presión y químico según la superficie, y dejamos todo limpio.",
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
      "Sí, trabajamos de lunes a sábado. Domingos por disponibilidad.",
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
    before: "/gallery/adoquines-antes.jpg",
    after: "/gallery/adoquines-despues.jpg",
  },
  {
    id: "marquesina",
    alt: "Marquesina antes y después",
    before: "/gallery/marquesina-antes.jpg",
    after: "/gallery/marquesina-despues.jpg",
  },
  {
    id: "acera",
    alt: "Acera antes y después",
    before: "/gallery/acera-antes.jpg",
    after: "/gallery/acera-despues.jpg",
  },
] as const;

export const HERO_COMPARATOR = {
  id: "hero",
  alt: "Entrada de casa antes y después del pressure washing",
  before: "/gallery/hero-antes.jpg",
  after: "/gallery/hero-despues.jpg",
} as const;
