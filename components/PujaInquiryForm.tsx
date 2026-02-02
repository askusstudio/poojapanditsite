"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface InquiryFormProps {
    serviceName?: string;
    isSubCategory?: boolean;
}

const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const services = [
    "Wedding Puja", "Vedic Puja", "Festival Puja", "Vastu Puja", "Online Consultation"
];

export function PujaInquiryForm({ serviceName, isSubCategory = false }: InquiryFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        location: "",
        service: serviceName || "",
        bookingDate: "",
        address: "",
        pincode: "",
        remark: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Thank you for your inquiry! Our team will contact you soon.");
    };

    return (
        <section className="py-12 px-4 bg-orange-50/30">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-orange-100">
                <div className="text-center mb-8">
                    <h2 className="text-red-600 font-bold text-sm tracking-widest uppercase mb-2">Book Service</h2>
                    <p className="text-slate-600 text-xs">Book a service now, we'll handle the rest.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            required
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="w-full px-4 py-3 rounded-lg border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                            onChange={handleChange}
                        />
                        <input
                            required
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            className="w-full px-4 py-3 rounded-lg border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            required
                            type="date"
                            name="bookingDate"
                            className="w-full px-4 py-3 rounded-lg border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm text-slate-500"
                            onChange={handleChange}
                        />
                        <select
                            required
                            name="service"
                            disabled={isSubCategory}
                            value={formData.service}
                            className="w-full px-4 py-3 rounded-lg border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm bg-white"
                            onChange={handleChange}
                        >
                            <option value="">Select Service</option>
                            {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select
                            required
                            name="location"
                            className="w-full px-4 py-3 rounded-lg border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm bg-white"
                            onChange={handleChange}
                        >
                            <option value="">Select State</option>
                            {states.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <input
                            required
                            type="text"
                            name="pincode"
                            placeholder="Pin Code"
                            className="w-full px-4 py-3 rounded-lg border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                            onChange={handleChange}
                        />
                    </div>

                    <input
                        required
                        type="text"
                        name="address"
                        placeholder="Full Physical Address"
                        className="w-full px-4 py-3 rounded-lg border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                        onChange={handleChange}
                    />

                    <textarea
                        name="remark"
                        placeholder="Special Remark (Optional)"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                        onChange={handleChange}
                    />

                    <div className="flex justify-center pt-4">
                        <Button
                            type="submit"
                            className="w-full max-w-xs bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-full text-base transition-all"
                        >
                            SUBMIT
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}
