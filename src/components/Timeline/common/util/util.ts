import { Separator, Align, AlignDirection } from "../types";

/**
 * Gets the individual event's "net" align-direction.
 *
 * @param index {number}
 * @returns {AlignDirection}
 */
export const getEventAlignDirection = (args: { index: number, align: Align, alignStart?: AlignDirection }): AlignDirection => {
  const isEvenIndex = args.index % 2 === 0;

  if (args.align !== "alternate") return args.align;

  // If reached here, Align direction is alternate
  if (args.alignStart === "before") return isEvenIndex ? "before" : "after";

  // alignStart === "after"
  return isEvenIndex ? "after" : "before";
};

/**
 * Merges second separator on with the first.
 *
 * @param separator1 {Separator}
 * @param separator2 {Separator}
 * @returns {Separator}
 */
export const getMergedSeparator = (separator1: Separator = {}, separator2: Separator = {}): Separator => {
  return Object.assign(
    {},
    separator1,
    separator2,
    {
      gaps: Object.assign({}, separator1.gaps || {}, separator2.gaps || {}),
      dot: Object.assign(
        {},
        separator1.dot || {},
        separator2.dot || {},
        {
          style: Object.assign({}, separator1.dot?.style || {}, separator2.dot?.style || {}),
        }
      ),
      connector: Object.assign({}, separator1.connector || {}, separator2.connector || {}),
    },
  );
};
