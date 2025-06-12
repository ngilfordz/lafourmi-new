
import React from 'react';

const LoadingSpiral = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-transparent border-t-primary rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        </div>
        <p className="text-xl font-semibold text-primary animate-pulse">
          Lafourmi Grocery 2.0 loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpiral;
