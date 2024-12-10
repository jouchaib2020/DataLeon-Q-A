import React from 'react';
import { CircuitBoard } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <CircuitBoard className="w-8 h-8 text-[#0066FF]" />
      <span className="text-2xl font-bold text-gray-900 dark:text-white">Dataleon</span>
    </div>
  );
};