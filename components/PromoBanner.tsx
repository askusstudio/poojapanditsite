"use client";

import { motion } from "framer-motion";

const trendingPoojas = [
    "Maha Ganapathi Homam",
    "Satyanarayana Pooja",
    "Griha Pravesham",
    "Nakshatra Shanti",
    "Rudra Abhishek",
    "Navagraha Homam",
    "Sudarshana Homam",
    "Saraswati Pooja",
];

export function PromoBanner() {
    return (
        <div className="w-full bg-red-600 text-white py-2 overflow-hidden whitespace-nowrap z-30">
            <div className="flex">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-8 items-center px-4"
                >
                    {/* First set */}
                    {trendingPoojas.map((pooja, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span className="text-sm font-semibold uppercase tracking-wider">
                                Trending Pooja: {pooja}
                            </span>
                            <span className="text-orange-300">•</span>
                        </div>
                    ))}
                    {/* Second set for seamless loop */}
                    {trendingPoojas.map((pooja, index) => (
                        <div key={`dup-${index}`} className="flex items-center gap-2">
                            <span className="text-sm font-semibold uppercase tracking-wider">
                                Trending Pooja: {pooja}
                            </span>
                            <span className="text-orange-300">•</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
