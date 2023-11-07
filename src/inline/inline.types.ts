export type InlineStyleProps = {
  // Size
  w?: React.CSSProperties["width"];
  h?: React.CSSProperties["height"];
  minW?: React.CSSProperties["minWidth"];
  minH?: React.CSSProperties["minHeight"];
  maxW?: React.CSSProperties["maxWidth"];
  maxH?: React.CSSProperties["maxHeight"];
  // Margins
  m?: React.CSSProperties["margin"];
  mt?: React.CSSProperties["marginTop"];
  mb?: React.CSSProperties["marginBottom"];
  ml?: React.CSSProperties["marginLeft"];
  mr?: React.CSSProperties["marginRight"];
  mx?: React.CSSProperties["margin"];
  my?: React.CSSProperties["margin"];
  // Padding
  p?: React.CSSProperties["padding"];
  pt?: React.CSSProperties["paddingTop"];
  pb?: React.CSSProperties["paddingBottom"];
  pl?: React.CSSProperties["paddingLeft"];
  pr?: React.CSSProperties["paddingRight"];
  px?: React.CSSProperties["padding"];
  py?: React.CSSProperties["padding"];
  // Border
  b?: React.CSSProperties["border"];
  bt?: React.CSSProperties["borderTop"];
  bb?: React.CSSProperties["borderBottom"];
  bl?: React.CSSProperties["borderLeft"];
  br?: React.CSSProperties["borderRight"];
  bx?: React.CSSProperties["border"];
  by?: React.CSSProperties["border"];
  radius?: React.CSSProperties["borderRadius"];
  // Colors
  color?: React.CSSProperties["color"];
  bg?: React.CSSProperties["background"];
  // Format
  dp?: React.CSSProperties["display"];
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
  flex?: React.CSSProperties["flex"];
  direction?: React.CSSProperties["flexDirection"];
  order?: React.CSSProperties["order"];
  gap?: React.CSSProperties["gap"];
  wrap?: React.CSSProperties["flexWrap"];
  overflow?: React.CSSProperties["overflow"];
  ox?: React.CSSProperties["overflowX"];
  oy?: React.CSSProperties["overflowY"];
  opacity?: React.CSSProperties["opacity"];
};

export type AllowInlineStyles<T> = T &
  InlineStyleProps & {
    /**
     * @name sx
     * @description special extras, allows to embed and collect both
     * inline keys and react style keys to their values
     */
    sx: AllowInlineStyles<React.CSSProperties>;
  };
