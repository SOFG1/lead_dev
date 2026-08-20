import type { IQuestion } from "../types/IQuestion";

export const questions11: Omit<IQuestion, "id">[] = [
  {
    title: "Man in the Middle",
    answer: `
Man in the middle attacks are situations when someone intercepts a peer to peer connection and steals sensitive data or replaces data with harmful data.
    `,
    tag: "11 Security",
  },
  {
    title: "OWASP (Open Worldwide Application Security Project) Top 10",
    answer: `
1. Broken Access Control
2. Security Misconfiguration
3. Software Supply Chain Failures
4. Cryptographic Failures
5. Injection
6. Insecure Design
7. Authentication Failures
8. Software or Data Integrity Failures
9. Security Logging and Alerting Failures
10. Mishandling of Exceptional Conditions
    `,
    tag: "11 Security",
    list: true,
  },
  {
    title: "Broken Access Control",
    answer: `
Broken Access Control is a security mistake when application fails to restrict what authenticate users allowed to do.
    `,
    tag: "11 Security",
  },
  {
    title: "Security Misconfiguration",
    answer: `
Security Misconfiguration - is a situation when security settings in the app are incomplete.`,
    tag: "11 Security",
  },
  {
    title: "Software Supply Chain Failures",
    answer: `
Software Supply Chain Failures is a situations when your application uses unsafe, unverified or compromised third party components`,
    tag: "11 Security",
  },
  {
    title: "Cryptographic Failures",
    answer: `
Cryptographic Failures - are situations when there is Insecure Data Storage(plain text or weak hashing, storing in the source code or in public repos), Insecure Data Transit (HTTP protocol or plain text) `,
    tag: "11 Security",
  },
  {
    title: "Injection",
    answer: `
Injection is a situation when application allows untrusted user input harmful code to a interpreter(browser, server or database)`,
    tag: "11 Security",
  },
  {
    title: "Insecure Design",
    answer: `
Insecure Design - is a security vulnerability which means mistakes are made before a single line of code is written. This means that application can be insecure even if it’s properly implemented, because of insecure design.`,
    tag: "11 Security",
  },
  {
    title: "Authentication Failures",
    answer: `Authentication failures are situations when application has weaknesses identifying user identity or has weaknesses in protecting user sessions.`,
    tag: "11 Security",
  },
  {
    title: "Software or Data Integrity Failures",
    answer: `Software or Data Integrity Failures -  are situations when software blindly trusts updates, code(packages) or data without verification and checking their authenticity.`,
    tag: "11 Security",
  },
  {
    title: "Security Logging and Alerting Failures",
    answer: `Security Logging and Alerting Failures - are situations when application fails to properly log, record and alert security incidents and hack attempts.`,
    tag: "11 Security",
  },
  {
    title: "Mishandling of Exceptional Conditions",
    answer: `Mishandling of Exceptional Conditions - are situations when application doesn’t properly handles exceptional cases and failure cases(doesn’t fail securely)`,
    tag: "11 Security",
  },
  {
    title: "CSRF",
    answer: `Cross Site Request Forgery - is a situation when you visit your trusted website, authorize and then visit hacker’s website and that website uses your authorized session in bank website to sent harmful requests.`,
    tag: "11 Security",
  },
  {
    title: "CORS",
    answer: `CORS(Cross Origin Resource Sharing) - is a security mechanism which helps to make cross origin requests and avoid CSRF attacks setting allowed origins on the frontend side.`,
    tag: "11 Security",
  },
  {
    title: "CSP",
    answer: `CSP(Content Security Policy) - is an additional layer of security inside browser which restricts allowed origins for requests.
You can set CSP origins with Content-Security-Policy header in HTTP response or on the front-end side using <meta> tag.`,
    tag: "11 Security",
  },
];
