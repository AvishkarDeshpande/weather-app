import React from 'react';
import { MapPin, Search, Loader2 } from 'lucide-react';
import { SearchBarProps } from '@/types/weather.types';

const SearchBar: React.FC<SearchBarProps> = ({ 
  city, 
  onCityChange, 
  onSearch, 
  loading, 
  darkMode 
}) => {
  return (
    <div className="mb-8">
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <MapPin 
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`} 
          />
          <input
            type="text"
            value={city}
            onChange={(e) => onCityChange(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && onSearch()}
            placeholder="Enter city name..."
            className={`w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all ${
              darkMode
                ? 'bg-gray-800 text-white border-gray-700 focus:ring-blue-500'
                : 'bg-white text-gray-900 focus:ring-blue-400'
            }`}
          />
        </div>
        <button
          onClick={onSearch}
          disabled={loading}
          className={`cursor-pointer px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all ${
            darkMode
              ? 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-700'
              : 'bg-white hover:bg-blue-50 text-blue-600 disabled:bg-gray-300'
          }`}
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;