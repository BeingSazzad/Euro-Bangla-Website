/**
 * Icon scale for the site. Every icon should pick one of these sizes and the
 * shared stroke so weight stays even across pages.
 */
export const ICON_SIZE = {
   /** Inline with body text: card meta, list bullets, social marks. */
   sm: 16,
   /** Default UI controls: buttons, form fields, contact rows, header actions. */
   md: 20,
   /** Standalone controls: carousel arrows, feature tiles. */
   lg: 24,
   /** Illustrative section icons. */
   xl: 44,
} as const;

export const ICON_STROKE = 1.75;

type IconSize = keyof typeof ICON_SIZE;

export const iconProps = (size: IconSize = "md") => ({
   size: ICON_SIZE[size],
   strokeWidth: ICON_STROKE,
   "aria-hidden": true as const,
});
