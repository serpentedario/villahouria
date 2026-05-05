export type Piano =
  | "piano-terra"
  | "piano-primo"
  | "piano-secondo"
  | "soffitta"
  | "esterni";

export type CompareAngle = {
  label: string;
  beforeSrc: string;
  afterSrc: string;
};

export type Spazio = {
  slug: string;
  piano: Piano;
  title: string;
  subtitle?: string;
  rigaGuida: string;
  catalog: {
    beforeLabel: string;
    beforeText: string;
    afterLabel: string;
    afterText: string;
  };
  dettaglioDaNotare: string;
  angles: CompareAngle[];
};

const firmaCatalogo = {
  beforeLabel: "PRIMA",
  beforeText: "Patina, umidità, attesa.",
  afterLabel: "DOPO",
  afterText: "Ordine, calore, continuità."
};

function placeholderAngles(): CompareAngle[] {
  // Sostituisci questi percorsi con le tue foto reali, es:
  // /photos/taverna-del-fuoco/a1-prima.jpg
  // /photos/taverna-del-fuoco/a1-dopo.jpg
  const mk = (n: number) => ({
    label: String(n),
    beforeSrc: `/photos/placeholder/prima-${n}.jpg`,
    afterSrc: `/photos/placeholder/dopo-${n}.jpg`
  });
  return [mk(1), mk(2), mk(3), mk(4), mk(5), mk(6)];
}

export const SPAZI: Spazio[] = [
  {
    slug: "stanza-dei-passi",
    piano: "piano-terra",
    title: "Stanza dei Passi",
    subtitle: "Magazzino biciclette / scarponi",
    rigaGuida: "Qui si deposita il mondo di fuori: fango, scarponi, partenze.",
    catalog: firmaCatalogo,
    dettaglioDaNotare: "Nota la soglia: il confine tra prima e dopo è spesso qui.",
    angles: placeholderAngles()
  },
  {
    slug: "taverna-del-fuoco",
    piano: "piano-terra",
    title: "Taverna del Fuoco",
    subtitle: "Taverna con caminetto",
    rigaGuida: "Una stanza che raccoglie: il caminetto non scalda solo l’aria.",
    catalog: {
      beforeLabel: "PRIMA",
      beforeText: "Fumo, cenere, attesa.",
      afterLabel: "DOPO",
      afterText: "Fiamma, raccoglimento, casa."
    },
    dettaglioDaNotare: "Osserva l’angolo vicino alla finestra: lì il tempo lavorava di più.",
    angles: placeholderAngles()
  },
  {
    slug: "sala-tecnica",
    piano: "piano-terra",
    title: "Sala Tecnica",
    subtitle: "Caldaia",
    rigaGuida: "Il cuore invisibile: ciò che non si vede, ma regge ogni comfort.",
    catalog: firmaCatalogo,
    dettaglioDaNotare: "Guarda le linee: l’ordine tecnico è la quiete della casa.",
    angles: placeholderAngles()
  },
  {
    slug: "stanza-dell-acqua",
    piano: "piano-terra",
    title: "Stanza dell’Acqua",
    subtitle: "Lavanderia",
    rigaGuida: "La cura quotidiana: acqua, ordine, piccoli gesti.",
    catalog: {
      beforeLabel: "PRIMA",
      beforeText: "Gocce, ruggine, freddo.",
      afterLabel: "DOPO",
      afterText: "Pulizia, ordine, ritmo."
    },
    dettaglioDaNotare: "Nota come la luce rimbalza sulle superfici pulite: cambia la stanza.",
    angles: placeholderAngles()
  },

  {
    slug: "salotto",
    piano: "piano-primo",
    title: "Salotto",
    rigaGuida: "Il centro della casa: dove la luce si ferma più a lungo.",
    catalog: firmaCatalogo,
    dettaglioDaNotare: "Guarda come cambia la parete quando la luce gira nel pomeriggio.",
    angles: placeholderAngles()
  },
  {
    slug: "bagno-del-piano",
    piano: "piano-primo",
    title: "Bagno del Piano",
    subtitle: "Bagno",
    rigaGuida: "Funzione e pulizia: la modernità qui deve essere silenziosa.",
    catalog: firmaCatalogo,
    dettaglioDaNotare: "Nota la misura dei dettagli: qui l’essenziale è una scelta.",
    angles: placeholderAngles()
  },
  {
    slug: "cucina",
    piano: "piano-primo",
    title: "Cucina",
    rigaGuida: "Il luogo delle decisioni semplici: tagliare, cuocere, parlare.",
    catalog: firmaCatalogo,
    dettaglioDaNotare: "Osserva le superfici: ogni segno di uso è una promessa di vita.",
    angles: placeholderAngles()
  },
  {
    slug: "camera-del-primo",
    piano: "piano-primo",
    title: "Camera del Primo",
    subtitle: "Camera",
    rigaGuida: "Una stanza per rallentare: il riposo come scelta.",
    catalog: firmaCatalogo,
    dettaglioDaNotare: "Nota il punto in cui si posa lo sguardo entrando: è lì che la stanza “regge”.",
    angles: placeholderAngles()
  },

  {
    slug: "camera-nord",
    piano: "piano-secondo",
    title: "Camera Nord",
    subtitle: "Camera",
    rigaGuida: "Più fresca, più quieta: una stanza che invita al silenzio.",
    catalog: firmaCatalogo,
    dettaglioDaNotare: "Ascolta la stanza: certe case cambiano anche nel suono.",
    angles: placeholderAngles()
  },
  {
    slug: "camera-est",
    piano: "piano-secondo",
    title: "Camera Est",
    subtitle: "Camera",
    rigaGuida: "Il mattino arriva qui per primo: una stanza che apre la giornata.",
    catalog: firmaCatalogo,
    dettaglioDaNotare: "Nota come entra la luce: la stanza la “trattiene” e la restituisce.",
    angles: placeholderAngles()
  },
  {
    slug: "camera-ovest",
    piano: "piano-secondo",
    title: "Camera Ovest",
    subtitle: "Camera",
    rigaGuida: "La sera entra lenta: una stanza che trattiene il crepuscolo.",
    catalog: firmaCatalogo,
    dettaglioDaNotare: "Guarda le ombre: qui diventano parte dell’arredo.",
    angles: placeholderAngles()
  },
  {
    slug: "bagno-del-secondo",
    piano: "piano-secondo",
    title: "Bagno del Secondo",
    subtitle: "Bagno",
    rigaGuida: "Essenziale e discreto: perché la casa resti casa.",
    catalog: firmaCatalogo,
    dettaglioDaNotare: "Nota l’assenza di rumore visivo: è una forma di cura.",
    angles: placeholderAngles()
  },

  {
    slug: "il-sottotetto",
    piano: "soffitta",
    title: "Il Sottotetto",
    subtitle: "Soffitta — unico vano",
    rigaGuida: "Dove si conserva: non tanto le cose, quanto le tracce.",
    catalog: firmaCatalogo,
    dettaglioDaNotare: "Guarda le superfici: qui la casa racconta senza parlare.",
    angles: placeholderAngles()
  },

  {
    slug: "facciata-nord",
    piano: "esterni",
    title: "Facciata Nord",
    rigaGuida: "La parte più severa della casa: qui l’inverno lascia firme lunghe.",
    catalog: {
      beforeLabel: "PRIMA",
      beforeText: "Freddo, umido, resistenza.",
      afterLabel: "DOPO",
      afterText: "Tenuta, misura, respiro."
    },
    dettaglioDaNotare: "Osserva la pelle della casa: è un documento, non una maschera.",
    angles: placeholderAngles()
  },
  {
    slug: "facciata-sud",
    piano: "esterni",
    title: "Facciata Sud",
    rigaGuida: "La luce non perdona: rivela tutto, e per questo consola.",
    catalog: {
      beforeLabel: "PRIMA",
      beforeText: "Scolorito, fragile, esposto.",
      afterLabel: "DOPO",
      afterText: "Chiaro, stabile, presente."
    },
    dettaglioDaNotare: "Nota come la luce “scrive” sui volumi: qui si legge la forma.",
    angles: placeholderAngles()
  },
  {
    slug: "facciata-est",
    piano: "esterni",
    title: "Facciata Est",
    rigaGuida: "Il mattino entra per primo: la casa ricomincia da qui.",
    catalog: {
      beforeLabel: "PRIMA",
      beforeText: "Rugiada, crepe, silenzio.",
      afterLabel: "DOPO",
      afterText: "Pulizia, continuità, inizio."
    },
    dettaglioDaNotare: "Guarda l’ombra al mattino: è la misura del volume.",
    angles: placeholderAngles()
  },
  {
    slug: "facciata-ovest",
    piano: "esterni",
    title: "Facciata Ovest",
    rigaGuida: "La sera posa un’ombra lenta: ogni dettaglio pesa di più.",
    catalog: {
      beforeLabel: "PRIMA",
      beforeText: "Ombra, polvere, stanchezza.",
      afterLabel: "DOPO",
      afterText: "Calma, ordine, durata."
    },
    dettaglioDaNotare: "Nota i dettagli in controluce: lì si vede la cura.",
    angles: placeholderAngles()
  },
  {
    slug: "scala-interna",
    piano: "esterni",
    title: "Scala interna",
    rigaGuida: "Una spina dorsale: porta il tempo da un piano all’altro.",
    catalog: {
      beforeLabel: "PRIMA",
      beforeText: "Scricchiolii, graffi, attesa.",
      afterLabel: "DOPO",
      afterText: "Passo sicuro, ritmo, continuità."
    },
    dettaglioDaNotare: "Guarda la linea del corrimano: è una traiettoria di vita quotidiana.",
    angles: placeholderAngles()
  },
  {
    slug: "scala-esterna-1",
    piano: "esterni",
    title: "Scala esterna I",
    rigaGuida: "Entrare da fuori è un gesto: la casa si dichiara.",
    catalog: {
      beforeLabel: "PRIMA",
      beforeText: "Pioggia, gelo, consumo.",
      afterLabel: "DOPO",
      afterText: "Tenuta, appoggio, invito."
    },
    dettaglioDaNotare: "Nota la soglia: è la grammatica dell’ingresso.",
    angles: placeholderAngles()
  },
  {
    slug: "scala-esterna-2",
    piano: "esterni",
    title: "Scala esterna II",
    rigaGuida: "Una soglia secondaria, eppure necessaria: l’uso quotidiano.",
    catalog: {
      beforeLabel: "PRIMA",
      beforeText: "Ruggine, pendenza, fatica.",
      afterLabel: "DOPO",
      afterText: "Stabilità, misura, ritorno."
    },
    dettaglioDaNotare: "Osserva l’appoggio del piede: lì si capisce la sicurezza.",
    angles: placeholderAngles()
  },
  {
    slug: "fontana",
    piano: "esterni",
    title: "Fontana",
    rigaGuida: "L’acqua è memoria: quando torna a scorrere, cambia l’intero giardino.",
    catalog: {
      beforeLabel: "PRIMA",
      beforeText: "Secco, incrostato, fermo.",
      afterLabel: "DOPO",
      afterText: "Pulito, vivo, in movimento."
    },
    dettaglioDaNotare: "Ascolta: il suono dell’acqua è un segnale di ritorno.",
    angles: placeholderAngles()
  },
  {
    slug: "giardino",
    piano: "esterni",
    title: "Giardino",
    rigaGuida: "Non si ‘sistema’ un giardino: si riapre un dialogo con le stagioni.",
    catalog: {
      beforeLabel: "PRIMA",
      beforeText: "Intrico, rovi, abbandono.",
      afterLabel: "DOPO",
      afterText: "Percorsi, aria, ritorno."
    },
    dettaglioDaNotare: "Nota i percorsi: sono una scelta, non un caso.",
    angles: placeholderAngles()
  }
];

export const PIANI: { key: Piano; label: string; motto: string }[] = [
  { key: "piano-terra", label: "Piano Terra", motto: "Dove la casa lavora." },
  { key: "piano-primo", label: "Piano Primo", motto: "Dove la casa vive." },
  { key: "piano-secondo", label: "Piano Secondo", motto: "Dove la casa riposa." },
  { key: "soffitta", label: "Soffitta", motto: "Dove la casa conserva." },
  { key: "esterni", label: "Esterni", motto: "Dove la casa parla alla collina." }
];

