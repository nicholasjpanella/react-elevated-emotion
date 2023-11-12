import { CSSProperties } from "react";
import csn from "classnames";

import { tags } from "../supercharge/supercharge";

export type FlexProps = {
  inline?: boolean;
  column?: boolean;
  reverse?: boolean;
  fill?: boolean;
};

export const Flex = tags.div<FlexProps>({
  testid: ({ testid = null }) => `flex${testid ? "-".concat(testid) : ""}`,
  ignore: ["inline", "column", "reverse", "fill"],
})(
  ({
    inline = false,
    column = false,
    reverse = false,
    fill = false,
    onClick,
  }) => ({
    label: "flex",
    display: inline ? "inline-flex" : "flex",

    flexDirection: csn(
      { row: !column && !reverse },
      { column: column && !reverse },
      { "row-reverse": !column && reverse },
      { "column-reverse": column && reverse }
    ) as CSSProperties["flexDirection"],

    flex: fill ? "1 1 auto" : undefined,

    ...(typeof onClick === "function"
      ? {
          cursor: "pointer",
        }
      : {}),
  })
);
