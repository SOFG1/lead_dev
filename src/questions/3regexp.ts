import type { IQuestion } from '../types/IQuestion';

export const questions3: Omit<IQuestion, "id">[] = [
  {
    title: "First ‘test’ match in the text",
    answer: `/test/`,
    tag: "3 RegExp",
  },
  {
    title: "All ’test’ matches in the text",
    answer: `/test/g`,
    tag: "3 RegExp",
  },
  {
    title: "First case insensitive ‘test’ match",
    answer: `/test/i`,
    tag: "3 RegExp",
  },
  {
    title: "all case insensitive ‘test’ matches",
    answer: `/test/gi`,
    tag: "3 RegExp",
  },
  {
    title: "| - OR operator",
    answer: `/(bob|alice) marley/ - matches ‘bob marley’, ‘alice marley’`,
    tag: "3 RegExp",
  },
  {
    title: "? - optional operator",
    answer: `
    /c?olor/ - matches ‘color’, ‘olor’
    /color?/ - matches ‘color’, ‘colo’
    `,
    tag: "3 RegExp",
  },
  {
    title: "() - wraps part (grouping)",
    answer: `
/col(or)?/ - matches ‘color’, ‘col’
    `,
    tag: "3 RegExp",
  },
  {
    title: " - escape a special character",
    answer: `
/color\\?/ - matches ‘color?’
    `,
    tag: "3 RegExp",
  },
  {
    title: "matches all digits",
    answer: `
  \\d
    `,
    tag: "3 RegExp",
  },
  {
    title: "matches all non digits",
    answer: `
 \\D
    `,
    tag: "3 RegExp",
  },
  {
    title: "matches all non-capitalized letters",
    answer: `
 [a-z]
    `,
    tag: "3 RegExp",
  },
  {
    title: "matches all capital letters (range)",
    answer: `
 [A-Z]
    `,
    tag: "3 RegExp",
  },
  {
    title: "matches letters from a to d (range)",
    answer: `
 [a-d]
    `,
    tag: "3 RegExp",
  },
  {
    title: "matches digits from 1 to 5 (range)",
    answer: `
 [1-5]
    `,
    tag: "3 RegExp",
  },
  {
    title: "Greedy search matches ‘color, colo, color’ in 'color colo colorrr'",
    answer: `
 /color?/
    `,
    tag: "3 RegExp",
  },
  {
    title:
      "Greedy search matches ‘color, colo, colorrr’ in 'color colo colorrr'",
    answer: `
 /color*/
    `,
    tag: "3 RegExp",
  },
  {
    title: "Greedy search matches ‘color, colorrr’ in 'color colo colorrr'",
    answer: `
 /color+/
    `,
    tag: "3 RegExp",
  },
  {
    title: "Greedy search matches ‘color, colorrr’ in 'color colo colorrr'",
    answer: `
 /color+/
    `,
    tag: "3 RegExp",
  },

];
