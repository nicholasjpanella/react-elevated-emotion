export type SuperThemeScheme = "light" | "dark";

export type SuperThemeDefinition = {
  scheme: SuperThemeScheme;
  lightColor?: string;
  lightAltColor?: string;
  lightInvertColor?: string;
  darkColor?: string;
  darkAltColor?: string;
  darkInvertColor?: string;
  primary?: string;
  secondary?: string;
  alternative?: string;
};
