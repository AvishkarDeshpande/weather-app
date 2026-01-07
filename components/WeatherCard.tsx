import React from 'react';
import { Droplets, Wind } from 'lucide-react';
import { WeatherCardProps } from '@/types/weather.types';
import { getWeatherIcon } from '@/utils/weatherHelpers';

const WeatherCard: React.FC<WeatherCardProps> = ({ 
  weather, 
  unit, 
  darkMode, 
  onConvertTemp 
}) => {
  return (
    <div className={`p-8 rounded-2xl shadow-2xl mb-8 transition-all hover:shadow-3xl ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="text-center">
        <h2 className={`text-3xl font-bold mb-4 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          {weather.city}
        </h2>
        
        <div className="flex justify-center mb-4">
          {getWeatherIcon(weather.condition)}
        </div>
        
        <div className={`text-6xl font-bold mb-2 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          {onConvertTemp(weather.temp)}°{unit}
        </div>
        
        <div className={`text-xl mb-2 ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {weather.condition}
        </div>
        
        <div className={`text-sm mb-6 ${
          darkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          Feels like {onConvertTemp(weather.feelsLike)}°{unit} | 
          H: {onConvertTemp(weather.tempMax)}° L: {onConvertTemp(weather.tempMin)}°
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
          <div className={`flex items-center justify-center gap-2 p-4 rounded-lg ${
            darkMode ? 'bg-gray-700' : 'bg-blue-50'
          }`}>
            <Droplets className={`w-6 h-6 ${
              darkMode ? 'text-blue-400' : 'text-blue-500'
            }`} />
            <div>
              <div className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Humidity</div>
              <div className={`text-xl font-semibold ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>{weather.humidity}%</div>
            </div>
          </div>
          
          <div className={`flex items-center justify-center gap-2 p-4 rounded-lg ${
            darkMode ? 'bg-gray-700' : 'bg-blue-50'
          }`}>
            <Wind className={`w-6 h-6 ${
              darkMode ? 'text-blue-400' : 'text-blue-500'
            }`} />
            <div>
              <div className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Wind Speed</div>
              <div className={`text-xl font-semibold ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>{weather.windSpeed} km/h</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;