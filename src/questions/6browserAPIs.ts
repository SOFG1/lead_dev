import type { IQuestion } from "../types/IQuestion";

export const questions6: Omit<IQuestion, "id">[] = [
  {
    title: "Web Workers",
    answer: `Web workers are JavaScript threads which run in parallel with the main thread.`,
    code: `//Dedicated web worker example
const webWorker = new Worker(“worker.js”)
webWorker.postMessage(messageData)

webWorker.onmessage = (e) => console.log(e)
    `,
    tag: "6 Browser APIs",
  },
  {
    title: "Shared Web Worker",
    answer: `The difference between dedicated and shared web workers is that shared web workers can be accessible from multiple scripts tabs and Iframes.`,
    code: `
    const webWorker = new SharedWorker(“worker.js”)
        `,
    tag: "6 Browser APIs",
  },
  {
    title: "Inline Web Worker",
    answer: `Inline web worker is a technique of creating a web worker in a single JS file`,
    code: `const blob = new Blob([workerCode], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
return new Worker(url);`,
    tag: "6 Browser APIs",
  },
  {
    title: "Importing scripts to Web Workers",
    code: `importScripts(‘script1.js', 'library.js')`,
    tag: "6 Browser APIs",
  },
  {
    title: "Web Worker termination",
    code: `//Terminate a web worker
const worker = new Worker(“worker.js”)
worker.terminate()

//Terminate inside worker.js
self.close()`,
    tag: "6 Browser APIs",
  },
  {
    title: "Web Worker error handling",
    code: `const myWorker = new Worker('worker.js');

myWorker.onerror = (event) => { … error handling};`,
    tag: "6 Browser APIs",
  },
  {
    title: "Web Worker main thread communication",
    answer: `
Use postMessage and on message functions inside web worker to communicate with the main thread
And use worker.onmessage and worker.postMessage inside main thread to communicate with the worker
    `,
    tag: "6 Browser APIs",
  },
  {
    title: "Get User Media (camera and microphone input)",
    answer: `
Use navigator.mediaDevices.getUserMedia() method to get access to user camera and microphone data
Use canvas element for taking screenshots and css for applying effects on streaming <video> element or <canvas> for screenshots
    `,
    code: `
const options = {
  audio: true,
  video: { width: 1280, height: 720 }
};

navigator.mediaDevices.getUserMedia(options)
  .then((stream) => {
    // Use the stream, e.g., display it in a <video> element
    const videoElement = document.querySelector('video');
    videoElement.srcObject = stream;
 })
 .catch((err) => {
    // Handle errors (e.g., NotAllowedError, NotFoundError, OverconstrainedError)
    console.error("An error occurred", err);
 });
    `,
    tag: "6 Browser APIs",
  },
  {
    title: "Post message",
    answer: `
postMessage() - is a method for sending messages to an iframe and vice versa.
Set allowed origins for security reasons
    `,
    code: `
//Send message to iframe
const iframe = document.querySelector("iframe”);
iframe.contentWindow.postMessage("123123123", “*”); // Add message and allowed origin for security

//Send message to parent window
window.parent.postMessage("test", "*")

//Receive message from iframe or from parent
window.addEventListener("message", (event) => {
    console.log("Message received from iframe:", event.data);
  },
);
    `,
    tag: "6 Browser APIs",
  },
  {
    title: "FileSystem API",
    answer: `
FileSystem API is an API for accessing files on user’s device from browser
    `,
    tag: "6 Browser APIs",
  },
  {
    title: "Prompt user to upload a file (FileSystem API)",
    answer: `
Use window.showOpenFilePicker() or <input type="file”> to prompt the user to upload a file
    `,
    code: `
const [fileHandle] = await window.showOpenFilePicker();
const file = await fileHandle.getFile()`,
    tag: "6 Browser APIs",
  },
  {
    title: "Prompt user to open a directory (FileSystem API)",
    answer: `Use window.showDirectoryPicker()

PS - this works only in https context and not in all browsers

This will return an object with: keys(), values(), entries() and other methods to work with the content of selected directory`,
    tag: "6 Browser APIs",
  },
  {
    title: "Editing text files (FileSystem API)",
    answer: `
You can edit files using createWritable() method
    `,
    code: `
[fileHandle] = await window.showOpenFilePicker();
const file = await fileHandle.getFile();
const stream = await fileHandle.createWritable()
await stream.write(“New content of the file”)
await stream.close()
    `,
    tag: "6 Browser APIs",
  },
  {
    title: "Save edited file as a new file (FileSystem API)",
    code: `
const fileHandle = await window.showSaveFilePicker()
const stream = await fileHandle.createWritable();
await stream.write(“Content of the file”);
await stream.close();
    `,
    tag: "6 Browser APIs",
  },
  {
    title: "Save edited file as a new file (FileSystem API)",
    code: `
const fileHandle = await window.showSaveFilePicker()
const stream = await fileHandle.createWritable();
await stream.write(“Content of the file”);
await stream.close();
    `,
    tag: "6 Browser APIs",
  },
  {
    title: "File Reader API",
    answer: `
File Reader API is a Class(Browser API) for reading different types of files.

Methods:
fr.readAsDataURL()
fr.readAsText()
fr.readAsArrayBuffer()
fr.readAsBinaryString() //Deprecated

States:
Empty
Loading
Done

Events:
loadstart
progress
load
abort
error
loadend
    `,
    tag: "6 Browser APIs",
    list: true,
  },
  {
    title: "Parse a CSV with FileReader API",
    code: `
const fr = new FileReader();
fr.readAsText(fileInput.files[0]); //Read a CSV file

fr.addEventListener("load", () => {
  const csv = fr.result;
  const lines = csv.split("\n")
  lines.forEach((line) => { //do something… })
});
    `,
    tag: "6 Browser APIs",
  },
  {
    title: "Parse img file with FileReaderAPI",
    answer: `PS - We can add effects drawing that image on a canvas`,
    code: `
const fr = new FileReader();
fr.readAsDataURL(fileInput.files[0]);

fr.addEventListener("load", () => {
  const url = fr.result;
  console.log(url)
});
    `,
    tag: "6 Browser APIs",
  },
  {
    title: "Core Web Vitals",
    answer: `
1. Largest contentful paint
2. First input delay
3. Cumulative layout shift

Use testing tools like lighthouse, chrome profiler, react profiler and web vitals extension
    `,
    tag: "6 Browser APIs",
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

9. Use fetchPriority, async/defer and rel="preload" tags

Use testing tools like lighthouse, chrome profiler, react profiler and web vitals extension
    `,
    tag: "6 Browser APIs",
    list: true,
  },
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
    tag: "6 Browser APIs",
    list: true,
  },
  {
    title: "Key AJAX Security Strategies",
    answer: `
1. Prevent CSRF requests using unique tokens for each request

2. Prevent XSS sanitizing inputs, eval() and dangerouslySetInnerHTML.

3. Use https for secure data transmission. Prevent Man in the middle attacks.

4. Use strong server-side validation.

5. Allow only trusted domains(CORS)

6. Avoid oversharing data, don’t return sensitive data from the API and in error messages
    `,
    tag: "6 Browser APIs",
    list: true,
  },
  {
    title: "Web Socket API",
    answer: `Web socket is a an API for bidirectional connection to the server.`,
    code: `const ws = new WebSocket("url") //Create websocket
ws.onmessage(ev => console.log(ev)) //Add message listener
ws.send("test") //Send message
    `,
    tag: "6 Browser APIs",
  },
  {
    title: "Browser Events",
    answer: `
dblclick, dragstart (and other drag events), drop, mouseover, resize, focus, blur.

Touch events are used to handle mobile/table touch events`,
    tag: "6 Browser APIs",
  },
  {
    title: "Custom events",
    answer: `You can create and dispatch custom events in the browser`,
    code: `
document.addEventListener("myEvent", (e) => console.log(e.detail));

const myEvent = new CustomEvent("myEvent", {
  detail: { username: "Alice", id: 101 },
  bubbles: true, // Allow event to propagate up the DOM
  cancelable: true, // Allow preventDefault() to work
});

dispatchEvent(myEvent);`,
    tag: "6 Browser APIs",
  },

  {
    title: "Browser modules",
    answer: `You can use native JS modules in the browser adding type="module” attribute to the script.
Doing this the script won’t pollute the global scope and can have using of ES Modules(import/export) inside it.`,
    code: `
//module1.js
const name = "123"
export {name}

//module2.js
import { name } from "./module1.js";
const name2 = name + 2;
console.log(name2)`,
    tag: "6 Browser APIs",
  },
];
