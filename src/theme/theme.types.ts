export type SuperThemeScheme = "light" | "dark";

export type SuperThemeDefinition = {
  scheme: SuperThemeScheme;
  light?: string;
  lightAlt?: string;
  lightInvert?: string;
  ligthHover?: string;
  ligthDisable?: string;
  dark?: string;
  darkAlt?: string;
  darkInvert?: string;
  darkHover?: string;
  darkDisable?: string;
  primary?: string;
  primaryAlt?: string;
  primaryInvert?: string;
  primaryHover?: string;
  primaryDisable?: string;
  secondary?: string;
  secondaryAlt?: string;
  secondaryInvert?: string;
  secondaryHover?: string;
  secondaryDisable?: string;
  [key: string]: any;
};
