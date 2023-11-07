export const minmax = {
  height: (
    set: number | string = 0,
    skipMaxHeight = false
  ): Pick<React.CSSProperties, "minHeight" | "maxHeight"> => ({
    minHeight: set,
    maxHeight: !skipMaxHeight ? set : undefined,
  }),
  width: (
    set: number | string = 0,
    skipMaxWidth = false
  ): Pick<React.CSSProperties, "minWidth" | "maxWidth"> => ({
    minWidth: set,
    maxWidth: !skipMaxWidth ? set : undefined,
  }),
};
