import {Team, Person, loadUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});

test ('Try to add unique members', () => {
  const person1 = new Person('John Doe', 27)
  const party = new Team()
  party.add(person1)
  expect(party.toArray()).toEqual([person1])
})

test ('Try to add all new members', () => {
  const person1 = new Person('John Doe', 27)
  const person2 = new Person('Jane Doe', 26)
  const party = new Team()
  party.addAll(person1, person2)
  expect(party.toArray()).toEqual([person1, person2])
})

test ('Try to double your strongest member', () => {
  const person1 = new Person('John Doe', 27)
  const person2 = new Person('Jane Doe', 26)
  const party = new Team()
  expect(() => party.addAll(person1, person2, person1)).toThrow(new Error('This person has been already figthing for you'))
})