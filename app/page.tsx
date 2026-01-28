import { PromoBanner } from "@/components/PromoBanner";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Nextimage from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { MarqueeText } from "@/components/MarqueeText";
import { HeroBanner } from "@/components/HeroBanner";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <PromoBanner />
      <Navbar />

      {/* Hero Banner Section */}
      <HeroBanner />

      {/* Action Buttons & WhatsApp Row */}
      <section className="px-4 py-2 md:py-3 lg:py-3 bg-white">
        <div className="max-w-4xl lg:max-w-5xl mx-auto flex items-center justify-between gap-3 md:gap-8 lg:gap-12">
          <Button
            className="flex-1 max-w-[180px] md:max-w-[200px] lg:max-w-[220px] h-8 md:h-10 lg:h-12 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold text-base md:text-lg lg:text-xl shadow-[0_4px_0_0_rgba(161,130,0,1)] active:translate-y-1 active:shadow-none transition-all duration-100 uppercase"
          >
            Track
          </Button>



          <Button
            className="flex-1 max-w-[180px] md:max-w-[200px] lg:max-w-[220px] h-8 md:h-10 lg:h-12 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold text-base md:text-lg lg:text-xl shadow-[0_4px_0_0_rgba(161,130,0,1)] active:translate-y-1 active:shadow-none transition-all duration-100 uppercase"
          >
            Book
          </Button>
        </div>
      </section>

      {/* Running Promo Banner */}
      <MarqueeText text="ॐ शिवाय नमः" bg="bg-[#F6700B]" textColor="text-white" speed={15} />

      {/* Secondary Banner Section */}
      <section className="w-full py-4 px-2 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-2 md:space-y-4">
          <div className="relative w-full aspect-[820/312] md:aspect-[3/1] overflow-hidden">
            <Nextimage
              src="/site-img/11.png"
              alt="Special Offer"
              fill
              className="object-cover"
            />
          </div>
          {/* Three Images Section */}
          <div className="grid grid-cols-3 gap-1 md:gap-4 lg:gap-6">
            <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
              <Nextimage
                src="/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__12_58_52_PM-removebg-preview.png"
                alt="Ritual 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
              <Nextimage
                src="/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__04_49_22_PM-removebg-preview-removebg-preview.png"
                alt="Ritual 2"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
              <Nextimage
                src="/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__01_01_15_PM-removebg-preview.png"
                alt="Ritual 3"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="relative w-full aspect-[820/312] md:aspect-[3/1] overflow-hidden">
            <Nextimage
              src="/site-img/22.png"
              alt="Special Offer"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sliding Marquee / Promo Banner */}


      {/* About Section */}
      <AboutSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}