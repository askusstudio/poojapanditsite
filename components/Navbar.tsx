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
    "BOOK PANDIT",
    "POOJA SERVICES",
    "HOROSCOPE",
    "VASTU",
    "ASTROLOGY",
    "RITUALS",
    "E-POOJA",
    "REVIEWS",
    "CONTACT",
];

export function Navbar() {
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
                            <SheetContent side="left" className="p-0 border-r-0 max-w-[400px] w-full bg-transparent overflow-hidden">
                                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                                <div
                                    className="absolute inset-0 h-full w-full bg-cover bg-center"
                                    style={{ backgroundImage: "url('/site-img/side-img.png')" }}
                                />

                                <div className="relative z-10 flex flex-col h-full p-8 pt-20">
                                    <div className="flex flex-col gap-6">
                                        <h2 className="text-4xl font-bold text-slate-800 mb-4 border-b-2 border-orange-500 pb-2 w-fit">
                                            Our     Services
                                        </h2>
                                        <div className="flex flex-col gap-4">
                                            {menuItems.map((item, index) => (
                                                <Link
                                                    key={index}
                                                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                    className="text-xl text-slate-700 hover:text-orange-600 transition-colors font-medium"
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="mt-12 text-slate-600">
                                            <p className="text-sm">Connect your path of spirituality.</p>
                                            <p className="text-sm font-semibold text-orange-600 mt-2">Available 24/7 for Booking</p>
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
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-[12px] font-bold text-slate-600 hover:text-orange-600 tracking-widest transition-colors whitespace-nowrap"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
