import type { IQuestion } from "../types/IQuestion";

export const questions6: Omit<IQuestion, "id">[] = [
  {
    title: "Accessibility(a11y)",
    answer: `
1. Use labels for inputs and other elements, use aria-labels for audio for screen readers.

2. Make UI accessible for people who doesn’t differ colors, provide contrast and accessible elements sizes

3. Use semantic html tags to help screen readers recognize elements

4. Use tab-index attribute to make elements properly focused with tab

4. Use es-lint plugin (eslint-plugin-jsx-a11y) for analyzing accessibility

6. Use lighthouse, chrome://accessibility and dev tools rendering tools for analyzing pages for accessibility

7. Use hidden html blocks which are not visible but contains some content and can be transcribed with audio
    `,
    tag: "6 Security, Optimization and A11y",
  },
  {
    title: "Web Security",
    answer: `
Secure front-end source code with obfuscation

XSS - Cross site scripting. Situation when hackers inject harmful code into our application
Prevent code injection from installing untrusted libraries
Protect forms and inputs in the app to prevent user to paste harmful code. Sanitize html and javascript inputs, sanitize ‘eval’ and ‘dangerouslySetInnerHTML’ inputs.


CSRF - Cross site request forgery
Add additional tokens from API when using sensitive tokens
Use httpOnly cookies to prevent cookies leaks
Enable CORS security to prevent requests to multiple domains
Avoid storing cookies in accessible places on client side code(local storage, redux etc…)


Click jacking - enabling transparent iframe on whole screen to steal data on user clicks
Avoid using Iframes whenever possible


Man in the middle - interception into client requests and replacing requested resources with scripts with harmful code
Use http protocol to prevent this
    `,
    tag: "6 Security, Optimization and A11y",
  },
  {
    title: "Web optimization",
    answer: `
1. Assets optimization. Minify images(use lightweight formats like waif, fetch priority attribute), css files, fonts and scripts

2. Code splitting. Split app bundle into chunks

3. Use CDNs for assets to upload faster

4. API requests optimization

5. Computations memoization and caching

6. Using web workers for heavy operations to run in the background

7. Remove render blocking javascript

8. Set sizes for images to prevent layout shifts

Use testing tools like lighthouse, chrome profiler, react profiler and web vitals extension
    `,
    tag: "6 Security, Optimization and A11y",
  },

  {
    title: "Core Web Vitals",
    answer: `
Largest contentful paint
First input delay
Cumulative layout shift

Use testing tools like lighthouse, chrome profiler, react profiler and web vitals extension
    `,
    tag: "6 Security, Optimization and A11y",
  },
];
