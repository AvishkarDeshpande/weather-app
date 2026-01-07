'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import ErrorMessage from '@/components/ErrorMessage';
import SkeletonLoader from '@/components/SkeletonLoader';
import WeatherCard from '@/components/WeatherCard';
import ForecastCard from '@/components/ForecastCard';
import CitiesTable from '@/components/CitiesTable';
import { 
  WeatherData, 
  ForecastDay, 
  CityWeather, 
  TemperatureUnit 
} from '@/types/weather.types';
import { convertTemperature, generateMockCitiesData } from '@/utils/weatherHelpers';

const WeatherApp: React.FC = () => {
  // State Management
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [unit, setUnit] = useState<TemperatureUnit>('C');
  const [citiesData, setCitiesData] = useState<CityWeather[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  const itemsPerPage = 5;
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY || 'demo';

  // Initialize on mount
  useEffect(() => {
    getUserLocation();
    setCitiesData(generateMockCitiesData());
  }, []);

  /**
   * Get user's current location using Geolocation API
   */
  const getUserLocation = (): void => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
        },
        () => {
          // Fallback to default city if location access denied
          fetchWeather('London');
        }
      );
    } else {
      fetchWeather('London');
    }
  };

  /**
   * Fetch weather data by coordinates
   */
  const fetchWeatherByCoords = async (lat: number, lon: number): Promise<void> => {
    setLoading(true);
    setError('');

    try {
      // REAL API CALL (uncomment when you have API key):
      // const response = await fetch(
      //   `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      // );
      // const data = await response.json();
      // 
      // const forecastResponse = await fetch(
      //   `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      // );
      // const forecastData = await forecastResponse.json();
      //
      // Process real data here...

      // MOCK DATA (for demo purposes)
      const mockWeather: WeatherData = {
        city: 'Your Location',
        temp: 22,
        condition: 'Clear',
        humidity: 65,
        windSpeed: 12,
        icon: '01d',
        feelsLike: 21,
        tempMin: 18,
        tempMax: 25
      };

      const mockForecast: ForecastDay[] = [
        { date: 'Mon', temp: 23, condition: 'Sunny', icon: '01d', humidity: 60 },
        { date: 'Tue', temp: 21, condition: 'Cloudy', icon: '02d', humidity: 65 },
        { date: 'Wed', temp: 19, condition: 'Rainy', icon: '10d', humidity: 80 },
        { date: 'Thu', temp: 22, condition: 'Clear', icon: '01d', humidity: 55 },
        { date: 'Fri', temp: 24, condition: 'Sunny', icon: '01d', humidity: 50 }
      ];

      setWeather(mockWeather);
      setForecast(mockForecast);
    } catch (err) {
      setError('Failed to fetch weather data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Fetch weather data by city name
   */
  const fetchWeather = async (cityName: string): Promise<void> => {
    if (!cityName.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // REAL API CALL (uncomment when you have API key):
      // const response = await fetch(
      //   `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      // );
      // 
      // if (!response.ok) {
      //   throw new Error('City not found');
      // }
      // 
      // const data = await response.json();
      // 
      // const forecastResponse = await fetch(
      //   `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      // );
      // const forecastData = await forecastResponse.json();
      //
      // Process real data here...

      // MOCK DATA (for demo purposes)
      const mockWeather: WeatherData = {
        city: cityName,
        temp: Math.floor(Math.random() * 30) + 10,
        condition: ['Clear', 'Cloudy', 'Rainy', 'Sunny'][Math.floor(Math.random() * 4)],
        humidity: Math.floor(Math.random() * 60) + 30,
        windSpeed: Math.floor(Math.random() * 20) + 5,
        icon: '01d',
        feelsLike: Math.floor(Math.random() * 30) + 10,
        tempMin: Math.floor(Math.random() * 20) + 5,
        tempMax: Math.floor(Math.random() * 35) + 15
      };

      const mockForecast: ForecastDay[] = [
        { date: 'Mon', temp: 23, condition: 'Sunny', icon: '01d', humidity: 60 },
        { date: 'Tue', temp: 21, condition: 'Cloudy', icon: '02d', humidity: 65 },
        { date: 'Wed', temp: 19, condition: 'Rainy', icon: '10d', humidity: 80 },
        { date: 'Thu', temp: 22, condition: 'Clear', icon: '01d', humidity: 55 },
        { date: 'Fri', temp: 24, condition: 'Sunny', icon: '01d', humidity: 50 }
      ];

      setWeather(mockWeather);
      setForecast(mockForecast);
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
      setForecast([]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handle search button click
   */
  const handleSearch = (): void => {
    fetchWeather(city);
  };

  /**
   * Toggle dark/light mode
   */
  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
  };

  /**
   * Toggle temperature unit (C/F)
   */
  const toggleUnit = (): void => {
    setUnit(unit === 'C' ? 'F' : 'C');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600'
    }`}>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header with dark mode and unit toggle */}
        <Header
          darkMode={darkMode}
          unit={unit}
          onToggleDarkMode={toggleDarkMode}
          onToggleUnit={toggleUnit}
        />

        {/* Search bar */}
        <SearchBar
          city={city}
          onCityChange={setCity}
          onSearch={handleSearch}
          loading={loading}
          darkMode={darkMode}
        />

        {/* Error message */}
        {error && <ErrorMessage message={error} darkMode={darkMode} />}

        {/* Weather card with loading state */}
        {loading ? (
          <div className={`p-8 rounded-2xl shadow-2xl mb-8 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <SkeletonLoader darkMode={darkMode} />
          </div>
        ) : weather ? (
          <WeatherCard
            weather={weather}
            unit={unit}
            darkMode={darkMode}
            onConvertTemp={(temp) => convertTemperature(temp, unit)}
          />
        ) : null}

        {/* 5-day forecast */}
        {forecast.length > 0 && (
          <ForecastCard
            forecast={forecast}
            unit={unit}
            darkMode={darkMode}
            onConvertTemp={(temp) => convertTemperature(temp, unit)}
          />
        )}

        {/* Cities table with pagination */}
        <CitiesTable
          cities={citiesData}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          unit={unit}
          darkMode={darkMode}
          onPageChange={setCurrentPage}
          onConvertTemp={(temp) => convertTemperature(temp, unit)}
        />
      </div>
    </div>
  );
};

export default WeatherApp;