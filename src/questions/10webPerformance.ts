import type { IQuestion } from "../types/IQuestion";

export const questions10: Omit<IQuestion, "id">[] = [
  {
    title: "Critical Rendering Path",
    answer: `
1. DOM. Browser parses HTML. Creating DOM.

2. CSSOM. Browser parses CSS. Creating CSSOM.

3. JavaScript. Browser parses and executes javascript. Parses script tags.

4. Render Tree. Browser combines DOM and CSSOM. Creates a render tree.

5. Reflow. Browser sets sizes and positions of the elements.

6. Repaint. Browser paints the screen pixels according to UI.
    `,
    tag: "10 Web Performance",
    list: true,
  },
  {
    title: "requestAnimationFrame",
    answer: `
requestAnimationFrame is a function which takes a callback and the callback is called before browser does the repaint operation.
If you create an infinite loop which calls requestAnimationFrame with a callback it makes sure that your callback is being called on each frame update

The initial standard of refresh rate in browsers is 60fps.
    `,
    tag: "10 Web Performance",
  },
  {
    title: "Performant Animations",
    answer: `
Using css transform and opacity properties are more performant than heavy computed properties like height, width, left, position, box shadow and others.
Because changing transform wouldn’t call reflow and repaint operations. But changing the colors will call only repaint operation.
    `,
    tag: "10 Web Performance",
  },
  {
    title: "Layout thrashing",
    answer: `
Layout thrashing - is a situation when javascript code forces the browser to do unnecessary reflow and repaint.

It happens when code tries to read or write elements sizes or positions. For example: getBoundingClientRect(), offsetHeight…

To avoid this avoid mixed reads and write operations, try to batch them`,
    tag: "10 Web Performance",
  },
  {
    title: "How to improve Critical Rendering Path",
    answer: `
Optimize critical resources(HTML, CSS, JS)

Avoid render-blocking JS(use async/defer)

Optimize resources(images, scripts, CSS and fonts)`,
    tag: "10 Web Performance",
  },
  {
    title: "Resource preloading and prefetching",
    answer: `
We can load resources for current page or for the next navigating page in advance using link tag.

Link tag takes preload(load for current page) and prefetch(load for the next page) attributes.

But both parameters work when browser is in idle and finished the rendering process.`,
    code: `
<link rel=“preload” as=“image” href=“image.png” type="" crossorigin=“anonymous” />
`,
    tag: "10 Web Performance",
  },
  {
    title: "Script async and defer attributes",
    answer: `Async and defer attributes make the script to load in parallel with parsing html.

Async - executes the script immediately when loaded

Defer - executes the script when html parsing is finished`,
    tag: "10 Web Performance",
  },
  {
    title: "fetchPriority attribute",
    answer: `fetchPriority attribute sets the priority of loading external resource applies to img, script and link tags, takes ‘high’, ‘low’ and ‘auto’ values.`,
    tag: "10 Web Performance",
  },
  {
    title: "RAIL Model",
    answer: `
    RAIL model is a web performance testing framework by Google.

Response - Handle user inputs within 100 milliseconds

Animation - Animations after user input should be 60fps

Idle - Use idle time for background operations

Load - loading time of the app should be less than 5 seconds
    `,
    tag: "10 Web Performance",
  },
  {
    title: "requestIdleCallback",
    answer: `
    requestIdleCallback - is a function which queues a callback and executes during browser idle time. It’s a macro task in event loop stack.
    `,
    tag: "10 Web Performance",
  },
  {
    title: "Core Web Vitals",
    answer: `
Largest Contentful Paint

First Input Delay

Cumulative Layout Shift
    `,
    tag: "10 Web Performance",
  },
  {
    title: "Web Performance Analysis steps",
    answer: `
Use network throttling and CPU throttling in Chrome DevTools.

Record page loading and analyze reports

Use lighthouse, page speed insights or dev tools
    `,
    tag: "10 Web Performance",
  },
  {
    title: "HTTP2, HTTP3",
    answer: `
HTTP2 and HTTP3 are newer versions of HTTP protocol which makes data transfer in more optimized way.
    `,
    tag: "10 Web Performance",
  },
  {
    title: "Service Workers",
    answer: `
Service workers are scripts which run in parallel on a different thread.

The difference between web worker is that Service Worker has more capabilities.

Web worker runs only in a separate script or tab.

Service Worker acts as a proxy between network and browser, works independently has access across all windows, tabs and scripts within a specific origin.

Supports push notifications and can mock and intercept network requests.

Works only with https or on localhost.
    `,
    tag: "10 Web Performance",
  },
  {
    title: "CPU bound operations optimization",
    answer: `
1. Use web workers for heavy operations

2. Use requestIdleCallback to make operation asynchronous and run in the background

3. Optimize DOM operations, use throttling, paginations and virtualized lists

4. Use memoization (caching), avoid thrashing and optimize javascript code.
    `,
    tag: "10 Web Performance",
    list: true,
  },
  {
    title: "How to handle memory leaks",
    answer: `
Use chrome dev tools memory tab to check heap memory size and detect memory leaks.
    `,
    tag: "10 Web Performance",
  },
];
