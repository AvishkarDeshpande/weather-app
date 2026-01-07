import React from 'react';
import { SkeletonLoaderProps } from '@/types/weather.types';

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ darkMode }) => {
  return (
    <div className="animate-pulse space-y-4">
      <div className={`h-8 rounded w-3/4 mx-auto ${
        darkMode ? 'bg-gray-700' : 'bg-gray-300'
      }`}></div>
      <div className={`h-24 rounded w-32 mx-auto ${
        darkMode ? 'bg-gray-700' : 'bg-gray-300'
      }`}></div>
      <div className={`h-6 rounded w-1/2 mx-auto ${
        darkMode ? 'bg-gray-700' : 'bg-gray-300'
      }`}></div>
    </div>
  );
};

export default SkeletonLoader;