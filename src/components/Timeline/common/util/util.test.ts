import { getEventAlignDirection, getMergedSeparator } from "./util";

describe('Timeline > "getEventAlignDirection" function tests', () => {
  it('should return "before" if align is "before"', () => {
    const align = getEventAlignDirection({
      index: 2,   // Doesn't matter
      align: 'before',
      alignStart: 'after',  // Doesn't matter
    });

    expect(align).toBe('before');
  });

  it('should return "after" if align is "after"', () => {
    const align = getEventAlignDirection({
      index: 2,   // Doesn't matter
      align: 'after',
      alignStart: 'after',  // Doesn't matter
    });

    expect(align).toBe('after');
  });

  describe('align is "alternate"', () => {
    describe('alignStart is "before"', () => {
      it('should return "before" if "index" is even', () => {
        const align = getEventAlignDirection({
          index: 42,
          align: "alternate",
          alignStart: "before",
        });

        expect(align).toBe("before");
      });

      it('should return "after" if "index" is odd', () => {
        const align = getEventAlignDirection({
          index: 7,
          align: "alternate",
          alignStart: "before",
        });

        expect(align).toBe("after");
      });
    });

    describe('alignStart is "after"', () => {
      it('should return "after" if "index" is even', () => {
        const align = getEventAlignDirection({
          index: 42,
          align: "alternate",
          alignStart: "after",
        });

        expect(align).toBe("after");
      });

      it('should return "before" if "index" is odd', () => {
        const align = getEventAlignDirection({
          index: 7,
          align: "alternate",
          alignStart: "after",
        });

        expect(align).toBe("before");
      });
    });
  });
});

describe('Timeline > "getMergedSeparator" function tests', () => {
  describe('"gaps" property', () => {
    it('should over-write the "gaps" values if passed in second separator', () => {
      const separator = getMergedSeparator(
        {gaps: { content: 5 }},
        {gaps: { content: 6 }},
      );

      expect(separator.gaps.content).toBe(6);
    });

    it('should return the original "gaps" values if not passed in second separator', () => {
      const separator = getMergedSeparator(
        {gaps: { content: 5 }},
        undefined,
      );

      expect(separator.gaps.content).toBe(5);
    });

    it('should merge the "gaps" values in both separators', () => {
      const separator = getMergedSeparator(
        {gaps: { betweenEvents: 20 }},
        {gaps: { dotAndConnector: 10 }},
      );

      expect(separator.gaps.betweenEvents).toBe(20);
      expect(separator.gaps.dotAndConnector).toBe(10);
    });
  });

  describe('"connector" property', () => {
    it('should over-write the "connector" values if passed in second separator', () => {
      const separator = getMergedSeparator(
        {connector: { length: 20 }},
        {connector: { length: 30 }},
      );

      expect(separator.connector.length).toBe(30);
    });

    it('should return the original "connector" values if not passed in second separator', () => {
      const separator = getMergedSeparator(
        {connector: { length: 20 }},
        undefined,
      );

      expect(separator.connector.length).toBe(20);
    });

    it('should merge the "connector" values in both separators', () => {
      const separator = getMergedSeparator(
        {connector: { show: false }},
        {connector: { direction: "horizontal" }},
      );

      expect(separator.connector.show).toBe(false);
      expect(separator.connector.direction).toBe("horizontal");
    });
  });

  describe('"dot" property', () => {
    it('should over-write the "dot" values if passed in second separator', () => {
      const separator = getMergedSeparator(
        {dot: { children: 'RV' }},
        {dot: { children: 'DVR' }},
      );

      expect(separator.dot.children).toBe('DVR');
    });

    it('should return the original "dot" values if not passed in second separator', () => {
      const separator = getMergedSeparator(
        {dot: { children: 'DVR' }},
        undefined,
      );

      expect(separator.dot.children).toBe('DVR');
    });

    it('should merge the "dot" values in both separators', () => {
      const separator = getMergedSeparator(
        {dot: { children: 'DVR' }},
        {dot: { testId: "dot" }},
      );

      expect(separator.dot.children).toBe('DVR');
      expect(separator.dot.testId).toBe("dot");
    });

    it('should merge the "style" values in both separators', () => {
      const separator = getMergedSeparator(
        {dot: { style: { width: 20, height: 30 } }},
        {dot: { style: { height: 40, backgroundColor: 'red' } }},
      );

      expect(separator.dot.style.width).toBe(20);
      expect(separator.dot.style.height).toBe(40);
      expect(separator.dot.style.backgroundColor).toBe('red');
    });
  });
});
