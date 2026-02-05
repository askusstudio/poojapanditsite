"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PromoBanner } from "@/components/PromoBanner";
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaCheck } from "react-icons/fa";

// Comprehensive list of Poojas from the website
const PUJA_SPECIALIZATIONS = [
    { category: "Wedding Pujas", items: ["Engagement", "Vedic Jaimala", "Vedic Tilak", "Dwar Puja", "Janau Sanskar", "Shadi Sanskar"] },
    { category: "Festival Pujas", items: ["Diwali Puja", "Holi Puja", "Navratri Puja", "Ganesha Sthapana", "Chhath Puja", "Maha Shivratri"] },
    { category: "Trending Pujas", items: ["Satyanarayan Katha", "Griha Pravesh", "Bhoomi Pujan", "Sunderkand Path", "Rudrabhishek", "Namkaran Sanskar"] },
    { category: "Vedic Pujas", items: ["Sudarshana Homam", "Mrityunjaya Jap", "Rudra Abhishekam", "Gayatri Mantra Jap", "Navagraha Shanti", "Vedic Path"] },
];

export default function JoinPanditPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        secondName: "",
        email: "",
        mobile: "",
        experience: "",
        specializations: [] as string[],
        fullAddress: "",
        serviceArea: "",
        educationalDegree: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const handleSpecializationToggle = (puja: string) => {
        setFormData(prev => ({
            ...prev,
            specializations: prev.specializations.includes(puja)
                ? prev.specializations.filter(p => p !== puja)
                : [...prev.specializations, puja]
        }));
        if (errors.specializations) {
            setErrors(prev => ({ ...prev, specializations: "" }));
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.secondName.trim()) newErrors.secondName = "Second name is required";
        if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
        else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/\s/g, ''))) {
            newErrors.mobile = "Please enter a valid 10-digit mobile number";
        }
        if (!formData.experience.trim()) newErrors.experience = "Experience is required";
        if (formData.specializations.length === 0) newErrors.specializations = "Please select at least one specialization";
        if (!formData.fullAddress.trim()) newErrors.fullAddress = "Full address is required";
        if (!formData.serviceArea.trim()) newErrors.serviceArea = "Service area is required";
        if (!formData.educationalDegree.trim()) newErrors.educationalDegree = "Educational degree is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) {
            const firstError = document.querySelector('.text-red-500');
            firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitSuccess(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen bg-slate-50">
            <PromoBanner />
            <Navbar />

            {/* Hero Section for the Page */}
            <section className="bg-gradient-to-b from-red-600 to-red-700 py-16 md:py-24 text-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Join Our Panditji Network</h1>
                    <p className="text-xl md:text-2xl text-red-50 max-w-3xl mx-auto font-light leading-relaxed">
                        Become a part of our spiritual community and share your Vedic expertise with devotees across the country.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-12 md:py-20 px-4 -mt-12">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100">
                        {submitSuccess ? (
                            <div className="p-12 text-center animate-in fade-in zoom-in duration-500">
                                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-200">
                                    <FaCheck className="text-white text-4xl" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-serif">Registration Received!</h2>
                                <p className="text-slate-600 text-lg mb-8">
                                    Thank you for your interest. Our team will verify your details and contact you shortly.
                                </p>
                                <button
                                    onClick={() => setSubmitSuccess(false)}
                                    className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
                                >
                                    Submit Another
                                </button>
                            </div>
                        ) : (
                            <div className="p-8 md:p-12">
                                <div className="mb-10 text-center">
                                    <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-2 block">Professional Registration</span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">Pandit ji Enrollment Form</h2>
                                    <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    {/* Personal Information Group */}
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-slate-800 flex items-center border-l-4 border-red-600 pl-4 py-1">
                                            Personal Details
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                                    <FaUser className="text-red-600" /> First Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    placeholder="e.g., Ram"
                                                    className={`w-full px-5 py-3.5 rounded-2xl border-2 ${errors.firstName ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white focus:border-red-500'} focus:ring-4 focus:ring-red-100 outline-none transition-all`}
                                                />
                                                {errors.firstName && <p className="text-red-500 text-xs font-semibold">{errors.firstName}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                                    <FaUser className="text-red-600" /> Second Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="secondName"
                                                    value={formData.secondName}
                                                    onChange={handleInputChange}
                                                    placeholder="e.g., Sharma"
                                                    className={`w-full px-5 py-3.5 rounded-2xl border-2 ${errors.secondName ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white focus:border-red-500'} focus:ring-4 focus:ring-red-100 outline-none transition-all`}
                                                />
                                                {errors.secondName && <p className="text-red-500 text-xs font-semibold">{errors.secondName}</p>}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                                    <FaEnvelope className="text-red-600" /> Email <span className="text-slate-400 font-normal">(Optional)</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="example@email.com"
                                                    className="w-full px-5 py-3.5 rounded-2xl border-2 border-slate-200 bg-white focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                                    <FaPhone className="text-red-600" /> Mobile No <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="mobile"
                                                    value={formData.mobile}
                                                    onChange={handleInputChange}
                                                    placeholder="10-digit mobile number"
                                                    className={`w-full px-5 py-3.5 rounded-2xl border-2 ${errors.mobile ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white focus:border-red-500'} focus:ring-4 focus:ring-red-100 outline-none transition-all`}
                                                />
                                                {errors.mobile && <p className="text-red-500 text-xs font-semibold">{errors.mobile}</p>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Professional Experience Group */}
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-slate-800 flex items-center border-l-4 border-red-600 pl-4 py-1">
                                            Professional Details
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                                    <FaBriefcase className="text-red-600" /> Total Experience <span className="text-red-500">*</span>
                                                </label>
                                                <select
                                                    name="experience"
                                                    value={formData.experience}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-5 py-3.5 rounded-2xl border-2 ${errors.experience ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white focus:border-red-500'} focus:ring-4 focus:ring-red-100 outline-none transition-all appearance-none cursor-pointer`}
                                                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23DC2626\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '1.25rem' }}
                                                >
                                                    <option value="">Select experience</option>
                                                    <option value="0-2 years">0-2 years</option>
                                                    <option value="2-5 years">2-5 years</option>
                                                    <option value="5-10 years">5-10 years</option>
                                                    <option value="10-15 years">10-15 years</option>
                                                    <option value="15+ years">15+ years</option>
                                                </select>
                                                {errors.experience && <p className="text-red-500 text-xs font-semibold">{errors.experience}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                                    <FaGraduationCap className="text-red-600" /> Educational Degree <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="educationalDegree"
                                                    value={formData.educationalDegree}
                                                    onChange={handleInputChange}
                                                    placeholder="e.g., Acharya, Shastri"
                                                    className={`w-full px-5 py-3.5 rounded-2xl border-2 ${errors.educationalDegree ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white focus:border-red-500'} focus:ring-4 focus:ring-red-100 outline-none transition-all`}
                                                />
                                                {errors.educationalDegree && <p className="text-red-500 text-xs font-semibold">{errors.educationalDegree}</p>}
                                            </div>
                                        </div>

                                        {/* Specialization Section */}
                                        <div className="space-y-4">
                                            <label className="text-sm font-bold text-slate-700 block">
                                                Areas of Specialization <span className="text-red-500">*</span>
                                                <span className="text-slate-400 font-normal ml-2 block sm:inline mt-1 sm:mt-0">(Select multiple poojas you can perform)</span>
                                            </label>

                                            <div className="bg-slate-50 rounded-[1.5rem] border-2 border-slate-100 p-6 space-y-8 max-h-[500px] overflow-y-auto no-scrollbar">
                                                {PUJA_SPECIALIZATIONS.map((category, catIdx) => (
                                                    <div key={catIdx} className="space-y-4">
                                                        <h4 className="text-red-600 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                                                            <span className="w-6 h-[2px] bg-red-600 rounded-full"></span>
                                                            {category.category}
                                                        </h4>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                                            {category.items.map((puja, pujaIdx) => (
                                                                <button
                                                                    key={pujaIdx}
                                                                    type="button"
                                                                    onClick={() => handleSpecializationToggle(puja)}
                                                                    className={`flex items-center gap-3 p-3.5 rounded-xl border-2 transition-all text-left ${formData.specializations.includes(puja)
                                                                            ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-200 ring-2 ring-red-100 ring-offset-1'
                                                                            : 'bg-white border-slate-100 text-slate-700 hover:border-red-200 hover:bg-red-50'
                                                                        }`}
                                                                >
                                                                    <div className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${formData.specializations.includes(puja) ? 'bg-white text-red-600' : 'bg-slate-100 text-transparent'
                                                                        }`}>
                                                                        <FaCheck className="text-[10px]" />
                                                                    </div>
                                                                    <span className="text-xs sm:text-sm font-bold">{puja}</span>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            {errors.specializations && <p className="text-red-500 text-xs font-semibold">{errors.specializations}</p>}
                                        </div>
                                    </div>

                                    {/* Location Group */}
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-slate-800 flex items-center border-l-4 border-red-600 pl-4 py-1">
                                            Location & Reach
                                        </h3>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                                <FaMapMarkerAlt className="text-red-600" /> Full Address <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                name="fullAddress"
                                                value={formData.fullAddress}
                                                onChange={handleInputChange}
                                                placeholder="Enter your complete house address"
                                                rows={3}
                                                className={`w-full px-5 py-3.5 rounded-2xl border-2 ${errors.fullAddress ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white focus:border-red-500'} focus:ring-4 focus:ring-red-100 outline-none transition-all resize-none`}
                                            />
                                            {errors.fullAddress && <p className="text-red-500 text-xs font-semibold">{errors.fullAddress}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                                <FaMapMarkerAlt className="text-red-600" /> Preferred Service Area <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="serviceArea"
                                                value={formData.serviceArea}
                                                onChange={handleInputChange}
                                                placeholder="e.g., Lucknow, Allahabad, Local (Pratapgarh)"
                                                className={`w-full px-5 py-3.5 rounded-2xl border-2 ${errors.serviceArea ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white focus:border-red-500'} focus:ring-4 focus:ring-red-100 outline-none transition-all`}
                                            />
                                            {errors.serviceArea && <p className="text-red-500 text-xs font-semibold">{errors.serviceArea}</p>}
                                        </div>
                                    </div>

                                    {/* Submission */}
                                    <div className="pt-6">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-[1.01] hover:from-red-700 hover:to-red-800 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center gap-3">
                                                    <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Processing Registration...
                                                </span>
                                            ) : (
                                                <span className="flex items-center justify-center gap-2 text-xl">
                                                    Register as Pandit Ji
                                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                                </span>
                                            )}
                                        </button>
                                        <p className="text-center text-slate-400 text-xs mt-6">
                                            By submitting, you agree to our terms of service and spiritual conduct guidelines.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
