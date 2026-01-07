import React from 'react';
import { ForecastCardProps } from '@/types/weather.types';
import { getWeatherIcon } from '@/utils/weatherHelpers';

const ForecastCard: React.FC<ForecastCardProps> = ({ 
  forecast, 
  unit, 
  darkMode, 
  onConvertTemp 
}) => {
  return (
    <div className={`p-6 rounded-2xl shadow-2xl mb-8 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <h3 className={`text-2xl font-bold mb-6 ${
        darkMode ? 'text-white' : 'text-gray-800'
      }`}>
        5-Day Forecast
      </h3>
      
      <div className="grid grid-cols-5 gap-4">
        {forecast.map((day, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg text-center transition-all hover:scale-105 ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-50 hover:bg-blue-100'
            }`}
          >
            <div className={`font-semibold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              {day.date}
            </div>
            
            <div className="flex justify-center mb-2">
              {getWeatherIcon(day.condition)}
            </div>
            
            <div className={`text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              {onConvertTemp(day.temp)}°
            </div>
            
            <div className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {day.condition}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;