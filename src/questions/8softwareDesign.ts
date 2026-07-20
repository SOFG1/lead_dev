import type { IQuestion } from "../types/IQuestion";

export const questions8: Omit<IQuestion, "id">[] = [
  {
    title: "What is software architecture ?",
    answer: `Software architecture is a high-level blueprint of modules of the project, it’s relationships and how they interact.`,
    tag: "8 Software Design",
  },
  {
    title: "Software elements modules",
    answer: `Software modules are independent, self-contained building blocks of code that handle specific functionalities within a larger program`,
    tag: "8 Software Design",
  },
  {
    title: "Connections between modules",
    answer: `Strive to have loose coupling between elements to make modules more independent`,
    tag: "8 Software Design",
  },
  {
    title: "Software modules quality attributes",
    answer: `
1. Modifiability - modules should be modifiable easily without changing other modules.

2. Testability

3. Reusability - modules should be independent from other parts and could be used in other places of the system

4. Efficiency - module should consume minimum resources

5. Understandability - module should be cleat and understandable for others`,
    tag: "8 Software Design",
    list: true,
  },
  {
    title: "Software relations quality attributes",
    answer: `
1. Interoperability - modules should be able to communicate easily through standardized protocols

2. Latency and performance - messages between modules should be fast and efficient

3. Reliability and error resistance - The ability to handle network partitions, errors retries and queues without crashing

4. Scalability - ability to scale when data flow grows

5. Security - Enforcing encryption, authentication, and authorization protocols across channels`,
    tag: "8 Software Design",
    list: true,
  },
  {
    title: "Software architecture constraints",
    answer: `A system constraint is essentially a decision that was already made for us, restricting our degree of freedom when designing and implementing the system. System constraints are referred as pillars for software architecture.

They provide us with a solid starting point.
The rest of the system need to be designed around them.`,
    tag: "8 Software Design",
  },
  {
    title: "Types of Software Architecture Constraints",
    answer: `Technical constraints - it can be particular software platform, cloud vendor, use of particular programming language or software

Business constraints - Situations when we must compromise on architectural decisions due to business requirements constraints.

Regulatory/Legal constraints - constraints based on countries rules/ laws and government decisions etc.`,
    tag: "8 Software Design",
  },
  {
    title: "Steps of defining Software Architecture",
    answer: `
1. Identify stakeholders, Gather requirements and constraints

2. Identify key components

3. Choose an architectural style (Layered, Microservices, Event-driven…)

4. Select the technology stack

5. Define data architecture and communication

6. Document and review

Iterate and validate(build a lightweight proof of concept and re-check steps)`,
    tag: "8 Software Design",
    list: true,
  },
  {
    title: "SOLID",
    answer: `Single Responsibility - Every module or class should have responsibility over a single part of the functionality in the system

Open-Closed Principle - Modules should be opened for extension and closed for modifications

Liskov Substitution - Objects in the system can not be replaceable by their sub-classes(children).

Interface Segregation - No client should be forced to depend on methods it does not use. It is better to have many small, client-specific interfaces than one general-purpose interface.

Dependency Inversion - High-level modules should not depend on low-level modules; both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions.`,
    tag: "8 Software Design",
    list: true,
  },
  {
    title: "SoC",
    answer: `
Separation of Concepts - separate your application into different sections, and each section will address a separate concern.`,
    tag: "8 Software Design",
  },
  {
    title: "Single Responsibility",
    answer: `
Every module in the system should be responsible for single functionality.`,
    tag: "8 Software Design",
  },
  {
    title: "Law of Demeter, Principal of least knowledge",
    answer: `
Objects in the system should know minimal information about other objects.`,
    tag: "8 Software Design",
  },
  {
    title: "DRY",
    answer: `
Don’t Repeat Yourself - every piece of knowledge must have a single, authoritative representation in the system.`,
    tag: "8 Software Design",
  },
  {
    title: "KISS",
    answer: `
Keep It Simple, Stupid - systems, products, and processes work best if they remain simple rather than becoming unnecessarily complex.`,
    tag: "8 Software Design",
  },
  {
    title: "YAGNI",
    answer: `
You Ain’t Gonna Need It - you should only implement features, abstractions, or optimizations when they are actually required.

Avoid over engineering`,
    tag: "8 Software Design",
  },
  {
    title: "Composition over Inheritance",
    answer: `
Composition over Inheritance - is an OOP principle which advises to have complex classes divided into many small independent classes instead of creating inherited sub-classes.

This makes small classes more flexible, independent and modifications won’t affect parent class and vice-versa.`,
    tag: "8 Software Design",
  },
  {
    title: "Defining Naming Conventions",
    answer: `
You can use following principles and use code analysis tools to avoid naming collisions:

1. Use naming styles according to entities (PascalCase, camelCase, kebab-case, snake-case)

2. Use module/feature based prefixes

3. Use nouns for variables and verbs for functions

4. Naming consistency is over preference

5. Stick entirely to one natural language (ideally English)

6. Avoid abbreviations (getUser instedof getUsr)`,
    tag: "8 Software Design",
    list: true,
  },

];
