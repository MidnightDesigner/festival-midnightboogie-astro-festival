import type { PageContent } from './types';
import es from './es';
import eu from './eu';
import en from './en';
import fr from './fr';

const contents: Record<string, PageContent> = { es, eu, en, fr };

export function getContent(lang: string): PageContent {
  return contents[lang] || contents.es;
}

export type { PageContent } from './types';