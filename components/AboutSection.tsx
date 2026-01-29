"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section className="bg-white">
            {/* About Section with Background Image */}
            <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[650px] xl:min-h-[750px] overflow-hidden flex items-center justify-center">
                {/* Mobile Background Image */}
                <Image
                    src="/site-img/bg-img-aboutt2.png"
                    alt="About Us Background"
                    fill
                    className="object-contain md:hidden"
                    priority
                />
                {/* Desktop Background Image */}
                <Image
                    src="/site-img/about-img-desktopp.png"
                    alt="About Us Background"
                    fill
                    className="hidden md:block object-contain"
                    priority
                />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-black px-6 md:px-12 lg:px-20 py-12 md:py-16 text-center max-w-4xl mx-auto">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-serif tracking-tight">
                        About Us
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose font-medium px-2 md:px-6 lg:px-10">
                        Welcome to PanditJii.in, your trusted destination for authentic Vedic rituals and spiritual guidance.
                        We bridge the gap between ancient traditions and modern convenience, ensuring that every ceremony
                        is performed with the utmost devotion.
                    </p>
                </div>
            </div>

            {/* Our VIPRA Section */}
            <div className="mt-8 md:mt-12 lg:mt-16">
                <div className="w-full bg-[#F6700B] py-3 md:py-4 lg:py-5 mb-8">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center uppercase tracking-widest leading-none">
                        Our VIPRA
                    </h2>
                </div>
                <div className="w-full overflow-hidden py-4 md:py-8">
                    <motion.div
                        className="flex gap-10 md:gap-16 lg:gap-20 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {/* Two sets of images to create a seamless loop */}
                        {[...Array(2)].map((_, setIdx) => (
                            <React.Fragment key={setIdx}>
                                {[
                                    { label: "Festival Puja" },
                                    { label: "Wedding Puja" },
                                    { label: "Vaidik Puja" }
                                ].map((item, idx) => (
                                    <div key={`${setIdx}-${idx}`} className="flex flex-col items-center text-center w-[160px] sm:w-[220px] md:w-[280px] lg:w-[320px] flex-shrink-0">
                                        <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-xl border-2 md:border-4 border-white bg-white transition-all duration-500 hover:shadow-2xl hover:scale-105 mb-4 md:mb-6">
                                            <Image
                                                src="/site-img/vipra-img.png"
                                                alt={`Our VIPRA ${idx}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[#F6700B] font-extrabold text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest">
                                                {item.label}
                                            </span>
                                            <h3 className="text-slate-900 font-bold text-[10px] sm:text-sm md:text-base lg:text-lg leading-tight whitespace-nowrap">
                                                स्व. आचार्य पंडित चक्रधर शुक्ल
                                            </h3>
                                        </div>
                                        <p className="text-slate-600 font-medium text-[8px] sm:text-[10px] md:text-xs lg:text-sm mt-1">
                                            प्रतापगढ़ उत्तर प्रदेश
                                        </p>
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Our math Section */}
            <div className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12 max-w-4xl lg:max-w-5xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 md:mb-8 lg:mb-10 tracking-tight font-serif">
                    Our Math
                </h2>
                <div className="space-y-4 md:space-y-6 text-slate-600 leading-relaxed text-sm md:text-base lg:text-lg text-justify md:text-center">
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
