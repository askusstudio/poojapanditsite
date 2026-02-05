"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function ContactContent() {

    // Load Calendly widget script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, []);

    const contactInfo = [
        { icon: <FaMapMarkerAlt className="text-red-600" />, label: "Address", value: "Pratapgarh, Uttar Pradesh, India", href: "https://maps.google.com/?q=Pratapgarh,UttarPradesh" },
        { icon: <FaPhoneAlt className="text-red-600" />, label: "Mobile", value: "+91 99999 99999", href: "tel:+919999999999" },
        { icon: <FaEnvelope className="text-red-600" />, label: "Email", value: "contact@panditjii.in", href: "mailto:contact@panditjii.in" },
    ];

    const socialLinks = [
        { icon: <FaWhatsapp />, label: "WhatsApp", href: "https://wa.me/919999999999", color: "bg-green-500 hover:bg-green-600" },
        { icon: <FaInstagram />, label: "Instagram", href: "#", color: "bg-pink-600 hover:bg-pink-700" },
        { icon: <FaLinkedinIn />, label: "LinkedIn", href: "#", color: "bg-blue-700 hover:bg-blue-800" },
    ];

    return (
        <section className="py-12 md:py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Title & Description */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Contact Us</h1>
                    <p className="text-slate-600 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Have questions about our Vedic services or need assistance with a booking? Our team is here to guide you on your spiritual journey. Reach out to us through any of the channels below.
                    </p>
                </div>

                {/* Quick Action Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
                    <Button
                        className="h-14 md:h-16 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                    >
                        Business Inquiry
                    </Button>
                    <Link href="/join-pandit" className="w-full">
                        <Button
                            className="w-full h-14 md:h-16 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                        >
                            Join as Pandit Ji
                        </Button>
                    </Link>
                    <Button
                        className="h-14 md:h-16 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                    >
                        Book Pandit Ji
                    </Button>
                </div>

                {/* Contact & Social Info */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto bg-orange-50/50 p-8 md:p-12 rounded-3xl border border-orange-100 mb-16">
                    {/* Physical Details */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-slate-800 mb-6 font-serif border-b-2 border-red-600 w-fit pb-2">Get in Touch</h3>
                        <div className="space-y-6">
                            {contactInfo.map((info, idx) => (
                                <a
                                    key={idx}
                                    href={info.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 group hover:translate-x-2 transition-transform"
                                >
                                    <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-xl">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{info.label}</p>
                                        <p className="text-slate-700 font-semibold group-hover:text-red-600 transition-colors">{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social Channels */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-slate-800 mb-6 font-serif border-b-2 border-red-600 w-fit pb-2">Connect Digitally</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className={`flex items-center gap-4 p-4 rounded-2xl text-white font-bold transition-all shadow-md hover:shadow-lg hover:scale-105 ${social.color}`}
                                >
                                    <span className="text-2xl">{social.icon}</span>
                                    <span>{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Calendly Scheduling Section */}
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <FaCalendarAlt className="text-red-600 text-3xl" />
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 font-serif">Schedule an Appointment</h2>
                        </div>
                        <p className="text-slate-600 text-base max-w-xl mx-auto">
                            Book a 30-minute consultation call with our team to discuss your puja requirements.
                        </p>
                    </div>

                    {/* Calendly Inline Widget */}
                    <div className="bg-white rounded-3xl border-2 border-red-100 shadow-lg overflow-hidden">
                        <div
                            className="calendly-inline-widget"
                            data-url="https://calendly.com/vipravarofficial/30min?hide_event_type_details=1&hide_gdpr_banner=1&text_color=f57204&primary_color=ff0000"
                            style={{ minWidth: '320px', height: '700px' }}
                        />
                    </div>
                </div>
            </div>

        </section>
    );
}

