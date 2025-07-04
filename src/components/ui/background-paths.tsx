"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    // Create more paths with thinner strokes
    const paths = Array.from({ length: 80 }, (_, i) => ({
        id: i,
        d: `M-${400 - i * 2 * position} -${200 + i * 3}C-${
            400 - i * 2 * position
        } -${200 + i * 3} -${320 - i * 2 * position} ${220 - i * 3} ${
            160 - i * 2 * position
        } ${360 - i * 3}C${620 - i * 2 * position} ${480 - i * 3} ${
            700 - i * 2 * position
        } ${900 - i * 3} ${700 - i * 2 * position} ${900 - i * 3}`,
        delay: Math.random() * 20,
    }));

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
                        <stop offset="20%" stopColor="#ffc107" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#ffc107" stopOpacity="0.45" />
                        <stop offset="80%" stopColor="#ffc107" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#ffc107" stopOpacity="0" />
                    </linearGradient>
                </defs>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="url(#pathGradient)"
                        strokeWidth={0.6}
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 0],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 15,
                            repeat: Infinity,
                            ease: "linear",
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
            <div className="absolute inset-0 w-full h-full">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
                <FloatingPaths position={0.5} />
                <FloatingPaths position={-0.5} />
                <FloatingPaths position={1.5} />
                <FloatingPaths position={-1.5} />
            </div>
        </div>
    );
}
