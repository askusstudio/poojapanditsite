import { Navbar } from "@/components/Navbar";
import { HeroBanner } from "@/components/HeroBanner";
import { Footer } from "@/components/Footer";
import { PromoBanner } from "@/components/PromoBanner";
import { ContactContent } from "@/components/ContactContent";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <PromoBanner />
            <Navbar />

            {/* Hero Section */}
            <HeroBanner />

            {/* Contact Content Section */}
            <ContactContent />

            {/* Footer */}
            <Footer />
        </main>
    );
}
