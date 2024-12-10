import { Question } from '../types/question';

export const questions: Question[] = [
  {
    id: '1',
    text: 'Do you like React?',
    options: [
      {
        id: 'yes',
        text: 'Yes',
        response: 'Good choice!'
      },
      {
        id: 'no',
        text: 'No',
        response: 'Damn!'
      }
    ]
  }
];