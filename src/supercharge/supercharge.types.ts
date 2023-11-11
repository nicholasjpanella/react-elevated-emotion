import { CreateStyledComponent } from "@emotion/styled";
import {
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
  FunctionComponent,
  AriaAttributes,
} from "react";
import { AllowInlineStyles } from "../inline/inline.types";
import { SuperThemeDefinition } from "../theme/theme.types";

export type SuperStyledConfig = {
  /** custom prop exclusions from final DOM element */
  ignore?: string[];

  /** applys the 'data-testid' DOM attribute */
  testid?: string | ((props) => string);

  /** Default Props and wrapping capabilities */
  defaultProps?:
    | React.AllHTMLAttributes<unknown>
    | ((props) => React.AllHTMLAttributes<unknown>);
};

export type BaseProps = {
  testid?: string;
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
  PROPS = unknown
> = FunctionComponent<
  Intrinsic[TAG] & AllowInlineStyles<PROPS> & BaseProps & AriaAttributes
>;

export type SuperTags = {
  [Tag in keyof Intrinsic]: <
    PROPS = unknown,
    OMIT extends string | number | symbol = ""
  >(
    config: SuperStyledConfig
  ) => CreateStyledComponent<
    ThemeAs,
    Omit<Intrinsic[Tag], OMIT> &
      AllowInlineStyles<PROPS> &
      AriaAttributes &
      BaseProps
  >;
};
