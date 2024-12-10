import { expect } from 'chai';
import { Question } from '../../src/types/question';

export const createMockQuestion = (): Question => ({
  id: 'test-1',
  text: 'Test Question',
  options: [
    {
      id: 'opt-1',
      text: 'Option 1',
      response: 'Response 1'
    },
    {
      id: 'opt-2',
      text: 'Option 2',
      response: 'Response 2'
    }
  ]
});

export const assertQuestion = (actual: Question, expected: Question) => {
  expect(actual.id).to.equal(expected.id);
  expect(actual.text).to.equal(expected.text);
  expect(actual.options).to.have.lengthOf(expected.options.length);
  
  actual.options.forEach((option, index) => {
    expect(option.id).to.equal(expected.options[index].id);
    expect(option.text).to.equal(expected.options[index].text);
    expect(option.response).to.equal(expected.options[index].response);
  });
};