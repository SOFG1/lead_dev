import type { IQuestion } from "../types/IQuestion";

export const questions1: Omit<IQuestion, "id">[] = [
  {
    title: "HTML inputs",
    answer: "hidden, image, color, month, week, search…",
    tag: "1 HTML, CSS",
  },
  {
    title: "CSS Float",
    answer: "allows streamlined text",
    tag: "1 HTML, CSS",
  },
  {
    title: "Polyfils",
    answer:
      "Code that implements features on browsers that aren’t supported natively. Included in babel.",
    tag: "1 HTML, CSS",
  },
  {
    title: "Cross browser compatibility",
    answer:
      "use testing platforms, reset.css, vendor prefixes, auto prefixers, polyfils",
    tag: "1 HTML, CSS",
    list: true,
  },
  {
    title: "CSS custom properties",
    answer: "variables, @property, var(—foo)",
    tag: "1 HTML, CSS",
  },
  {
    title: "CSS functions",
    answer: "min, max, clamp, calc, linear-gradient…",
    tag: "1 HTML, CSS",
  },
  {
    title: "CSS performance",
    answer: "simplify selectors, use content-visibility, avoid @import in css",
    tag: "1 HTML, CSS",
  },
  {
    title: "CSS properties which affect performance",
    answer: "size, position, margins, paddings, shadows",
    tag: "1 HTML, CSS",
    list: true,
  },
  {
    title: "Font loading strategies.",
    answer:
      "Flash Of Invisible Text - font-display-block, Flash Of Unstyled Text font-display-swap, Flash Of Faux Text)",
    tag: "1 HTML, CSS",
    list: true,
  },
  {
    title: "Aspect-ratio",
    answer: "defines aspect ratio of element aspect-ratio: 1/2;",
    tag: "1 HTML, CSS",
  },
  {
    title: "Content-visibility",
    answer:
      "Sets content visibility for CSS, used for optimizations. visible, hidden, auto",
    tag: "1 HTML, CSS",
  },
  {
    title: "Contain-intrinsic-size",
    answer:
      "“1000px”, “200px 400px”, “auto 500px” (placeholder size when content-visibility is auto)",
    tag: "1 HTML, CSS",
  },
];
