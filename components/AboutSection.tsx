"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section className="bg-[#F4E9E0]">
            {/* About Section with Background Image */}
            <div className="relative w-full min-h-[320px] md:min-h-[450px] lg:min-h-[550px] xl:min-h-[600px] overflow-hidden flex items-center justify-center">
                {/* Mobile Background Image */}
                <Image
                    src="/site-img/bg-img-about1.png"
                    alt="About Us Background"
                    fill
                    className="object-cover md:hidden"
                    priority
                />
                {/* Desktop Background Image */}
                <Image
                    src="/site-img/about-img-desktop.png"
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
                <div className="w-full bg-[#ef1b24] py-3 md:py-4 lg:py-5 mb-8">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black text-center uppercase tracking-widest leading-none">
                        Our VIPRA
                    </h2>
                </div>
                <div className="px-4 md:px-8 max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                    <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-slate-50 bg-slate-100">
                        <Image
                            src="/site-img/vipra-img.png"
                            alt="Our VIPRA"
                            fill
                            className="object-cover"
                        />
                    </div>
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
