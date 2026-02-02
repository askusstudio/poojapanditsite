import { Navbar } from "@/components/Navbar";
import { HeroBanner } from "@/components/HeroBanner";
import { Footer } from "@/components/Footer";
import { PromoBanner } from "@/components/PromoBanner";
import { MarqueeText } from "@/components/MarqueeText";
import { WeddingPujaDetails } from "@/components/WeddingPujaDetails";
import { PujaInquiryForm } from "@/components/PujaInquiryForm";

export default function WeddingPujaPage() {
    return (
        <main className="min-h-screen bg-white">
            <PromoBanner />
            <Navbar />

            {/* Header / Hero Section */}
            <HeroBanner />

            {/* Mantra Marquee (Mantra slide section) */}
            <MarqueeText
                text="ॐ श्री गणेशाय नमः | ॐ नमो भगवते वासुदेवाय | ॐ नमः शिवाय"
                bg="bg-red-600"
                textColor="text-white"
                speed={20}
            />

            {/* Service Details (Product Info + Sub-categories) */}
            <WeddingPujaDetails />

            {/* Inquiry Form */}
            <PujaInquiryForm serviceName="Wedding Puja" />

            {/* Footer */}
            <Footer />
        </main>
    );
}
