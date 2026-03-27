import type { IQuestion } from '../types/IQuestion';

export const questions8: Omit<IQuestion, "id">[] = [
  {
    title: "Web Workers",
    answer: `Web workers are JavaScript threads which run in parallel with the main thread.`,
    code: `//Dedicated web worker example
const webWorker = new Worker(“worker.js”)
webWorker.postMessage(messageData)

webWorker.onmessage = (e) => console.log(e)
    `,
    tag: "8 Browser APIs",
  },
  {
    title: "Shared Web Worker",
    answer: `The difference between dedicated and shared web workers is that shared web workers can be accessible from multiple scripts tabs and Iframes.`,
    code: `
    const webWorker = new SharedWorker(“worker.js”)
        `,
    tag: "8 Browser APIs",
  },
  {
    title: "Inline Web Worker",
    answer: `Inline web worker is a technique of creating a web worker in a single JS file`,
    code: `const blob = new Blob([workerCode], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
return new Worker(url);`,
    tag: "8 Browser APIs",
  },
  {
    title: "Importing scripts to Web Workers",
    code: `importScripts(‘script1.js', 'library.js')`,
    tag: "8 Browser APIs",
  },
  {
    title: "Web Worker termination",
    code: `//Terminate a web worker
const worker = new Worker(“worker.js”)
worker.terminate()

//Terminate inside worker.js
self.close()`,
    tag: "8 Browser APIs",
  },
  {
    title: "Web Worker error handling",
    code: `const myWorker = new Worker('worker.js');

myWorker.onerror = (event) => { … error handling};`,
    tag: "8 Browser APIs",
  },
];
