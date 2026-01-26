"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

export function HeroMarquee() {
    return (
        <section className="w-full overflow-hidden bg-slate-50 py-4">
            <div className="relative flex whitespace-nowrap">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-4 px-2"
                >
                    {/* First set of images */}
                    {images.map((src, index) => (
                        <div key={index} className="relative flex-shrink-0 w-[300px] md:w-[450px] aspect-[16/9] rounded-xl overflow-hidden shadow-md">
                            <Image
                                src={src}
                                alt={`Banner ${index}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                    {/* Duplicate set for seamless scrolling */}
                    {images.map((src, index) => (
                        <div key={`dup-${index}`} className="relative flex-shrink-0 w-[300px] md:w-[450px] aspect-[16/9] rounded-xl overflow-hidden shadow-md">
                            <Image
                                src={src}
                                alt={`Banner Duplicate ${index}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
