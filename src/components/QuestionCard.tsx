import React from 'react';
import { Question } from '../types/question';
import { Button } from './Button';
import { motion } from 'framer-motion';

interface QuestionCardProps {
  question: Question;
  onAnswer: (responseText: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">{question.text}</h2>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <motion.div
            key={option.id}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Button
              onClick={() => onAnswer(option.response)}
              className="w-full"
            >
              {option.text}
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};