import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { HeaderProps } from '@/types/weather.types';

const Header: React.FC<HeaderProps> = ({ 
  darkMode, 
  unit, 
  onToggleDarkMode, 
  onToggleUnit 
}) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-white'}`}>
        Weather Forecast
      </h1>
      <div className="flex gap-4">
        <button
          onClick={onToggleUnit}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            darkMode 
              ? 'bg-gray-700 text-white hover:bg-gray-600' 
              : 'bg-white text-blue-600 hover:bg-blue-50'
          }`}
        >
          °{unit}
        </button>
        <button
          onClick={onToggleDarkMode}
          className={`p-2 rounded-lg transition-all ${
            darkMode 
              ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
              : 'bg-white text-gray-700 hover:bg-blue-50'
          }`}
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
};

export default Header;