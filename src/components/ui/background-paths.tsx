"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function FloatingPaths({ position, delay = 0 }: { position: number; delay?: number }) {
    const [hasScrolled, setHasScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10 && !hasScrolled) {
                setHasScrolled(true);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasScrolled]);
    
    // Create paths with yellow gradients
    const paths = Array.from({ length: 48 }, (_, i) => {
        const yellowShades = [
            '#FFC107', // Main yellow
            '#FFD54F', // Lighter yellow
            '#FFE082', // Even lighter
            '#FFF59D', // Pale yellow
            '#FFEB3B', // Bright yellow
            '#FF9800', // Orange-yellow
        ];
        
        return {
            id: i,
            d: `M${-400 + i * 15 * position} ${-200 + i * 8}
                Q${200 + i * 10 * position} ${100 + i * 5}
                ${600 + i * 8 * position} ${300 + i * 6}
                T${1200 + i * 6 * position} ${600 + i * 4}`,
            color: yellowShades[i % yellowShades.length],
            width: 0.8 + (i % 3) * 0.3,
            opacity: 0.15 + (i % 4) * 0.05,
        };
    });

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg
                className="w-full h-full"
                viewBox="0 0 1200 800"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    {paths.map((path) => (
                        <linearGradient
                            key={`gradient-${path.id}`}
                            id={`pathGradient-${path.id}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor={path.color} stopOpacity="0" />
                            <stop offset="20%" stopColor={path.color} stopOpacity={path.opacity * 0.6} />
                            <stop offset="50%" stopColor={path.color} stopOpacity={path.opacity} />
                            <stop offset="80%" stopColor={path.color} stopOpacity={path.opacity * 0.6} />
                            <stop offset="100%" stopColor={path.color} stopOpacity="0" />
                        </linearGradient>
                    ))}
                </defs>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke={`url(#pathGradient-${path.id})`}
                        strokeWidth={path.width}
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={hasScrolled ? {
                            pathLength: [0, 1],
                            opacity: [0, 1, 1, 0],
                        } : {}}
                        transition={{
                            pathLength: {
                                duration: 25 + Math.random() * 15,
                                repeat: Infinity,
                                ease: "linear",
                                delay: delay + path.id * 0.15,
                            },
                            opacity: {
                                duration: 25 + Math.random() * 15,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: delay + path.id * 0.15,
                            },
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths() {
    return (
        <div className="fixed inset-0 w-screen h-screen pointer-events-none z-[1] overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                <FloatingPaths position={1} delay={0} />
                <FloatingPaths position={-0.8} delay={2} />
                <FloatingPaths position={0.6} delay={4} />
                <FloatingPaths position={-0.4} delay={6} />
                <FloatingPaths position={1.2} delay={8} />
                <FloatingPaths position={-1} delay={10} />
            </div>
        </div>
    );
}
