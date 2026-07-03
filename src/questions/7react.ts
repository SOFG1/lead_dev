import type { IQuestion } from "../types/IQuestion";

export const questions7: Omit<IQuestion, "id">[] = [
  {
    title: "React fiber",
    answer: `
React Fiber is React's core reconciliation algorithm, introduced in React 16 to enable incremental rendering and improve performance
    `,
    tag: "7 Frameworks(React)",
  },
  {
    title: "SPA and MPA Pros and cons",
    answer: `
SPA takes more time for the first load, but is more faster on navigating between pages after first load, because it loads all of the content of the pages and dynamically changes the content depending on pages.

MPA takes less time on loading the page but takes more time navigating between pages.

MPA has better SEO and for content heavy pages. And SPA is better for apps like admin panels etc.

SPA has bad SEO because it represents an empty html file
    `,
    tag: "7 Frameworks(React)",
    list: true,
  },
  {
    title: "SSR, CSR, SSG vs ISR",
    answer: `
SSR - Server sends requested page with HTML content. Faster initial page loading and slow navigation between pages. Perfect choice for SEO optimization.

CSR(SPA) - Server sends empty HTML and JavaScript bundle which generates content. Has a bit slow initial loading but very fast navigation between pages. Has lower SEO optimization.

SSG - Generates full HTML page with its static content during build time and sends it on every request. Has better SEO and fast loading time of initial page. But the content of the page is static without dynamic parts.

ISR - Concept of ISR which rebuilds the page if some dynamic parts changed.   `,
    tag: "7 Frameworks(React)",
  },
  {
    title: "Microfrontends",
    answer: `
Microfrontends is an approach of merging multiple independent frontends into 1 project.
Pros: Independent team autonomy, fast deploying time and scalability for large applications.
Cons: It’s hard to maintain, hard to handle shared parts and has some performance overhead. `,
    tag: "7 Frameworks(React)",
    list: true,
  },
  {
    title: "Monorepo",
    answer: `
Monorepo is an approach when we store multiple projects(microfrontends), the opposite approach is polyrepo
Pros: Simplifies code/libraries sharing across projects, eases team collaboration.
Cons: Makes hard to manage CI`,
    tag: "7 Frameworks(React)",
    list: true,
  },
  {
    title: "PWA",
    answer: `
PWA - is an application of creating web applications into native applications(macOS, windows) with additional functionality

PWA additional features:

Offline functionality
Hardware access
Push notifications
Installation into user device`,
    tag: "7 Frameworks(React)",
    list: true,
  },
  {
    title: "CSS Methodologies",
    answer: `BEM, OOCSS, SMACSS, Atomic CSS, CSS-inJS, CSS Modules`,
    tag: "7 Frameworks(React)",
    list: true,
  },
  {
    title: "CSS BEM",
    answer: `BEM - is a CSS naming methodology which divides elements to Blocks, elements and add modifiers to them if necessary
Eg: .block__element--modifier `,
    tag: "7 Frameworks(React)",
  },
  {
    title: "Object Oriented CSS (OOCSS)",
    answer: `OOCSS - is a CSS methodology when we treat HTML elements as objects`,
    tag: "7 Frameworks(React)",
  },
  {
    title: "Atomic CSS",
    answer: `CSS methodology when a class refers to not an element but to a visual property.
TailwindCSS refers to Atomic CSS methodology.`,
    tag: "7 Frameworks(React)",
  },
  {
    title: "CSS-in-JS",
    answer: `CSS-in-JS is an approach when we write styles directly in the JS which is generated into unique classnames
This is also useful for dynamic variables because they will be automatically converted into CSS.
StyledComponents is CSS-in-JS methodology.`,
    tag: "7 Frameworks(React)",
  },
  {
    title: "CSS Modules",
    answer: `CSS modules is an approach when we write styles in separate module files where classnames are scoped and will be converted into unique names and won’t affect the global scope`,
    tag: "7 Frameworks(React)",
  },
  {
    title: "Choosing UI Library vs Implementing your",
    answer: `It depends on business requirements how to choose UI library. If you need fast development process ui should choose a UI library, but if you have time for development and your UI is very specific you had better implement the UI kit on your own.`,
    tag: "7 Frameworks(React)",
  },
  {
    title: "Choosing Front end Framework for a new application",
    answer: `
    Choosing framework depends on many aspects of the project and team.

You should pay attention to project type whether it’s a startup MVP or an enterprise project.

You should pay attention to experience of your team. And learning curve of the framework.

1. Framework aspects to check:
2. Popularity, community, GitHub Stars etc.
3. Documentation, maintenance and new versions releases
4. Learning curve(how easy to learn)
5. Features out of the box
6. Scalability and backward compatibility
7. Native/Mobile Apps support
8. Bundle size, optimization friendliness and SSR
9. Project structure flexibility and and ease of integration(microfrontends)
    `,
    tag: "7 Frameworks(React)",
    list: true,
  },
  {
    title: "React benefits and weak sides",
    answer: `React benefits:
1. Performance. Virtual DOM(makes DOM manipulations unnecessary)

2. Flexible. User have choice for libraries for state management , routing and other functionality.

3. Easy to learn

4. Large community

5. SEO friendliness



React weak sides:
1. Doesn’t have a good modern documentation

2. Fast development pace. Frequent releases

3. NOT a Framework just a library. React only provides UI Libraryother functionality like state management requires additional libraries
`,
    tag: "7 Frameworks(React)",
    list: true,
  },
  {
    title: "React hooks - benefits, what problem solve",
    answer: `Hooks provide more convenient and reusable code.

Solves the problem of wrapping components into HOCs to provide external data.`,
    tag: "7 Frameworks(React)",
  },
  {
    title: "React 16 - 18 new features",
    answer: `
    1. Fiber architecture - dividing render process into small more performant processes(fibers)

2. Concurrent rendering mechanism which allows to run multiple tasks simultaneously, to prevent render blocking

3. Batching - automatic grouping multiple state updates into single pre-render

4. Transitions - distinguishing between urgent and non-urgent updates. (useTransitions and useDefferedValue hooks)`,
    tag: "7 Frameworks(React)",
    list: true,
  },
  {
    title: "HOC common use cases in React App",
    answer: `HOC is a function which adds some logic to component like conditional rendering, auth checks, etc.`,
    tag: "7 Frameworks(React)",
  },

  {
    title: "Does react meet functional programming concept ?",
    answer: `Yes React aligns with functional programming concepts like Pure Functions and Immutability.

But in some cases for example state management react uses some OOP concepts`,
    tag: "7 Frameworks(React)",
  },
  {
    title: "React Compiler",
    answer: `React compiler is a feature which adds automatic memoization for components, functions and data.(memo, useMemo, useCallback)

    This feature is available in React 19.`,
    tag: "7 Frameworks(React)",
  },
  {
    title: "How to improve React Application performance ?",
    answer: `Use:
1. react compiler or memoization hooks

2. production build

3. code-splitting

4. lazy-loading
5. fragment for grouped elements instead of html tags
6. lists virtualization`,
    tag: "7 Frameworks(React)",
    list: true,
  },
  {
    title: "How to handle errors in React Application",
    answer: `
    Use:
1. Error boundaries for components

2. Use try/catch for javascript code

3. Implement global error handling`,
    tag: "7 Frameworks(React)",
  },
  {
    title: "React Fiber, Concurrent Rendering (for non technical person)",
    answer: `React fiber divides render processes(fibers) for urgent and non urgent and runs urgent at first`,
    tag: "7 Frameworks(React)",
  },
  {
    title: "React Reconciliation process",
    answer: `Reconciliation process is when react update UI according to the state.

UI update happens in the most optimized way comparing 2 versions(old and new) of DOM.`,
    tag: "7 Frameworks(React)",
  },
  {
    title: "Redux Pros & Cons",
    answer: `Benefits: Centralized state, Predictability, DevTools, Testability and EcoSystem

Drawbacks: Boilerplate code, learning curve, large package size.`,
    tag: "7 Frameworks(React)",
  },
  {
    title: "Testing strategy",
    answer: `
    Testing pyramid(unit > integration > e2e)

Use ESLint, TypeScript and SonarCube for static code analysis.
Unit tests
Integration tests
E2e tsts
`,
    tag: "7 Frameworks(React)",
  },
  {
    title: "When to use SSR",
    answer: `Improve page loading speed
Improve Social Media compatibility
Improve Search Engine visibility `,
    tag: "7 Frameworks(React)",
  },
  {
    title: "How to avoid component naming duplication ?",
    answer: `Use feature/module based naming. eg: SubstitutionPage, SubstitutionModal, SubstitutionItem…`,
    tag: "7 Frameworks(React)",
  },
  {
    title: "How to handle theming in React app ?",
    answer: `Create object with available styles: theme.js, darkTheme, lightTheme…

Use variables for values like: textPrimary, backgroundSecondary, buttonBgPrimary…

Integrate with styles SCSS, TailwindCSS or StyledComponents`,
    tag: "7 Frameworks(React)",
  },
];
