"use client";

import React from "react";
import Image from "next/image";

interface SubCategory {
    name: string;
    icon: string;
}

interface PujaDetailsProps {
    title: string;
    description: string;
    mainImage: string;
    subCategories: SubCategory[];
}

export function GenericPujaDetails({ title, description, mainImage, subCategories }: PujaDetailsProps) {
    return (
        <section className="bg-white py-12 px-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* Main Product Section */}
                <div className="flex flex-col items-center mb-12">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 border-[12px] border-double border-red-100 rounded-full p-2">
                        <Image
                            src={mainImage}
                            alt={title}
                            fill
                            className="object-contain rounded-full"
                        />
                    </div>

                    <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-serif">
                        {title}
                    </h1>

                    <p className="text-slate-600 text-sm md:text-base leading-relaxed px-4 max-w-2xl">
                        {description}
                    </p>
                </div>

                {/* Sub-categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-16">
                    {subCategories.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center group cursor-pointer">
                            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 transition-transform group-hover:scale-110">
                                <Image
                                    src={item.icon}
                                    alt={item.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-slate-800 font-bold text-sm md:text-lg tracking-tight">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
