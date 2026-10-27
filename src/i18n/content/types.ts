export interface ContactoContent {
  heroTitle: string;
  heroSubtitle: string;
  infoTitle: string;
  pressTitle: string;
  locationsTitle: string;
  noteLabel: string;
  noteText: string;
  ubicaciones: {
    nombre: string;
    direccion: string;
    evento: string;
  }[];
}

export interface EntradaContent {
  fecha: string;
  evento: string;
  artista: string;
  lugar: string;
  precioAnticipada: string;
  precioTaquilla?: string;
  linkTexto: string;
}

export interface FlyerContent {
  title: string;
  description: string;
}

export interface EntradasContent {
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  promoTitle: string;
  promoSubtitle: string;
  downloadButton: string;
  recommendedBadge: string;
  toastSuccess: string;
  copyFallback: string;
  shareMessage: string;
  ticketNotice: string;
  ticketContact: string;
  flyers: Record<string, FlyerContent>;
  entradas: Record<string, EntradaContent>;
}

export interface EditionContent {
  title?: string;
  dates?: string;
  description?: string;
}

export interface ArchivoContent {
  heroTitle: string;
  heroSubtitle: string;
  viewFlyer: string;
  comingSoon: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  ediciones?: Record<string, EditionContent>;
}

export interface ProgramaArtistaContent {
  origen?: string;
  estilo?: string;
}

export interface ProgramaEventoContent {
  titulo?: string;
  descripcion?: string;
  precio?: string;
  linkTexto?: string;
  lugar?: string;
  direccion?: string;
  horaSuffix?: string;
  artistas?: ProgramaArtistaContent[];
}

export interface ProgramaBloqueContent {
  dia?: string;
  mes?: string;
  tag?: string;
  orden?: 'dia-mes' | 'mes-dia';
}

export interface ProgramaAbonoContent {
  label?: string;
  precio?: string;
  descripcion?: string;
  linkTexto?: string;
}

export interface ProgramaContent {
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  promoTitle: string;
  promoSubtitle: string;
  downloadButton: string;
  recommendedBadge: string;
  toastSuccess: string;
  copyFallback: string;
  shareMessage: string;
  flyers: Record<string, FlyerContent>;
  blocks: Record<string, ProgramaBloqueContent>;
  events: Record<string, ProgramaEventoContent>;
  abono: ProgramaAbonoContent;
}

export interface ArtistContent {
  origen?: string;
  estilo?: string;
  biografia?: string[];
}

export interface ArtistasContent {
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  items: Record<string, ArtistContent>;
}

export interface PageContent {
    index: {
    viewProgram: string;
    };
  contacto: ContactoContent;
  entradas: EntradasContent;
  archivo: ArchivoContent;
  programa: ProgramaContent;
  artistas: ArtistasContent;
}