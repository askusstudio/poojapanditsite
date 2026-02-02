import { Navbar } from "@/components/Navbar";
import { HeroBanner } from "@/components/HeroBanner";
import { Footer } from "@/components/Footer";
import { PromoBanner } from "@/components/PromoBanner";
import { MarqueeText } from "@/components/MarqueeText";
import { GenericPujaDetails } from "@/components/GenericPujaDetails";
import { PujaInquiryForm } from "@/components/PujaInquiryForm";

const trendingSubCategories = [
    { name: "Satyanarayan Katha", icon: "/site-img/logo.png" },
    { name: "Griha Pravesh", icon: "/site-img/logo.png" },
    { name: "Bhoomi Pujan", icon: "/site-img/logo.png" },
    { name: "Sunderkand Path", icon: "/site-img/logo.png" },
    { name: "Rudrabhishek", icon: "/site-img/logo.png" },
    { name: "Namkaran Sanskar", icon: "/site-img/logo.png" },
];

export default function TrendingPujaPage() {
    return (
        <main className="min-h-screen bg-white">
            <PromoBanner />
            <Navbar />
            <HeroBanner />
            <MarqueeText
                text="ॐ श्री गणेशाय नमः | ॐ नमो नारायणाय | ॐ हनुमते नमः"
                bg="bg-red-600"
                textColor="text-white"
                speed={20}
            />
            <GenericPujaDetails
                title="लोकप्रिय पूजा (Trending Pujas) – सर्वाधिक मांग"
                description="ये वे पवित्र अनुष्ठान हैं जिन्हें श्रद्धालु अपने सुख-समृद्धि और मंगल कार्यों के लिए सर्वाधिक पसंद करते हैं। गृह प्रवेश से लेकर सुंदरकांड तक, हम हर विशेष अवसर के लिए सर्वोत्तम पंडित सेवा सुनिश्चित करते हैं।"
                mainImage="/site-img/logo.png"
                subCategories={trendingSubCategories}
            />
            <PujaInquiryForm serviceName="Trending Pujas" />
            <Footer />
        </main>
    );
}
