import { getEventPlacement } from "./util";

describe('Timeline > "getEventPlacement" function tests', () => {
  it('should return "before" if "placement" is "before"', () => {
    const placement = getEventPlacement({
      index: 2,   // Doesn't matter
      placement: 'before',
      placementStart: 'after',  // Doesn't matter
    });

    expect(placement).toBe('before');
  });

  it('should return "after" if "placement" is "after"', () => {
    const placement = getEventPlacement({
      index: 2,   // Doesn't matter
      placement: 'after',
      placementStart: 'after',  // Doesn't matter
    });

    expect(placement).toBe('after');
  });

  describe('placement is "alternate"', () => {
    describe('placementStart is "before"', () => {
      it('should return "before" if "index" is even', () => {
        const placement = getEventPlacement({
          index: 42,
          placement: "alternate",
          placementStart: "before",
        });

        expect(placement).toBe("before");
      });

      it('should return "after" if "index" is odd', () => {
        const placement = getEventPlacement({
          index: 7,
          placement: "alternate",
          placementStart: "before",
        });

        expect(placement).toBe("after");
      });
    });

    describe('placementStart is "after"', () => {
      it('should return "after" if "index" is even', () => {
        const placement = getEventPlacement({
          index: 42,
          placement: "alternate",
          placementStart: "after",
        });

        expect(placement).toBe("after");
      });

      it('should return "before" if "index" is odd', () => {
        const placement = getEventPlacement({
          index: 7,
          placement: "alternate",
          placementStart: "after",
        });

        expect(placement).toBe("before");
      });
    });
  });
});
