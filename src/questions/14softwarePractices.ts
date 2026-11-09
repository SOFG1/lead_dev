import type { IQuestion } from '../types/IQuestion';

export const questions14: Omit<IQuestion, 'id'>[] = [
  {
    title: 'Tools and techniques for ensuring code quality (List)',
    answer: `
1. Linters and formatters(ESLint, StyleLint, Prettier, Cyclomatic and cognitive complexity)
2. Typechecking (TypeScript)
3. Tests (Unit, integration, e2e)
4. Code coverage metrics
5. Git Hooks (Husky)
6. CI/CD Quality gates
    `,
    tag: '14 Engineering Practices',
    list: true,
  },
  {
    title: 'Testing Pyramid',
    answer: `
Testing pyramid is a hierarchy of tests in the app which consists of 3 layers

1. Unit tests - lower layer (35-50% of tests)
2. Integration tests - middle layer (25%-30% of tests)
3. e2e tests - upper layer (5%-20% of tests)
    `,
    tag: '14 Engineering Practices',
    list: true,
  },
  {
    title: 'Testing trophy (List)',
    answer: `
Testing trophy is a testing framework similar to testing pyramid but with 4 layers

1. Static code analysis tools - TypeScript, ESLint, Prettier etc.
2. Unit Tests
3. Integration Tests
4. E2e tests
    `,
    tag: '14 Engineering Practices',
    list: true,
  },
  {
    title: 'What is effective testing strategy for a simple project ?',
    answer: `
The best testing strategy is to adding tests only for necessary part of the app and prevent over-engineering.

It’s better to follow testing pyramid. Add several e2e tests only for important functionality.

The optimal code coverage is 80%
    `,
    tag: '14 Engineering Practices',
  },
  {
    title: 'Which code should be covered with unit tests ?',
    answer: `
With unit tests should be covered pure business logic, data transformations and complex UI component.(Utility functions and UI components)
    `,
    tag: '14 Engineering Practices',
  },
  {
    title: 'What is a good Unit Test ? FIRST Principles (List)',
    answer: `
1. Fast. Test should be run fast
2. Independent. Should be independent from global scope
3. Repeatable. Should always return the same data when input doesn’t change
4. Self-validating. Should return clear Pass or Fail result
5. Timely. Should be written on proper time, ideally before or during the development.
    `,
    tag: '14 Engineering Practices',
    list: true,
  },
  {
    title: 'Acceptance testing',
    answer: `
Acceptance testing is the final step of testing. It’s being run before the app goes to production or is delivered to the customer.
It could be User Acceptance Testing, Business Acceptance Testing etc…
    `,
    tag: '14 Engineering Practices',
  },
  {
    title: 'TDD',
    answer: `
Test Driven Development - is an approach of development when you write tests in advance and then you implement feature which will satisfy the tests.
    `,
    tag: '14 Engineering Practices',
  },
  {
    title: 'Code Smells',
    answer: `
Code Smells is a termine which hints that a change in your code requires changes in many other places.
    `,
    tag: '14 Engineering Practices',
  },
  {
    title: 'Code standards and lint rules',
    answer: `
Common frontend applications code quality relies on consistent structural, naming and architectural conventions

Lint rules and formatting

Workflow strategy(Pre-commit hooks, CI/CD gates, etc.)
    `,
    tag: '14 Engineering Practices',
    list: true,
  },
  {
    title: 'Complexity measurement, cyclomatic code complexity',
    answer: `
1. Code complexity(if conditions, logical operators, cognitive complexity)

2. Architectural and state complexity(state complexity, module clearness and boundaries)

3. Run time complexity(application behaviour in real time scenarios, algorithmic complexity)
    `,
    tag: '14 Engineering Practices',
    list: true,
  },
  {
    title: 'Code review checklist',
    answer: `
1. Functionality and logic
2. Architecture
3. Readability and maintainability
4. Security
5. Performance
6. Tests
    `,
    tag: '14 Engineering Practices',
    list: true,
  },
  {
    title: 'Convincing the customer to write Unit Tests',
    answer: `
It’s better to spend some time writing Unit Tests than spending a lot of time in the future to fix bugs.
It’s better the bugs to appear during tests run rather than on production runtime.
    `,
    tag: '14 Engineering Practices',
  },
  {
    title: 'CI/CD Pipeline steps',
    answer: `
1. Source / Commit trigger - developer pushes code or opens a PR
2. Environment setup and dependencies installation
3. Static code analysis - es lint, style lint and formatting
4. Automated testing running unit tests
5. Application build and deployment
    `,
    tag: '14 Engineering Practices',
    list: true,
  },
  {
    title: 'CI/CD Pipeline steps',
    answer: `
1. GitHub Flow - small main branch and temporary feature branches
2. GitFlow - consists [ticket-number] -> feature -> develop -> uat -> hotfix -> stg -> main branches
3. GitLab flow - similar to git flow but also contain different environment branches 
4. Trunk Based - there is only single main branch everyone merges to there, untested functionality is hidden by feature flags
    `,
    tag: '14 Engineering Practices',
    list: true,
  },
  {
    title: 'CI/CD Pipeline steps',
    answer: `
1. Big-Bang deployment - deploys all changes to the entire application immediately. It’s easy and fast but risky, better for small apps.

2. Rolling deployment - gradually replaces old modules with new modules, less risky

3. Canary release - applies updates for the small fraction of traffic (eg 1%). This is safe because new version bugs will affect only small amount of users, but requires traffic-shifting infrastructure.

4. Blue-Green deployment - strategy when Blue(old) and Green(new) versions of the app are running simultaneously and the application switches the versions on accidents immediately.

5. Feature flagging - new features are deployed to production but hidden for most of the users and enabled only for specific groups of users(testers, internal users, etc)
    `,
    tag: '14 Engineering Practices',
    list: true,
  },
];
