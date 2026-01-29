"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/site-img/banner-img/Ganesh Puja-1.webp",
    "/site-img/banner-img/Ganesh Puja-2.webp",
    "/site-img/banner-img/Ganesh Puja-3.webp",
    "/site-img/banner-img/Ganesh Puja-4.webp",
    "/site-img/banner-img/Ganesh Puja-5.webp",
    "/site-img/banner-img/Ganesh Puja-6.webp",
    "/site-img/banner-img/Ganesh Puja-7.webp",
    "/site-img/banner-img/Ganesh Puja-8.webp",
];

export function HeroBanner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full">
            <div className="relative w-full aspect-[820/383] md:aspect-[30/11] overflow-hidden">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentIndex}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.5 }
                        }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`Banner ${currentIndex + 1}`}
                            fill
                            priority
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Indicator Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-white w-6" : "bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
