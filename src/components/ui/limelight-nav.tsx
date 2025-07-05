import React, { useState, useRef, useLayoutEffect, cloneElement } from 'react';

// --- Internal Types and Defaults ---

const DefaultHomeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>;
const DefaultCompassIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" /></svg>;
const DefaultBellIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>;

type NavItem = {
  id: string | number;
  icon: React.ReactElement;
  label?: string;
  onClick?: () => void;
};

const defaultNavItems: NavItem[] = [
  { id: 'default-home', icon: <DefaultHomeIcon />, label: 'Home' },
  { id: 'default-explore', icon: <DefaultCompassIcon />, label: 'Explore' },
  { id: 'default-notifications', icon: <DefaultBellIcon />, label: 'Notifications' },
];

type LimelightNavProps = {
  items?: NavItem[];
  defaultActiveIndex?: number;
  onTabChange?: (index: number) => void;
  className?: string;
  limelightClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
};

/**
 * An adaptive-width navigation bar with a "limelight" effect that highlights the active item.
 */
export const LimelightNav = ({
  items = defaultNavItems,
  defaultActiveIndex = 0,
  onTabChange,
  className,
  limelightClassName,
  iconContainerClassName,
  iconClassName,
}: LimelightNavProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [isReady, setIsReady] = useState(false);
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (items.length === 0) return;

    const limelight = limelightRef.current;
    const activeItem = navItemRefs.current[activeIndex];
    
    if (limelight && activeItem) {
      const newLeft = activeItem.offsetLeft + activeItem.offsetWidth / 2 - limelight.offsetWidth / 2;
      limelight.style.left = `${newLeft}px`;

      if (!isReady) {
        setTimeout(() => setIsReady(true), 50);
      }
    }
  }, [activeIndex, isReady, items]);

  if (items.length === 0) {
    return null; 
  }

  const handleItemClick = (index: number, itemOnClick?: () => void) => {
    setActiveIndex(index);
    onTabChange?.(index);
    itemOnClick?.();
  };

  return (
    <div className="relative">
      <nav className={`relative inline-flex items-center h-16 rounded-lg bg-card text-foreground border px-1 sm:px-2 overflow-x-auto overflow-y-visible ${className}`}>
        {items.map(({ id, icon, label, onClick }, index) => (
            <a
              key={id}
              ref={el => (navItemRefs.current[index] = el)}
              className={`relative z-20 flex h-full cursor-pointer items-center justify-center p-2 sm:p-3 md:p-5 min-w-[40px] ${iconContainerClassName}`}
              onClick={() => handleItemClick(index, onClick)}
              aria-label={label}
            >
              {cloneElement(icon, {
                className: `w-6 h-6 transition-opacity duration-100 ease-in-out ${
                  activeIndex === index ? 'opacity-100' : 'opacity-40'
                } ${icon.props.className || ''} ${iconClassName || ''}`,
              })}
            </a>
        ))}

        <div 
          ref={limelightRef}
          className={`absolute top-0 z-10 w-11 h-[5px] rounded-full bg-primary ${
            isReady ? 'transition-[left] duration-400 ease-in-out' : ''
          } ${limelightClassName}`}
          style={{ left: '-999px' }}
        >
          {/* Enhanced diffused light effect extending outside nav */}
          <div className="absolute left-[-60%] top-[5px] w-[220%] h-20 [clip-path:polygon(10%_100%,20%_0,80%_0,90%_100%)] bg-gradient-to-b from-primary/40 via-primary/20 to-transparent pointer-events-none blur-sm" />
          <div className="absolute left-[-40%] top-[5px] w-[180%] h-16 [clip-path:polygon(15%_100%,25%_0,75%_0,85%_100%)] bg-gradient-to-b from-primary/60 via-primary/30 to-transparent pointer-events-none" />
          <div className="absolute left-[-30%] top-[5px] w-[160%] h-14 [clip-path:polygon(5%_100%,25%_0,75%_0,95%_100%)] bg-gradient-to-b from-primary/30 to-transparent pointer-events-none" />
        </div>
      </nav>
    </div>
  );
};