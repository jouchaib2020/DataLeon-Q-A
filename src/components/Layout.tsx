import React from 'react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EEF6FF] to-[#E5F5FF] 
      dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="p-6 flex justify-between items-center"
      >
        <Logo />
        <ThemeToggle />
      </motion.header>
      <main className="container mx-auto px-4 py-12">
        {children}
      </main>
    </div>
  );
};