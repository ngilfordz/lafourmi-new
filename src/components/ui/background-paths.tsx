"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    // Create more synchronized, flowing paths
    const paths = Array.from({ length: 60 }, (_, i) => {
        const offset = i * 8 * position;
        const wave = Math.sin(i * 0.1) * 100;
        const flow = Math.cos(i * 0.15) * 150;
        
        return {
            id: i,
            d: `M-${400 + offset} ${100 + wave + i * 4}C${200 + offset + flow} ${150 + wave + i * 4} ${400 + offset + flow} ${200 + wave + i * 4} ${800 + offset} ${250 + wave + i * 4}C${1000 + offset - flow} ${300 + wave + i * 4} ${1200 + offset - flow} ${350 + wave + i * 4} ${1400 + offset} ${400 + wave + i * 4}`,
            delay: (i % 6) * 2, // More synchronized grouping
            duration: 25 + (i % 3) * 5, // Varied but harmonious durations
        };
    });

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1000 600"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                style={{ minHeight: '100vh', minWidth: '100vw' }}
            >
                <defs>
                    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ffc107" stopOpacity="0" />
                        <stop offset="20%" stopColor="#ffc107" stopOpacity="0.15" />
                        <stop offset="50%" stopColor="#ffc107" stopOpacity="0.25" />
                        <stop offset="80%" stopColor="#ffc107" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#ffc107" stopOpacity="0" />
                    </linearGradient>
                </defs>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="url(#pathGradient)"
                        strokeWidth={0.8}
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 0],
                            opacity: [0, 0.4, 0],
                        }}
                        transition={{
                            duration: path.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: path.delay,
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
            <div className="absolute inset-0 w-full h-full opacity-60">
                {/* Primary flowing layer */}
                <FloatingPaths position={1} />
                <FloatingPaths position={-0.8} />
                <FloatingPaths position={0.6} />
                
                {/* Secondary synchronized layer */}
                <FloatingPaths position={-1.2} />
                <FloatingPaths position={1.4} />
                <FloatingPaths position={-0.4} />
                
                {/* Tertiary harmony layer */}
                <FloatingPaths position={0.2} />
                <FloatingPaths position={-1.6} />
            </div>
        </div>
    );
}
