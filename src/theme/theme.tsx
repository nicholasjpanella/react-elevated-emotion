import { create } from "zustand";
import { ThemeProvider } from "@emotion/react";
import { PropsWithChildren, useEffect } from "react";

import type { SuperThemeDefinition, SuperThemeScheme } from "./theme.types";
export type * from "./theme.types";

type Store = SuperThemeDefinition & {
  preferred?: boolean;
  defaultScheme?: SuperThemeScheme;
};

export const useSuperTheme = create<Store>(() => ({
  scheme: "light",
  preferred: false,
  defaultScheme: null,
}));

/**
 * @name superThemeApi
 * @description Global theme definitions and functionality
 */
export const superThemeApi = {
  toggleColorScheme(force: SuperThemeScheme | false = false) {
    if (force !== false) useSuperTheme.setState({ scheme: force });
    else {
      useSuperTheme.setState(({ scheme }) => ({
        scheme: scheme === "light" ? "dark" : "light",
      }));
    }
  },
  setDefaultScheme(scheme: SuperThemeScheme) {
    useSuperTheme.setState({ scheme, defaultScheme: scheme });
  },
  setDefaultPallet(pallet: Omit<SuperThemeDefinition, "scheme">) {
    useSuperTheme.setState({ ...pallet });
  },
};

export function systemPreferrenceDetection(debug = true): {
  enable?: () => void;
  disable?: () => void;
} {
  if (!window) return {};

  const query = window.matchMedia("(prefers-color-scheme: dark)");

  const listener = (e) => {
    debug && console.debug("System Preferrence Changed", e.matches, e);
    useSuperTheme.setState({
      scheme: e.matches ? "dark" : "light",
      preferred: true,
    });
  };

  return {
    enable() {
      query.addEventListener("change", listener);
      listener({ matches: query.matches });
    },
    disable() {
      query.removeEventListener("change", listener);
      useSuperTheme.setState(({ defaultScheme }) => ({
        scheme: defaultScheme ?? "light",
        preferred: false,
      }));
    },
  };
}

type ProviderProps = {
  detectSystemPreferrence?: boolean;
};

/**
 * @name SuperThemeProvider
 * @description Initializes Emotion Theme Context w/ supercharge
 * @param props
 * @returns Context Provider for Emotion Theme
 */
export function SuperThemeProvider({
  children,
  detectSystemPreferrence,
}: PropsWithChildren<ProviderProps>) {
  const store = useSuperTheme();

  useEffect(() => {
    const { enable, disable } = systemPreferrenceDetection();

    if (!detectSystemPreferrence) {
      if (store.preferred) disable();
      return;
    }

    enable();

    return () => {
      disable();
    };
  }, [detectSystemPreferrence, store?.preferred]);

  return <ThemeProvider theme={store}>{children}</ThemeProvider>;
}
