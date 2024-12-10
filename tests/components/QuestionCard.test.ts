import { expect } from 'chai';
import { createMockQuestion } from '../utils/testUtils';

describe('QuestionCard Component', () => {
  const mockQuestion = createMockQuestion();

  it('should create valid mock question', () => {
    expect(mockQuestion).to.have.property('id');
    expect(mockQuestion).to.have.property('text');
    expect(mockQuestion).to.have.property('options');
    expect(mockQuestion.options).to.have.lengthOf(2);
  });

  it('should have valid option structure', () => {
    mockQuestion.options.forEach(option => {
      expect(option).to.have.property('id').that.is.a('string');
      expect(option).to.have.property('text').that.is.a('string');
      expect(option).to.have.property('response').that.is.a('string');
    });
  });
});