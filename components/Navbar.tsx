"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HiMenuAlt1, HiSearch } from "react-icons/hi";
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
    "EVIL EYES",
    "ONLINE CONSULTATION",
    "TRENDING PUJAS",
    "VASTU",
    "WEDDING PUJAS",
    "FESTIVAL PUJAS",
    "VEDIC PUJAS",
    "ABOUT US",
    "CONTACT",
];

export function Navbar() {
    const [showBookingServices, setShowBookingServices] = React.useState(false);
    const [showTrendingPuja, setShowTrendingPuja] = React.useState(false);

    return (
        <nav className="w-full bg-white/95 backdrop-blur-md border-b border-orange-100 flex flex-col sticky top-0 z-40 transition-all duration-300">
            {/* Main Header Row */}
            <div className="h-20 px-4 md:px-8 flex items-center justify-between max-w-7xl mx-auto w-full">
                {/* Left: Mobile Toggle / Desktop Search */}
                <div className="flex-1 flex items-center">
                    {/* Mobile Menu Toggle (only visible on mobile) */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="hover:bg-orange-50 text-orange-600">
                                    <HiMenuAlt1 className="h-8 w-8 text-2xl" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="p-0 border-r-0 w-[85vw] sm:w-[400px] max-w-[400px] bg-transparent overflow-y-auto">
                                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                                {/* Background Image Container with proper sizing */}
                                <div className="absolute inset-0 h-full w-full overflow-hidden">
                                    <div
                                        className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat opacity-95"
                                        style={{
                                            backgroundImage: "url('/site-img/side-img.png')"
                                        }}
                                    />
                                </div>

                                {/* Content Container with scrolling */}
                                <div className="relative z-10 flex flex-col h-full overflow-y-auto p-4 pt-6 pb-6">
                                    <div className="flex flex-col gap-3">
                                        {/* Logo Section */}
                                        <div className="flex  mb-1 mt-14">
                                            <Image src="/site-img/logo.png" alt="Logo" width={90} height={90} className="object-contain" />
                                        </div>

                                        {/* Book APPOINTMENT Section */}
                                        <div className="space-y-1.5">
                                            <button
                                                onClick={() => setShowBookingServices(!showBookingServices)}
                                                className="w-full text-left text-base font-bold flex items-center gap-2 text-slate-800 hover:text-orange-600 transition-colors"
                                            >
                                                Book APPOINTMENT <span className="text-orange-500 font-extrabold">{showBookingServices ? '−' : '+'}</span>
                                            </button>
                                            {showBookingServices && (
                                                <div className="grid grid-cols-2 gap-2.5 pt-1.5 animate-in fade-in slide-in-from-top-2 duration-300">
                                                    <Link href="/book?service=Evil%20Eyes" className="flex flex-col items-center text-center group">
                                                        <div className="relative w-11 h-11 mb-1">
                                                            <Image src="/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__04_49_22_PM-removebg-preview-removebg-preview.png" alt="Evil Eyes" fill className="object-contain" />
                                                        </div>
                                                        <span className="text-[8px] font-bold uppercase tracking-tight leading-tight">Evil EYS</span>
                                                    </Link>
                                                    <Link href="/book?service=Online%20Consultation" className="flex flex-col items-center text-center group">
                                                        <div className="relative w-11 h-11 mb-1">
                                                            <Image src="/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__04_49_22_PM-removebg-preview-removebg-preview.png" alt="Online Consultant" fill className="object-contain" />
                                                        </div>
                                                        <span className="text-[8px] font-bold uppercase tracking-tight leading-tight">Online Consultant</span>
                                                    </Link>
                                                </div>
                                            )}
                                        </div>

                                        {/* Trending Puja Section */}
                                        <div className="space-y-1.5">
                                            <button
                                                onClick={() => setShowTrendingPuja(!showTrendingPuja)}
                                                className="w-full text-left text-base font-bold flex items-center gap-2 text-slate-800 hover:text-orange-600 transition-colors"
                                            >
                                                Trending Puja <span className="text-orange-500 font-extrabold">{showTrendingPuja ? '−' : '+'}</span>
                                            </button>
                                            {showTrendingPuja && (
                                                <div className="grid grid-cols-4 gap-1 pt-1.5 animate-in fade-in slide-in-from-top-2 duration-300">
                                                    {[
                                                        { name: "Vedic Jamala", link: "/services/wedding-puja" },
                                                        { name: "Vedic Tilak", link: "/services/wedding-puja" },
                                                        { name: "Rudra Abhishek", link: "/services/trending-pujas" },
                                                        { name: "Girih Pravesh", link: "/services/trending-pujas" }
                                                    ].map((p, i) => (
                                                        <Link key={i} href={p.link} className="flex flex-col items-center text-center">
                                                            <div className="relative w-8 h-8 mb-0.5">
                                                                <Image src="/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__04_49_22_PM-removebg-preview-removebg-preview.png" alt={p.name} fill className="object-contain" />
                                                            </div>
                                                            <span className="text-[6.5px] font-bold uppercase leading-tight">{p.name}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Main Links */}
                                        <div className="flex flex-col gap-2.5 border-t border-orange-200 pt-3 mt-1.5">
                                            {[
                                                { label: "WEDDING +", href: "/services/wedding-puja" },
                                                { label: "FESTIVAL +", href: "/services/festival-puja" },
                                                { label: "VEDIC +", href: "/services/vedic-puja" },
                                                { label: "ABOUT", href: "/about" },
                                                { label: "CONTACT", href: "/contact" }
                                            ].map((item, index) => (
                                                <Link
                                                    key={index}
                                                    href={item.href}
                                                    className="text-sm font-bold text-slate-800 hover:text-orange-600 transition-colors uppercase"
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>

                                        {/* Join Button */}
                                        <div className="mt-3">
                                            <Link
                                                href="/join-pandit"
                                                className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold text-center py-2.5 px-5 rounded-full transition-all duration-300 shadow-lg"
                                            >
                                                <span className="text-sm">Join As A Pandit ji</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Desktop Search (Hidden on Mobile) */}
                    <div className="hidden md:flex items-center bg-orange-50/50 border border-orange-100 rounded-lg px-4 py-2 w-72 focus-within:ring-2 focus-within:ring-orange-200 transition-all">
                        <HiSearch className="text-orange-400 text-xl mr-2" />
                        <input
                            placeholder="What are you looking for?"
                            className="bg-transparent text-sm outline-none border-none placeholder:text-orange-300 w-full text-slate-700"
                        />
                    </div>
                </div>

                {/* Center: Logo */}
                <div className="flex-1 flex justify-center">
                    <Link href="/" className="group flex flex-col items-center">
                        <div className="relative w-32 h-12 md:w-48 md:h-16 transition-all group-hover:scale-105">
                            <Image
                                src="/site-img/logo.png"
                                alt="POOJAPANDIT Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>
                </div>

                {/* Right: Social & Functional Icons */}
                <div className="flex-1 flex items-center justify-end gap-2 md:gap-5">
                    {/* Socials (hidden on very small screens, responsive on desktop) */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a href="#" className="text-slate-400 hover:text-orange-600 transition-colors"><FaInstagram /></a>
                        <a href="#" className="text-slate-400 hover:text-orange-600 transition-colors"><FaFacebookF /></a>
                    </div>

                    {/* Functional Icons (Like in image) */}
                    <div className="flex items-center gap-4">
                        <button className="text-slate-600 hover:text-orange-600 transition-colors hidden sm:block">
                            <FaRegHeart className="text-xl" />
                        </button>
                        <button className="text-slate-600 hover:text-orange-600 transition-colors">
                            <FaRegUser className="text-xl" />
                        </button>
                        <button className="relative text-slate-600 hover:text-orange-600 transition-colors">
                            <IoBagOutline className="text-2xl" />
                            <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                0
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop Navigation Categories (Row 2) - Hidden on Mobile */}
            <div className="hidden md:flex border-t border-orange-50 px-8 py-3 bg-white/50 overflow-x-auto no-scrollbar">
                <div className="flex items-center justify-center gap-8 mx-auto">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={
                                item.toUpperCase() === "ABOUT US" ? "/about" :
                                    item.toUpperCase() === "CONTACT" ? "/contact" :
                                        item.toUpperCase() === "WEDDING PUJAS" ? "/services/wedding-puja" :
                                            item.toUpperCase() === "FESTIVAL PUJAS" ? "/services/festival-puja" :
                                                item.toUpperCase() === "VEDIC PUJAS" ? "/services/vedic-puja" :
                                                    item.toUpperCase() === "TRENDING PUJAS" ? "/services/trending-pujas" :
                                                        `/#${item.toLowerCase().replace(/\s+/g, '-')}`
                            }
                            className="text-[12px] font-bold text-slate-600 hover:text-orange-600 tracking-widest transition-colors whitespace-nowrap"
                        >
                            {item}
                        </Link>
                    ))}

                    {/* Join as Pandit Ji Button - Desktop */}
                    <Link
                        href="/join-pandit"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold text-[12px] py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg whitespace-nowrap tracking-wide"
                    >
                        JOIN AS PANDIT JI
                    </Link>
                </div>
            </div>
        </nav>
    );
}
