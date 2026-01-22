"use client";

import React from "react";

export function AboutSection() {
    return (
        <section className="bg-white">
            {/* Our VIPRA Banner */}
            {/* <div className="w-full bg-[#e31e24] py-3 md:py-4 mb-10">
                <h2 className="text-xl md:text-3xl font-bold text-black text-center uppercase tracking-wider">
                    Our VIPRA
                </h2>
            </div> */}

            <div className="py-8 md:py-16 px-4 md:px-8 max-w-4xl mx-auto text-center">
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
