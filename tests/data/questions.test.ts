import { expect } from 'chai';
import { questions } from '../../src/data/questions';

describe('Questions Data', () => {
  it('should have at least one question', () => {
    expect(questions).to.be.an('array').that.is.not.empty;
  });

  it('should have valid question structure', () => {
    const question = questions[0];
    
    expect(question).to.have.property('id').that.is.a('string');
    expect(question).to.have.property('text').that.is.a('string');
    expect(question).to.have.property('options').that.is.an('array');
    expect(question.options).to.have.lengthOf(2);
  });

  it('should have valid options structure', () => {
    const options = questions[0].options;
    
    options.forEach(option => {
      expect(option).to.have.property('id').that.is.a('string');
      expect(option).to.have.property('text').that.is.a('string');
      expect(option).to.have.property('response').that.is.a('string');
    });
  });

  it('should have "Yes" and "No" options', () => {
    const options = questions[0].options;
    const optionTexts = options.map(opt => opt.text);
    
    expect(optionTexts).to.include('Yes');
    expect(optionTexts).to.include('No');
  });
});