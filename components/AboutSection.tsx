"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section className="bg-white">
            {/* About Section with Background Image */}
            <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden">
                <Image
                    src="/site-img/bg-img-about1.png"
                    alt="About Us Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-black px-8 md:px-16 text-center">
                    <div className="max-w-xl md:max-w-3xl">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 font-serif tracking-tight">
                            About Us
                        </h1>
                        <p className="text-sm md:text-lg lg:text-xl leading-relaxed md:leading-loose font-medium px-4 md:px-10">
                            Welcome to PanditJii.in, your trusted destination for authentic Vedic rituals and spiritual guidance.
                            We bridge the gap between ancient traditions and modern convenience, ensuring that every ceremony
                            is performed with the utmost devotion.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our VIPRA Section */}
            <div className="mt-12 overflow-hidden">
                <div className="w-full bg-[#ef1b24] py-3 md:py-4 mb-8">
                    <h2 className="text-xl md:text-3xl font-bold text-black text-center uppercase tracking-widest">
                        Our VIPRA
                    </h2>
                </div>

                <div className="relative py-4">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="flex gap-4 md:gap-6 w-max"
                    >
                        {/* Duplicate images for seamless loop */}
                        {[1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3].map((item, index) => (
                            <div key={index} className="relative flex-shrink-0 w-[250px] md:w-[350px] aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-4 border-white/10">
                                <Image
                                    src={
                                        item === 1 ? "/site-img/vipra-img/WhatsApp Image 2026-01-24 at 8.39.48 PM (1).jpeg" :
                                            item === 2 ? "/site-img/vipra-img/WhatsApp Image 2026-01-24 at 8.39.48 PM (2).jpeg" :
                                                "/site-img/vipra-img/WhatsApp Image 2026-01-24 at 8.39.48 PM.jpeg"
                                    }
                                    alt={`VIPRA ${index}`}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Our math Section */}
            <div className="py-12 md:py-20 px-4 md:px-8 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight font-serif">
                    Our math
                </h2>
                <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base text-justify md:text-center">
                    <p>
                        Pandit Acharya Chakradhar Shukla Ji was a highly respected Vedic
                        scholar with over five decades of experience in performing Vedic
                        rituals (Karmkand), pujas, and delivering Bhagwat Kathas. He
                        conducted more than 100,000 Vedic ceremonies and over 100
                        Bhagwat Kathas, guiding countless devotees with spiritual wisdom,
                        discipline, and authenticity. Observing the difficulties people faced in
                        finding knowledgeable and trustworthy Pandits for religious
                        ceremonies, he envisioned a modern solution to preserve and extend
                        this sacred tradition.
                    </p>
                    <p>
                        Under his guidance, his grandson Rishabh
                        Shukla co-founded PanditJii.in, an online platform designed to
                        simplify the process of booking qualified and experienced Pandits for
                        various Vedic rituals and ceremonies, while maintaining the highest
                        standards of authenticity and precision. Pandit Acharya Chakradhar
                        Shukla Ji should not be confused with Acharya Ramchandra Shukla
                        (1884–1941), the renowned historian of Hindi literature.
                    </p>
                </div>
            </div>
        </section>
    );
}
