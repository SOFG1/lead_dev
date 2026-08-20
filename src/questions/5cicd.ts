import type { IQuestion } from "../types/IQuestion";

export const questions5: Omit<IQuestion, "id">[] = [
  {
    title: "CI/CD",
    answer: `
Continuous Integration / Continuous delivery - is a devops method for frequently build, test and deploy code changes

CI - Automated tools which immediately build and test the code
CD - Tools which build, test and prepare code for production
Continuous Deployment - Advanced form of deployment when code automatically deployed to production
     `,
    tag: "5 CI/CD and Devtools",
  },
  {
    title: "Yarn and NPM pros and cons",
    answer: `
Yarn is more performant than NPM
Yarn has monorepo support
Yarn is not user friendly for beginners

NPM is very popular and easy for beginners, also has a large community
NPM is less performant than yarn
     `,
    tag: "5 CI/CD and Devtools",
  },
];
