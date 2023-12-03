export type SuperThemeScheme = "light" | "dark";

export const variantList = [
  "light",
  "lightAlt",
  "lightInvert",
  "lightHover",
  "lightDisable",
  "dark",
  "darkAlt",
  "darkInvert",
  "darkHover",
  "darkDisable",
  "primary",
  "primaryAlt",
  "primaryInvert",
  "primaryHover",
  "primaryDisable",
  "secondary",
  "secondaryAlt",
  "secondaryInvert",
  "secondaryHover",
  "secondaryDisable",
  "transparent",
  "inherit",
] as const;

export type Variant = (typeof variantList)[number];

export type SuperThemePalette = Partial<Record<Variant, string>>;

export type SuperThemeDefinition = SuperThemePalette & {
  scheme: SuperThemeScheme;
  [key: string]: any;
};
