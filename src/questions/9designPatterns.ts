import type { IQuestion } from '../types/IQuestion';

export const questions9: Omit<IQuestion, 'id'>[] = [
  {
    title: 'What JavaScript patterns do you know ?',
    answer: `
Creational - singleton, factory, builder, prototype
Structural - adapter, decorator, facade, flyweight, proxy
Behavioral - observer, strategy, memento
    `,
    tag: '9 Design patterns',
  },
  {
    title: 'Singleton pattern',
    answer: `
Singleton is a creational pattern that creates an object which can be in a single instance in the system
    `,
    code: `
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.data = Math.random(); // Example of some data to demonstrate the singleton
    Singleton.instance = this;
  }
}
        `,
    tag: '9 Design patterns',
  },
  {
    title: 'Factory pattern',
    answer: `
Factory is a creational pattern which creates a new instance of a class depending on the input parameter
    `,
    code: `
class VehicleFactory {
 createVehicle(type) {
  switch(type) {
   case "car": return new Car();
   case "truck": return new Truck();
   case “bike: return new Bike();
   default: throw new Error("Unknown type");
  }
 }
}
        `,
    tag: '9 Design patterns',
  },
  {
    title: 'Builder pattern',
    answer: `
Builder is a creational pettern which creates a customized object defining properties spep by step(chaining methods)`,
    code: `
class BurgerBuilder {
  constructor() {
    this.burger = {
        bread: true,
        cheese: false,
        cutlet: false,
        sauce: false,
        size: 'medium'
    }
  }
  setSize(size) {
    this.burger.size = size;
    return this;
  }
  addCheese() {
    this.burger.cheese = true;
    return this;
  }
  addCutlet() {
    this.burger.cutlet = true;
    return this;
  }
  addSauce() {
    this.burger.sauce = true;
    return this;
  }
  build() {
    return this.burger;
  }
}

const myBurger = new BurgerBuilder()
  .setSize('large')
  .addCheese()
  .addCutlet()
  .addSauce()
  .build();
        `,
    tag: '9 Design patterns',
  },
  {
    title: 'Prototype pattern',
    answer: `
Prototype pattern is a creational pattern which creates an object adding another object as a prototype of it.
    `,
    code: `
const carPrototype = {
  drive() { …do something }
};

function createCar(type) {
  const car = Object.create(carPrototype);
  car.type = type;
  return car;
}
        `,
    tag: '9 Design patterns',
  },
  {
    title: 'Adapter pattern',
    answer: `
Adapter is a structural pattern which makes incompatible instances work together wrapping with a new class.
    `,
    code: `
class OldUser {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}


class UserAdapter {
  constructor(oldUser) {
    this.oldUser = oldUser;
  }
  getFirstName() {
    return this.oldUser.getName().split(' ')[0];
  }
  getLastName() {
    return this.oldUser.getName().split(' ')[1];
  }
}
        `,
    tag: '9 Design patterns',
  },
  {
    title: 'Decorator pattern',
    answer: `
Decorator is a structural pattern which adds some functionality to an existing object.
    `,
    code: `
class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
    this.withMilk = true;
  }
  cost() {
    return this.coffee.cost() + 2;
  }
}

        `,
    tag: '9 Design patterns',
  },
  {
    title: 'Facade pattern',
    answer: `
Facade is a structural pattern which provides simplified interface for more complex classes
    `,
    code: `
class CPU {
  freeze() {
    console.log("CPU freeze");
  }
  execute() {
    console.log("CPU execute");
  }
}
class Memory {
  load(position, data) {
    console.log("Memory load data", position);
  }
}
class HardDrive {
  read(lba, size) {
   // return data from lba size...;
  }
}

class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }
  start() {
    this.cpu.freeze();
    this.memory.load(0, this.hardDrive.read(0, 1024));
    this.cpu.execute();
  }
}

        `,
    tag: '9 Design patterns',
  },
  {
    title: 'Proxy pattern',
    answer: `
Proxy pattern is a structural pattern which adds a wrapper to original class and adds some logic during working with it for example logging, auth checks etc…
    `,
    code: `
class Database {
  constructor() {
    this.data = {};
  }

  set(key, value) {
    this.data[key] = value;
  }

  get(key) {
    return this.data[key];
  }
}

class DatabaseProxy {
  constructor() {
    this.database = new Database();
  }

  set(key, value) {
    console.log("Setting value for key");
    this.database.set(key, value);
  }

  get(key) {
    console.log("Getting value for key");
    return this.database.get(key);
  }
}
        `,
    tag: '9 Design patterns',
  },
  {
    title: 'Observer pattern',
    answer: `
Observer is a behavioral pattern which notifies dependent objects when state changes
    `,
    code: `
class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(obs) {
    this.observers.push(obs);
  }
  notify(data) {
    this.observers.forEach((o) => o.update(data));
  }
}
class Observer {
  update(data) {
    console.log("Updated with", data);
  }
}
const subject = new Subject(),
  obs = new Observer();
subject.subscribe(obs);
subject.notify("Hello");
        `,
    tag: '9 Design patterns',
  },
  {
    title: 'Memento pattern',
    answer: `
Memento is a behavioral pattern which saves and restores states
    `,
    code: `
class Editor {
  constructor() {
    this.content = '';
  }

  type(words) {
    this.content += words;
  }

  save() {
    return new Memento(this.content);
  }

  restore(memento) {
    this.content = memento.getState();
  }

  getContent() {
    return this.content;
  }
}
        `,
    tag: '9 Design patterns',
  },
  {
    title: 'Visitor pattern',
    answer: `
Visitor is a behavioral design pattern that allows you to add new operations to a group of objects without modifying the objects
    `,
    code: `
/ Element classes
class Animal {
  accept(visitor) {
    visitor.visitAnimal(this);
  }
}

class Dog extends Animal {
  bark() {
    return "Woof!";
  }
}

class Cat extends Animal {
  meow() {
    return "Meow!";
  }
}

// Visitor
class SoundVisitor {
  visitAnimal(animal) {
    if (animal instanceof Dog) {
      console.log(animal.bark());
    } else if (animal instanceof Cat) {
      console.log(animal.meow());
    }
  }
}

const soundVisitor = new SoundVisitor();
new Dog().accept(soundVisitor)

        `,
    tag: '9 Design patterns',
  },
  {
    title: 'Mediator pattern',
    answer: `
The Mediator pattern is a behavioral design pattern that connects objects without directly referring them to each other.
    `,
    code: `
    // Mediator
class ChatRoom {
  showMessage(user, message) {
    console.log(user.getName() + message);
  }
}

// Colleague
class User {
  constructor(name, chatRoom) {
    this.name = name;
    this.chatRoom = chatRoom;
  }

  getName() {
    return this.name;
  }

  send(message) {
    this.chatRoom.showMessage(this, message);
  }
}

// Usage
const chatRoom = new ChatRoom();

const user1 = new User('Alice', chatRoom);
const user2 = new User('Bob', chatRoom);
        `,
    tag: '9 Design patterns',
  },
];
