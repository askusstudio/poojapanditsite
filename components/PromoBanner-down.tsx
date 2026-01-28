"use client";

import { motion } from "framer-motion";

const trendingPoojas = [
    "ॐ गं गणपतये नमः",
    "ॐ नमो भगवते वासुदेवाय",
    "ॐ गृहप्रवेशाय नमः",
    "ॐ नक्षत्रेभ्यो नमः",
    "ॐ नमः शिवाय",
    "ॐ नवग्रहाय नमः",
    "ॐ सुदर्शनाय नमः",
    "ॐ ऐं सरस्वत्यै नमः",
];

export function PromoBanner() {
    return (
        <div className="w-full bg-[#F6700B] text-white py-2 overflow-hidden whitespace-nowrap z-30">
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
