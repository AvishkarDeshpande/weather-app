import React from 'react';
import { CitiesTableProps } from '@/types/weather.types';

const CitiesTable: React.FC<CitiesTableProps> = ({ 
  cities, 
  currentPage, 
  itemsPerPage, 
  unit, 
  darkMode, 
  onPageChange, 
  onConvertTemp 
}) => {
  const totalPages = Math.ceil(cities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCities = cities.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={`cursor-pointer p-6 rounded-2xl shadow-2xl ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <h3 className={`text-2xl font-bold mb-6 ${
        darkMode ? 'text-white' : 'text-gray-800'
      }`}>
        Weather Around the World
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`border-b-2 ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <th className={`text-left py-3 px-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>#</th>
              <th className={`text-left py-3 px-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>City</th>
              <th className={`text-left py-3 px-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Temperature</th>
              <th className={`text-left py-3 px-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Condition</th>
              <th className={`text-left py-3 px-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Humidity</th>
              <th className={`text-left py-3 px-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Wind Speed</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCities.map((cityData) => (
              <tr
                key={cityData.id}
                className={`border-b transition-colors ${
                  darkMode 
                    ? 'border-gray-700 hover:bg-gray-700' 
                    : 'border-gray-100 hover:bg-blue-50'
                }`}
              >
                <td className={`py-3 px-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>{cityData.id}</td>
                <td className={`py-3 px-4 font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>{cityData.city}</td>
                <td className={`py-3 px-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>{onConvertTemp(cityData.temp)}°{unit}</td>
                <td className={`py-3 px-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>{cityData.condition}</td>
                <td className={`py-3 px-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>{cityData.humidity}%</td>
                <td className={`py-3 px-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>{cityData.windSpeed} km/h</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            darkMode
              ? 'bg-gray-700 text-white hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-600'
              : 'bg-blue-100 text-blue-600 hover:bg-blue-200 disabled:bg-gray-200 disabled:text-gray-400'
          }`}
        >
          Previous
        </button>
        <span className={`px-4 py-2 ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            darkMode
              ? 'bg-gray-700 text-white hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-600'
              : 'bg-blue-100 text-blue-600 hover:bg-blue-200 disabled:bg-gray-200 disabled:text-gray-400'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CitiesTable;