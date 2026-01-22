"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import NextImage from "next/image";
import Link from "next/link";

export function Footer() {
    const [openSection, setOpenSection] = React.useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    const sections = [
        {
            id: "policy",
            title: "POLICY AND ENQUIRY",
            links: ["Privacy Policy", "Terms of Service", "Refund Policy", "Contact Us"],
        },
        {
            id: "info",
            title: "INFORMATION",
            links: ["About Us", "Media", "Careers", "Sustainability"],
        },
        {
            id: "about",
            title: "ABOUT US",
            links: ["Our Story", "The Team", "Our Heritage", "Press"],
        },
    ];

    return (
        <footer className="bg-[#dcd2c4] text-[#4a3a2a] pt-16 pb-8 px-4 md:px-8 border-t border-[#cbbca9]">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Logo Section */}
                <div className="flex flex-col items-center mb-6">
                    <div className="text-2xl md:text-5xl font-serif tracking-[0.2em] mb-2 text-center uppercase">
                        || VASTRANAND ||
                    </div>
                    <div className="text-sm italic tracking-widest text-[#6b5a4a]">
                        where tradition meets trend
                    </div>
                </div>

                {/* Vision Statement */}
                <p className="text-center max-w-2xl font-bold text-lg md:text-xl mb-10 leading-relaxed italic">
                    We also believe to work socially for the society along with the running business.
                </p>

                {/* Social Icons */}
                <div className="flex gap-6 mb-12">
                    {[
                        { icon: <FaFacebookF />, href: "#" },
                        { icon: <FaInstagram />, href: "#" },
                        { icon: <FaPinterestP />, href: "#" },
                        { icon: <FaYoutube />, href: "#" },
                        { icon: <FaLinkedinIn />, href: "#" },
                    ].map((social, idx) => (
                        <a
                            key={idx}
                            href={social.href}
                            className="w-10 h-10 rounded-full border border-[#4a3a2a] flex items-center justify-center hover:bg-[#4a3a2a] hover:text-[#dcd2c4] transition-all"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                {/* App Store Buttons */}
                <div className="flex gap-4 mb-16 flex-wrap justify-center">
                    <Link href="#" className="h-12 w-40 relative rounded-lg overflow-hidden flex items-center justify-center hover:scale-105 transition-transform">
                        <NextImage
                            src="/site-img/app-store.png"
                            alt="Download on App Store"
                            width={160}
                            height={48}
                            className="object-contain"
                        />
                    </Link>
                    <Link href="#" className="h-12 w-40 relative rounded-lg overflow-hidden flex items-center justify-center hover:scale-105 transition-transform">
                        <NextImage
                            src="/site-img/google-play.png"
                            alt="Get it on Google Play"
                            width={160}
                            height={48}
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Navigation Menus (Desktop Grid / Mobile Accordion) */}
                <div className="w-full border-t border-[#cbbca9] pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
                        {sections.map((section) => (
                            <div key={section.id} className="border-b md:border-b-0 border-[#cbbca9] last:border-b-0 pb-4 md:pb-0">
                                <button
                                    onClick={() => toggleSection(section.id)}
                                    className="w-full flex justify-between items-center md:cursor-default"
                                >
                                    <h3 className="text-sm font-bold tracking-[0.1em] uppercase py-2">
                                        {section.title}
                                    </h3>
                                    <span className="md:hidden">
                                        {openSection === section.id ? <IoRemoveOutline /> : <IoAddOutline />}
                                    </span>
                                </button>
                                <div className={`${openSection === section.id ? "block" : "hidden"} md:block mt-2`}>
                                    <ul className="flex flex-col gap-2">
                                        {section.links.map((link, i) => (
                                            <li key={i}>
                                                <Link href="#" className="text-sm hover:underline opacity-80">
                                                    {link}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 text-[10px] md:text-sm text-center opacity-70 tracking-widest border-t border-[#cbbca9] w-full pt-8">
                    Copyright 2024 © <span className="font-bold">Vastranand Private Limited.</span> All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
