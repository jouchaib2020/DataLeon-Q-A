import React from 'react';
import { Button } from './Button';
import { motion } from 'framer-motion';

interface ResponseProps {
  responseText: string;
  onReset: () => void;
}

export const Response: React.FC<ResponseProps> = ({ responseText, onReset }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto text-center"
    >
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
      >
        {responseText}
      </motion.h2>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Button onClick={onReset}>Try Again</Button>
      </motion.div>
    </motion.div>
  );
};