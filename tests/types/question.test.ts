import { expect } from 'chai';
import { createMockQuestion, assertQuestion } from '../utils/testUtils';

describe('Question Type', () => {
  it('should validate question type structure', () => {
    const mockQuestion = createMockQuestion();
    const expectedQuestion = {
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
    };

    assertQuestion(mockQuestion, expectedQuestion);
  });
});