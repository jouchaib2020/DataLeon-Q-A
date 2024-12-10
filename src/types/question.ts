export interface Question {
  id: string;
  text: string;
  options: Answer[];
}

export interface Answer {
  id: string;
  text: string;
  response: string;
}