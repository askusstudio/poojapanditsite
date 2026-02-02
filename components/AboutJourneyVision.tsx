"use client";

import React from "react";
import Image from "next/image";

export function AboutJourneyVision() {
    return (
        <section className="bg-white">
            {/* Our Journey Section */}
            <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] overflow-hidden flex items-center justify-center">
                {/* Mobile Background Image */}
                <Image
                    src="/site-img/bg-img-aboutt2.png"
                    alt="Our Journey Background"
                    fill
                    className="object-contain md:hidden"
                    priority
                />
                {/* Desktop Background Image */}
                <Image
                    src="/site-img/about-img-desktopp.png"
                    alt="Our Journey Background"
                    fill
                    className="hidden md:block object-contain"
                    priority
                />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-black px-6 md:px-12 lg:px-20 py-12 md:py-16 text-center max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-serif tracking-tight">
                        Our Journey
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose font-medium px-2 md:px-6 lg:px-10">
                        From the sacred teachings of Pandit Acharya Chakradhar Shukla Ji to the digital revolution of Vedic rituals, our journey is one of faith, tradition, and innovation. What began as a local spiritual guidance has now evolved into India's largest Pandit Ji booking platform, serving thousands of devotees across the globe, bridging the gap between ancient wisdom and modern convenience.
                    </p>
                </div>
            </div>

            {/* Our Vision Section */}
            <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] overflow-hidden flex items-center justify-center mt-8 md:mt-0">
                {/* Mobile Background Image */}
                <Image
                    src="/site-img/bg-img-aboutt2.png"
                    alt="Our Vision Background"
                    fill
                    className="object-contain md:hidden"
                />
                {/* Desktop Background Image */}
                <Image
                    src="/site-img/about-img-desktopp.png"
                    alt="Our Vision Background"
                    fill
                    className="hidden md:block object-contain"
                />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-black px-6 md:px-12 lg:px-20 py-12 md:py-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-serif tracking-tight">
                        Our Vision
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose font-medium px-2 md:px-6 lg:px-10">
                        To preserve the sanctity of Vedic traditions while making them accessible to the modern world. We envision a future where every home can experience the divine power of authentic rituals, performed by learned scholars with pure intent and Vedic precision, fostering a more spiritual and connected society.
                    </p>
                </div>
            </div>
        </section>
    );
}
