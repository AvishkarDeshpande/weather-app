// ============================================================================
// API RESPONSE TYPES
// ============================================================================

export interface OpenWeatherAPIResponse {
    coord: {
      lon: number;
      lat: number;
    };
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
    base: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
      sea_level?: number;
      grnd_level?: number;
    };
    visibility: number;
    wind: {
      speed: number;
      deg: number;
      gust?: number;
    };
    clouds: {
      all: number;
    };
    dt: number;
    sys: {
      type?: number;
      id?: number;
      country: string;
      sunrise: number;
      sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }
  
  export interface ForecastAPIResponse {
    cod: string;
    message: number;
    cnt: number;
    list: Array<{
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
      };
      weather: Array<{
        id: number;
        main: string;
        description: string;
        icon: string;
      }>;
      clouds: {
        all: number;
      };
      wind: {
        speed: number;
        deg: number;
        gust: number;
      };
      visibility: number;
      pop: number;
      sys: {
        pod: string;
      };
      dt_txt: string;
    }>;
    city: {
      id: number;
      name: string;
      coord: {
        lat: number;
        lon: number;
      };
      country: string;
      population: number;
      timezone: number;
      sunrise: number;
      sunset: number;
    };
  }
  
  // ============================================================================
  // APPLICATION DATA TYPES
  // ============================================================================
  
  export interface WeatherData {
    city: string;
    temp: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    icon: string;
    feelsLike: number;
    tempMin: number;
    tempMax: number;
  }
  
  export interface ForecastDay {
    date: string;
    temp: number;
    condition: string;
    icon: string;
    humidity: number;
  }
  
  export interface CityWeather {
    id: number;
    city: string;
    temp: number;
    condition: string;
    humidity: number;
    windSpeed: number;
  }
  
  export type TemperatureUnit = 'C' | 'F';
  
  // ============================================================================
  // COMPONENT PROPS TYPES
  // ============================================================================
  
  export interface HeaderProps {
    darkMode: boolean;
    unit: TemperatureUnit;
    onToggleDarkMode: () => void;
    onToggleUnit: () => void;
  }
  
  export interface SearchBarProps {
    city: string;
    onCityChange: (city: string) => void;
    onSearch: () => void;
    loading: boolean;
    darkMode: boolean;
  }
  
  export interface WeatherCardProps {
    weather: WeatherData;
    unit: TemperatureUnit;
    darkMode: boolean;
    onConvertTemp: (temp: number) => number;
  }
  
  export interface ForecastCardProps {
    forecast: ForecastDay[];
    unit: TemperatureUnit;
    darkMode: boolean;
    onConvertTemp: (temp: number) => number;
  }
  
  export interface CitiesTableProps {
    cities: CityWeather[];
    currentPage: number;
    itemsPerPage: number;
    unit: TemperatureUnit;
    darkMode: boolean;
    onPageChange: (page: number) => void;
    onConvertTemp: (temp: number) => number;
  }
  
  export interface ErrorMessageProps {
    message: string;
    darkMode: boolean;
  }
  
  export interface SkeletonLoaderProps {
    darkMode: boolean;
  }