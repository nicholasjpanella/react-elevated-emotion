import { tags } from "../supercharge/supercharge";

export const Box = tags.div({
  testid: ({ testid = null }) => `box${testid ? "-".concat(testid) : ""}`,
})((props) => ({
  label: "box",
  ...(typeof props.onClick === "function"
    ? {
        cursor: "pointer",
      }
    : {}),
}));
