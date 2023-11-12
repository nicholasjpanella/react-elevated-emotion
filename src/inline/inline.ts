import omit from "lodash.omit";
import get from "lodash.get";
import update from "lodash.update";

import { InlineStyleProps } from "./inline.types";
export type * from "./inline.types";

export const inlineStyleMap: Record<
  keyof InlineStyleProps,
  (keyof React.CSSProperties)[]
> & { sx: { type: string } } = {
  w: ["width"],
  h: ["height"],
  minW: ["minWidth"],
  minH: ["minHeight"],
  maxW: ["maxWidth"],
  maxH: ["maxHeight"],
  m: ["margin"],
  mt: ["marginTop"],
  mb: ["marginBottom"],
  ml: ["marginLeft"],
  mr: ["marginRight"],
  mx: ["marginLeft", "marginRight"],
  my: ["marginTop", "marginBottom"],
  p: ["padding"],
  pt: ["paddingTop"],
  pb: ["paddingBottom"],
  pl: ["paddingLeft"],
  pr: ["paddingRight"],
  px: ["paddingLeft", "paddingRight"],
  py: ["paddingTop", "paddingBottom"],
  b: ["border"],
  bt: ["borderTop"],
  bb: ["borderBottom"],
  bl: ["borderLeft"],
  br: ["borderRight"],
  bx: ["borderLeft", "borderRight"],
  by: ["borderTop", "borderBottom"],
  radius: ["borderRadius"],
  color: ["color"],
  bg: ["background"],
  dp: ["display"],
  align: ["alignItems"],
  justify: ["justifyContent"],
  flex: ["flex"],
  direction: ["flexDirection"],
  order: ["order"],
  gap: ["gap"],
  wrap: ["flexWrap"],
  overflow: ["overflow"],
  ox: ["overflowX"],
  oy: ["overflowY"],
  opacity: ["opacity"],
  sx: { type: "all" },
};

/**
 * @name sanitizeComponentProps
 * @param componentProps Component Props
 * @param customPropExclusions Custom Props Exclusions - prop keys you don't want included in your DOM element
 * @returns
 */
export function sanitizeComponentProps(
  componentProps: any,
  customPropExclusions = []
) {
  return omit(
    componentProps,
    Object.keys(inlineStyleMap).concat(customPropExclusions)
  );
}

export function applyInlineStyles(componentProps: any, debug = false) {
  debug && console.debug({ componentProps });

  const appliedStyles = {};

  const sanitizeProps = (styleProps: any = {}) => {
    const clone = { ...styleProps };
    const reactStyles = omit(clone, Object.keys(inlineStyleMap));

    for (const [key] of Object.entries(reactStyles)) {
      delete clone[String(key)];
    }

    if (Object.keys(clone).includes("sx")) {
      const innnerReactStyles = omit(clone.sx, Object.keys(inlineStyleMap));
      for (const [key, value] of Object.entries(innnerReactStyles)) {
        appliedStyles[String(key)] = value;
        delete clone.sx[String(key)];
      }
    }

    return clone;
  };

  const applyStyle = (key, value) => {
    const mapsTo = get(inlineStyleMap, key);
    if (!mapsTo) return;
    if (Array.isArray(mapsTo)) {
      for (const styleKey of mapsTo) {
        update(appliedStyles, styleKey, () => value);
      }
    }
  };

  const shortHandStyles = sanitizeProps(componentProps);
  debug && console.debug({ shortHandStyles });

  for (const [key, value] of Object.entries(shortHandStyles)) {
    if (value === null) continue;
    if (value === undefined) continue;
    if (typeof value === "string" && value === "") continue;
    if (key === "sx") {
      for (const [sxKey, sxValue] of Object.entries(shortHandStyles.sx)) {
        applyStyle(sxKey, sxValue);
      }
    } else {
      applyStyle(key, value);
    }
  }

  return appliedStyles;
}
