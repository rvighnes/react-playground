import { PlacementWithAlternate, Placement } from "../types";

/**
 * Gets the individual event's **net** placement.
 *
 * @param index {number}
 * @returns {Placement}
 */
export const getEventPlacement = (args: { index: number, placement: PlacementWithAlternate, placementStart: Placement }): Placement => {
  const isEvenIndex = args.index % 2 === 0;

  // Placement is either "before" or "after"
  if (args.placement !== "alternate") return args.placement;

  // Placement is "alternate"
  if (args.placementStart === "before") return isEvenIndex ? "before" : "after";

  // Placement is "alternate"
  // alignStart === "after"
  return isEvenIndex ? "after" : "before";
};
