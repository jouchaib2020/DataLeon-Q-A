import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { QuestionCard } from './components/QuestionCard';
import { Response } from './components/Response';
import { questions } from './data/questions';
import { motion } from 'framer-motion';

function App() {
  const [response, setResponse] = useState<string | null>(null);
  const currentQuestion = questions[0];

  const handleAnswer = (responseText: string) => {
    setResponse(responseText);
  };

  const handleReset = () => {
    setResponse(null);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium text-[#0066FF] dark:text-[#66A3FF] uppercase tracking-wider mb-4"
          >
            Empower Your Data Skills
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Exploration Game
          </motion.p>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Explore the realms of AI, Machine Learning, and data management with
            questions designed to test your problem-solving skills and technical
            knowledge. Are you ready to take on the challenge ?
          </motion.p>
        </motion.div>

        {response ? (
          <Response responseText={response} onReset={handleReset} />
        ) : (
          <QuestionCard question={currentQuestion} onAnswer={handleAnswer} />
        )}
      </div>
    </Layout>
  );
}

export default App;
