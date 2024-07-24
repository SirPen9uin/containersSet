import { httpGet } from './http';

export function loadUser(id) {
  const data = httpGet(`http://server:8080/users/${id}`);
  return JSON.parse(data);
}

// eslint-disable-next-line no-unused-vars
export function saveUser(user) {
  throw new Error('Unimplemented');
}

export class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    if (this.members.has(person)) {
      throw new Error ('This person has been already figthing for you')
    }
    this.members.add(person)
  }

  addAll(...array) {
    array.forEach(hero => {
      this.add(hero)
    })
  }

  toArray() {
    return Array.from(this.members)
  }
}

export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}