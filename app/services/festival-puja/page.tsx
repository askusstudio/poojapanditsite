import { Navbar } from "@/components/Navbar";
import { HeroBanner } from "@/components/HeroBanner";
import { Footer } from "@/components/Footer";
import { PromoBanner } from "@/components/PromoBanner";
import { MarqueeText } from "@/components/MarqueeText";
import { GenericPujaDetails } from "@/components/GenericPujaDetails";
import { PujaInquiryForm } from "@/components/PujaInquiryForm";

const festivalSubCategories = [
    { name: "Diwali Puja", icon: "/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__12_58_52_PM-removebg-preview.png" },
    { name: "Holi Puja", icon: "/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__12_58_52_PM-removebg-preview.png" },
    { name: "Navratri Puja", icon: "/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__12_58_52_PM-removebg-preview.png" },
    { name: "Ganesha Sthapana", icon: "/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__12_58_52_PM-removebg-preview.png" },
    { name: "Chhath Puja", icon: "/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__12_58_52_PM-removebg-preview.png" },
    { name: "Maha Shivratri", icon: "/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__12_58_52_PM-removebg-preview.png" },
];

export default function FestivalPujaPage() {
    return (
        <main className="min-h-screen bg-white">
            <PromoBanner />
            <Navbar />
            <HeroBanner />
            <MarqueeText
                text="ॐ महालक्ष्म्यै नमः | ॐ शिवाय नमः | ॐ गँ गणपतये नमः"
                bg="bg-red-600"
                textColor="text-white"
                speed={20}
            />
            <GenericPujaDetails
                title="त्योहार पूजा (Festival Puja) – भक्ति और उल्लास"
                description="भारतीय संस्कृति में त्योहारों का विशेष महत्व है। सही विधि-विधान और पवित्र मंत्रोच्चार के साथ की गई पूजा सुख, समृद्धि और शांति लाती है। हम आपके सभी प्रमुख त्योहारों के लिए अनुभवी पंडितों की सेवाएं प्रदान करते हैं।"
                mainImage="/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__12_58_52_PM-removebg-preview.png"
                subCategories={festivalSubCategories}
            />
            <PujaInquiryForm serviceName="Festival Puja" />
            <Footer />
        </main>
    );
}
