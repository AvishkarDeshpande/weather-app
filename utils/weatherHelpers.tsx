import { TemperatureUnit } from '@/types/weather.types';
import { Cloud, Sun, CloudRain } from 'lucide-react';

/**
 * Convert temperature between Celsius and Fahrenheit
 */
export const convertTemperature = (temp: number, unit: TemperatureUnit): number => {
  return unit === 'F' ? Math.round((temp * 9/5) + 32) : Math.round(temp);
};

/**
 * Get appropriate weather icon based on condition
 */
export const getWeatherIcon = (condition: string): JSX.Element => {
  const iconClass = "w-16 h-16";
  
  switch (condition.toLowerCase()) {
    case 'clear':
    case 'sunny':
      return <Sun className={`${iconClass} text-yellow-400`} />;
    case 'clouds':
    case 'cloudy':
      return <Cloud className={`${iconClass} text-gray-400`} />;
    case 'rain':
    case 'rainy':
    case 'drizzle':
      return <CloudRain className={`${iconClass} text-blue-400`} />;
    default:
      return <Cloud className={`${iconClass} text-gray-400`} />;
  }
};

/**
 * Generate mock cities data for the table
 */
export const generateMockCitiesData = () => {
  const cities: string[] = [
    'London', 'Paris', 'Tokyo', 'New York', 'Sydney',
    'Berlin', 'Rome', 'Madrid', 'Dubai', 'Singapore',
    'Mumbai', 'Toronto', 'Los Angeles', 'Chicago', 'Miami',
    'Seoul', 'Beijing', 'Bangkok', 'Amsterdam', 'Vienna',
    'Stockholm', 'Oslo', 'Copenhagen', 'Brussels', 'Lisbon'
  ];

  return cities.map((city, index) => ({
    id: index + 1,
    city,
    temp: Math.floor(Math.random() * 35) + 5,
    condition: ['Clear', 'Cloudy', 'Rainy', 'Sunny'][Math.floor(Math.random() * 4)],
    humidity: Math.floor(Math.random() * 60) + 30,
    windSpeed: Math.floor(Math.random() * 20) + 5
  }));
};

/**
 * Format date for forecast display
 */
export const formatForecastDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { weekday: 'short' });
};