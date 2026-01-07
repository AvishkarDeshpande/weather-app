import React from 'react';
import { ErrorMessageProps } from '@/types/weather.types';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, darkMode }) => {
  return (
    <div className={`mb-6 p-4 border rounded-lg ${
      darkMode 
        ? 'bg-red-900 border-red-700 text-red-200' 
        : 'bg-red-100 border-red-400 text-red-700'
    }`}>
      {message}
    </div>
  );
};

export default ErrorMessage;