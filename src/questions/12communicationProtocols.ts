import type { IQuestion } from "../types/IQuestion";

export const questions12: Omit<IQuestion, "id">[] = [
  {
    title: "HTTP2 and HTTP3 Advantages",
    answer: `
HTTP2 and HTTP3 improve web communication requests optimization and has a lot of advantages comparing with HTTP`,
    tag: "12 Web Communication Protocols",
  },
  {
    title: "WebSockets vs Polling",
    answer: `
WebSocket is better choice than long polling because:
WebSocket has low latency requests sent immediately.
WebSockets has low server loading which is more optimized approach`,
    tag: "12 Web Communication Protocols",
  },
  {
    title: "OPTIONS (Preflight) request",
    answer: `
Preflight requests are made to check whether this origin is allowed by CORS to sent request to that origin`,
    tag: "12 Web Communication Protocols",
  },
  {
    title: "HTTP vs GraphQL Comparison",
    answer: `
Over-fetching and under-fetching. Sometimes we get extra data or make multiple requests to get specific amount of keys. In graphQL it’s configurable.
Step up complexity. HTTP is supported out of the box has minimal learning curve. GraphQL requires knowledge and schemas configuration.
GraphQL uses single endpoint and includes returned data in the schema. HTTP uses only multiple specific endpoints specified by API.
HTTP supports built in caching`,
    tag: "12 Web Communication Protocols",
  },
  {
    title: "HTTPS Purpose",
    answer: `
HTTPS primary purpose is to ensure secure connection. It makes this by encrypting data before sending.`,
    tag: "12 Web Communication Protocols",
  },
];
