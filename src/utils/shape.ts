export const shape = {
  box: (
    set: number | string = 0
  ): Pick<React.CSSProperties, "width" | "height"> => ({
    width: set,
    height: set,
  }),
};
