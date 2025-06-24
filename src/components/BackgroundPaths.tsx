
import React from 'react';
import { BackgroundPaths as NewBackgroundPaths } from '@/components/ui/background-paths';

const BackgroundPaths = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
      <NewBackgroundPaths />
    </div>
  );
};

export default BackgroundPaths;
