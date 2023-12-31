import { CreateStyledComponent } from "@emotion/styled";
import {
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
  FunctionComponent,
  AriaAttributes,
  PropsWithChildren,
} from "react";
import { AllowInlineStyles } from "../inline/inline.types";
import { SuperThemeDefinition, Variant } from "../theme/theme.types";

export type SuperStyledConfig<T = {}> = {
  /** custom prop exclusions from final DOM element */
  ignore?: string[];

  /** applys the 'data-testid' DOM attribute */
  testid?: string | ((props) => string);

  /** Default Props and wrapping capabilities */
  defaultProps?:
    | (T & React.AllHTMLAttributes<unknown>)
    | ((
        props?: PropsWithChildren<T & React.AllHTMLAttributes<unknown>>
      ) => PropsWithChildren<T & React.AllHTMLAttributes<unknown>>);
};

export const sizeList = [
  "xxx-sm",
  "xx-sm",
  "x-sm",
  "sm",
  "md",
  "lg",
  "x-lg",
  "xx-lg",
  "xxx-lg",
] as const;

export type Size = (typeof sizeList)[number];

export type BaseProps = {
  /**
   * @name testid
   * @description provide your testid function with a testid value
   */
  testid?: string;
  /**
   * @name variant
   * @description customize/override your themed color
   */
  variant?: Variant;
  /**
   * @name size
   * @description customize/override your component's size
   */
  size?: Size;
};

export type ThemeAs = {
  theme?: SuperThemeDefinition;
  as?: ElementType;
};

interface Intrinsic extends JSX.IntrinsicElements {
  fragment: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  elbow: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
}

export type SuperComponent<
  TAG extends keyof Intrinsic,
  PROPS = {}
> = FunctionComponent<
  Intrinsic[TAG] & AllowInlineStyles<PROPS> & BaseProps & AriaAttributes
>;

export type SuperTags = {
  [Tag in keyof Intrinsic]: <
    PROPS = {},
    OMIT extends string | number | symbol = null
  >(
    config: SuperStyledConfig<PROPS>
  ) => CreateStyledComponent<
    ThemeAs,
    Omit<Intrinsic[Tag], OMIT> &
      AllowInlineStyles<PROPS> &
      AriaAttributes &
      BaseProps
  >;
};
