import baseStyled from "@emotion/styled";
import { Fragment, cloneElement, forwardRef } from "react";
import extendClassName from "classnames";

import { applyInlineStyles, sanitizeComponentProps } from "../inline/inline";

import type { SuperTags, SuperStyledConfig } from "./supercharge.types";
export type * from "./supercharge.types";

const defaultConfig: SuperStyledConfig = {
  ignore: ["variant", "size"],
  testid: null,
  defaultProps: {},
};

const asFunc = (funcOrUnknown, functionParams) =>
  typeof funcOrUnknown === "function"
    ? funcOrUnknown(functionParams)
    : funcOrUnknown;

export function supercharge(element, isFragment = false): any {
  return (config = defaultConfig) =>
    (styleDefinition) =>
      baseStyled(
        forwardRef((props: any, ref) => {
          const defaultProps = asFunc(config.defaultProps, props);
          const withTestId = config.testid
            ? { "data-testid": asFunc(config.testid, props) }
            : {};

          if (isFragment) {
            props = {
              ...props,
              ...withTestId,
            };
          }

          return cloneElement(
            element,
            sanitizeComponentProps(
              {
                ...props,
                ...defaultProps,
                ...withTestId,

                className: extendClassName(
                  element?.props?.className,
                  props?.className,
                  defaultProps?.className
                ),

                ref,
              },
              [...defaultConfig.ignore, ...(config.ignore ?? [])]
            )
          );
        })
      )((styleProps) => ({
        ...asFunc(styleDefinition, styleProps),
        ...applyInlineStyles(styleProps),
      }));
}

export const tags: SuperTags = {
  fragment: supercharge(<Fragment />, true),
  elbow: supercharge(<small className="elbow" />),
  // ---
  a: supercharge(<a />),
  abbr: supercharge(<abbr />),
  address: supercharge(<address />),
  area: supercharge(<area />),
  article: supercharge(<article />),
  aside: supercharge(<aside />),
  audio: supercharge(<audio />),
  b: supercharge(<b />),
  base: supercharge(<base />),
  bdi: supercharge(<bdi />),
  bdo: supercharge(<bdo />),
  big: supercharge(<big />),
  blockquote: supercharge(<blockquote />),
  body: supercharge(<body />),
  br: supercharge(<br />),
  button: supercharge(<button />),
  canvas: supercharge(<canvas />),
  caption: supercharge(<caption />),
  center: supercharge(<center />),
  cite: supercharge(<cite />),
  code: supercharge(<code />),
  col: supercharge(<col />),
  colgroup: supercharge(<colgroup />),
  data: supercharge(<data />),
  datalist: supercharge(<datalist />),
  dd: supercharge(<dd />),
  del: supercharge(<del />),
  details: supercharge(<details />),
  dfn: supercharge(<dfn />),
  dialog: supercharge(<dialog />),
  div: supercharge(<div />),
  dl: supercharge(<dl />),
  dt: supercharge(<dt />),
  em: supercharge(<em />),
  embed: supercharge(<embed />),
  fieldset: supercharge(<fieldset />),
  figcaption: supercharge(<figcaption />),
  figure: supercharge(<figure />),
  footer: supercharge(<footer />),
  form: supercharge(<form />),
  h1: supercharge(<h1 />),
  h2: supercharge(<h2 />),
  h3: supercharge(<h3 />),
  h4: supercharge(<h4 />),
  h5: supercharge(<h5 />),
  h6: supercharge(<h6 />),
  head: supercharge(<head />),
  header: supercharge(<header />),
  hgroup: supercharge(<hgroup />),
  hr: supercharge(<hr />),
  html: supercharge(<html />),
  i: supercharge(<i />),
  iframe: supercharge(<iframe />),
  img: supercharge(<img />),
  input: supercharge(<input />),
  ins: supercharge(<ins />),
  kbd: supercharge(<kbd />),
  keygen: supercharge(<keygen />),
  label: supercharge(<label />),
  legend: supercharge(<legend />),
  li: supercharge(<li />),
  link: supercharge(<link />),
  main: supercharge(<main />),
  map: supercharge(<map />),
  mark: supercharge(<mark />),
  menu: supercharge(<menu />),
  menuitem: supercharge(<menuitem />),
  meta: supercharge(<meta />),
  meter: supercharge(<meter />),
  nav: supercharge(<nav />),
  noindex: supercharge(<noindex />),
  noscript: supercharge(<noscript />),
  object: supercharge(<object />),
  ol: supercharge(<ol />),
  optgroup: supercharge(<optgroup />),
  option: supercharge(<option />),
  output: supercharge(<output />),
  p: supercharge(<p />),
  param: supercharge(<param />),
  picture: supercharge(<picture />),
  pre: supercharge(<pre />),
  progress: supercharge(<progress />),
  q: supercharge(<q />),
  rp: supercharge(<rp />),
  rt: supercharge(<rt />),
  ruby: supercharge(<ruby />),
  s: supercharge(<s />),
  samp: supercharge(<samp />),
  search: supercharge(<search />),
  slot: supercharge(<slot />),
  script: supercharge(<script />),
  section: supercharge(<section />),
  select: supercharge(<select />),
  small: supercharge(<small />),
  source: supercharge(<source />),
  span: supercharge(<span />),
  strong: supercharge(<strong />),
  style: supercharge(<style />),
  sub: supercharge(<sub />),
  summary: supercharge(<summary />),
  sup: supercharge(<sup />),
  table: supercharge(<table />),
  template: supercharge(<template />),
  tbody: supercharge(<tbody />),
  td: supercharge(<td />),
  textarea: supercharge(<textarea />),
  tfoot: supercharge(<tfoot />),
  th: supercharge(<th />),
  thead: supercharge(<thead />),
  time: supercharge(<time />),
  title: supercharge(<title />),
  tr: supercharge(<tr />),
  track: supercharge(<track />),
  u: supercharge(<u />),
  ul: supercharge(<ul />),
  var: supercharge(<var />),
  video: supercharge(<video />),
  wbr: supercharge(<wbr />),
  webview: supercharge(<webview />),
  svg: supercharge(<svg />),
  animate: supercharge(<animate />),
  animateMotion: supercharge(<animateMotion />),
  animateTransform: supercharge(<animateTransform />),
  circle: supercharge(<circle />),
  clipPath: supercharge(<clipPath />),
  defs: supercharge(<defs />),
  desc: supercharge(<desc />),
  ellipse: supercharge(<ellipse />),
  feBlend: supercharge(<feBlend />),
  feColorMatrix: supercharge(<feColorMatrix />),
  feComponentTransfer: supercharge(<feComponentTransfer />),
  feComposite: supercharge(<feComposite />),
  feConvolveMatrix: supercharge(<feConvolveMatrix />),
  feDiffuseLighting: supercharge(<feDiffuseLighting />),
  feDisplacementMap: supercharge(<feDisplacementMap />),
  feDistantLight: supercharge(<feDistantLight />),
  feDropShadow: supercharge(<feDropShadow />),
  feFlood: supercharge(<feFlood />),
  feFuncA: supercharge(<feFuncA />),
  feFuncB: supercharge(<feFuncB />),
  feFuncG: supercharge(<feFuncG />),
  feFuncR: supercharge(<feFuncR />),
  feGaussianBlur: supercharge(<feGaussianBlur />),
  feImage: supercharge(<feImage />),
  feMerge: supercharge(<feMerge />),
  feMergeNode: supercharge(<feMergeNode />),
  feMorphology: supercharge(<feMorphology />),
  feOffset: supercharge(<feOffset />),
  fePointLight: supercharge(<fePointLight />),
  feSpecularLighting: supercharge(<feSpecularLighting />),
  feSpotLight: supercharge(<feSpotLight />),
  feTile: supercharge(<feTile />),
  feTurbulence: supercharge(<feTurbulence />),
  filter: supercharge(<filter />),
  foreignObject: supercharge(<foreignObject />),
  g: supercharge(<g />),
  image: supercharge(<image />),
  line: supercharge(<line />),
  linearGradient: supercharge(<linearGradient />),
  marker: supercharge(<marker />),
  mask: supercharge(<mask />),
  metadata: supercharge(<metadata />),
  mpath: supercharge(<mpath />),
  path: supercharge(<path />),
  pattern: supercharge(<pattern />),
  polygon: supercharge(<polygon />),
  polyline: supercharge(<polyline />),
  radialGradient: supercharge(<radialGradient />),
  rect: supercharge(<rect />),
  stop: supercharge(<stop />),
  switch: supercharge(<switch />),
  symbol: supercharge(<symbol />),
  text: supercharge(<text />),
  textPath: supercharge(<textPath />),
  tspan: supercharge(<tspan />),
  use: supercharge(<use />),
  view: supercharge(<view />),
};
