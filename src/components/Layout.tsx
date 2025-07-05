import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Main Content */}
      <div className="relative z-[var(--layer-content)]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
