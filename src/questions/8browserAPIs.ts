import type { IQuestion } from "../types/IQuestion";

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
  {
    title: "Web Worker main thread communication",
    answer: `
Use postMessage and on message functions inside web worker to communicate with the main thread
And use worker.onmessage and worker.postMessage inside main thread to communicate with the worker
    `,
    tag: "8 Browser APIs",
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
    tag: "8 Browser APIs",
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
    tag: "8 Browser APIs",
  },
  {
    title: "FileSystem API",
    answer: `
FileSystem API is an API for accessing files on user’s device from browser
    `,
    tag: "8 Browser APIs",
  },
  {
    title: "Prompt user to upload a file (FileSystem API)",
    answer: `
Use window.showOpenFilePicker() or <input type="file”> to prompt the user to upload a file
    `,
    code: `
const [fileHandle] = await window.showOpenFilePicker();
const file = await fileHandle.getFile()`,
    tag: "8 Browser APIs",
  },
  {
    title: "Prompt user to open a directory (FileSystem API)",
    answer: `Use window.showDirectoryPicker()

PS - this works only in https context and not in all browsers

This will return an object with: keys(), values(), entries() and other methods to work with the content of selected directory`,
    tag: "8 Browser APIs",
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
    tag: "8 Browser APIs",
  },
  {
    title: "Save edited file as a new file (FileSystem API)",
    code: `
const fileHandle = await window.showSaveFilePicker()
const stream = await fileHandle.createWritable();
await stream.write(“Content of the file”);
await stream.close();
    `,
    tag: "8 Browser APIs",
  },
  {
    title: "Save edited file as a new file (FileSystem API)",
    code: `
const fileHandle = await window.showSaveFilePicker()
const stream = await fileHandle.createWritable();
await stream.write(“Content of the file”);
await stream.close();
    `,
    tag: "8 Browser APIs",
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
    tag: "8 Browser APIs",
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
    tag: "8 Browser APIs",
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
    tag: "8 Browser APIs",
  },
];
