import { Navbar } from "@/components/Navbar";
import { HeroBanner } from "@/components/HeroBanner";
import { HeroMarquee } from "@/components/HeroMarquee";
import { AboutJourneyVision } from "@/components/AboutJourneyVision";
import { Footer } from "@/components/Footer";
import { PromoBanner } from "@/components/PromoBanner";
import { Button } from "@/components/ui/button";
import { MarqueeText } from "@/components/MarqueeText";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <PromoBanner />
            <Navbar />

            {/* Hero Section */}
            <HeroBanner />
            {/* Action Buttons & WhatsApp Row */}
            <section className="px-4 py-6 md:py-8 lg:py-10 bg-white">
                <div className="max-w-4xl lg:max-w-5xl mx-auto flex items-center justify-between gap-6 md:gap-12 lg:gap-16">
                    <Button
                        className="flex-1 max-w-[180px] md:max-w-[200px] lg:max-w-[220px] h-8 md:h-10 lg:h-12 rounded-full bg-[#F6700B] hover:bg-[#d6620a] text-white font-semibold text-base md:text-lg lg:text-xl transition-all duration-200"
                    >
                        Track
                    </Button>

                    <Button
                        className="flex-1 max-w-[180px] md:max-w-[200px] lg:max-w-[220px] h-8 md:h-10 lg:h-12 rounded-full bg-[#F6700B] hover:bg-[#d6620a] text-white font-semibold text-base md:text-lg lg:text-xl transition-all duration-200"
                    >
                        Book
                    </Button>
                </div>
            </section>

            {/* Running Promo Banner */}
            <MarqueeText text="ॐ शिवाय नमः" bg="bg-[#F6700B]" textColor="text-white" speed={15} />

            {/* Content Sections */}
            <AboutJourneyVision />

            {/* Footer */}
            <Footer />
        </main>
    );
}
