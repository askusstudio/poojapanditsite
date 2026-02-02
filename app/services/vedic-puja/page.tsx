import { Navbar } from "@/components/Navbar";
import { HeroBanner } from "@/components/HeroBanner";
import { Footer } from "@/components/Footer";
import { PromoBanner } from "@/components/PromoBanner";
import { MarqueeText } from "@/components/MarqueeText";
import { GenericPujaDetails } from "@/components/GenericPujaDetails";
import { PujaInquiryForm } from "@/components/PujaInquiryForm";

const vedicSubCategories = [
    { name: "Sudarshana Homam", icon: "/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__01_01_15_PM-removebg-preview.png" },
    { name: "Mrityunjaya Jap", icon: "/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__01_01_15_PM-removebg-preview.png" },
    { name: "Rudra Abhishekam", icon: "/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__01_01_15_PM-removebg-preview.png" },
    { name: "Gayatri Mantra Jap", icon: "/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__01_01_15_PM-removebg-preview.png" },
    { name: "Navagraha Shanti", icon: "/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__01_01_15_PM-removebg-preview.png" },
    { name: "Vedic Path", icon: "/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__01_01_15_PM-removebg-preview.png" },
];

export default function VedicPujaPage() {
    return (
        <main className="min-h-screen bg-white">
            <PromoBanner />
            <Navbar />
            <HeroBanner />
            <MarqueeText
                text="ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्"
                bg="bg-red-600"
                textColor="text-white"
                speed={20}
            />
            <GenericPujaDetails
                title="वैदिक पूजा (Vedic Puja) – प्राचीन परंपरा"
                description="वेदों में वर्णित प्राचीन विधियों के अनुसार की जाने वाली पूजा जातक के जीवन में आध्यात्मिक और भौतिक उन्नति प्रदान करती है। हमारे विद्वान पंडित शुद्ध वैदिक उच्चारण और पूर्ण श्रद्धा के साथ इन अनुष्ठानों को पूर्ण करते हैं।"
                mainImage="/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__01_01_15_PM-removebg-preview.png"
                subCategories={vedicSubCategories}
            />
            <PujaInquiryForm serviceName="Vedic Puja" />
            <Footer />
        </main>
    );
}
