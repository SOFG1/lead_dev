import type { IQuestion } from '../types/IQuestion';

export const questions13: Omit<IQuestion, 'id'>[] = [
  {
    title: 'Isomorphic / Universal rendering',
    answer: `
Isomorphic rendering is JavaScript code(in NextJS or Nuxt) which is able to run on both client and server side.
It’s very efficient and returns already rendered HTML to the UI.`,
    tag: '13 Rendering strategies',
  },
  {
    title: 'Render as you fetch',
    answer: `
Render as you fetch is a data fetching approach when you fetch data for a component in parallel with loading the component.
This is the vice versa approach of the traditional fetch-on-render approach when you fetch data and show spinners after rendering the component.`,
    tag: '13 Rendering strategies',
  },
  {
    title: 'Streaming SSR (Streaming Server-Side Rendering)',
    answer: `
Streaming SSR is an advanced SSR approach when server sends HTML to the browser partially by chunks and doesn’t wait the whole page to be loaded.`,
    tag: '13 Rendering strategies',
  },
  {
    title: 'CDNs',
    answer: `
Content Delivery Networks are servers which duplicate our website data on different places in the world to make user load the website from the nearest one to save time.`,
    tag: '13 Rendering strategies',
  },
];
