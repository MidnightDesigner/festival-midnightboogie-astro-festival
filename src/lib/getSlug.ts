/**
 * Generates a clean, consistent slug from an artist name.
 * Normalizes unicode, removes accents, strips non-alphanumeric characters,
 * and replaces spaces/multiple hyphens with a single hyphen.
 * 
 * Example: "Syl Al" -> "syl-al"
 *          "STONE FOUNDATION" -> "stone-foundation"
 */
export function getSlug(nombre: string): string {
  return nombre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove accents/diacritics
    .replace(/[^a-z0-9\s-]/g, "")    // remove non-alphanumeric chars (keep spaces and hyphens)
    .trim()
    .replace(/\s+/g, "-")            // replace spaces with hyphens
    .replace(/-+/g, "-");            // deduplicate hyphens
}
