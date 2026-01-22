"use client";

import { motion } from "framer-motion";

interface MarqueeTextProps {
    text: string;
    bg?: string;
    textColor?: string;
    speed?: number;
}

export function MarqueeText({
    text,
    bg = "bg-red-600",
    textColor = "text-white",
    speed = 10
}: MarqueeTextProps) {
    return (
        <div className={`w-full ${bg} ${textColor} py-1.5 overflow-hidden whitespace-nowrap`}>
            <div className="flex">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: speed,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-4 items-center"
                >
                    {/* Create multiple copies for smooth continuous loop */}
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span className="text-lg font-bold">
                                {text}
                            </span>
                            <span className="opacity-50">•</span>
                        </div>
                    ))}
                    {[...Array(10)].map((_, i) => (
                        <div key={`dup-${i}`} className="flex items-center gap-4">
                            <span className="text-lg font-bold">
                                {text}
                            </span>
                            <span className="opacity-50">•</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
