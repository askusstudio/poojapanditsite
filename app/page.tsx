import { PromoBanner } from "@/components/PromoBanner";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Nextimage from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { MarqueeText } from "@/components/MarqueeText";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <PromoBanner />
      <Navbar />
      {/* Hero Image Section */}
      <section className="w-full">
        <div className="relative w-full aspect-[820/312] md:aspect-[3/1]">
          <Nextimage
            src="/site-img/hero-banner.png"
            alt="Hero Banner"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Action Buttons & WhatsApp Row */}
      <section className="px-4 py-4 md:py-8 bg-white">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3 md:gap-10">
          <Button
            className="flex-1 max-w-[200px] h-6 md:h-8 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold text-lg md:text-xl shadow-[0_4px_0_0_rgba(161,130,0,1)] active:translate-y-1 active:shadow-none transition-all duration-100 uppercase"
          >
            Track
          </Button>

          <a
            href="https://wa.me/yournumber"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 md:p-3 bg-white rounded-full shadow-lg border border-slate-100 transform hover:scale-110 transition-transform duration-200"
          >
            {/* <FaWhatsapp className="text-3xl md:text-5xl text-green-500" /> */}
          </a>

          <Button
            className="flex-1 max-w-[200px] h-6 md:h-8 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold text-lg md:text-xl shadow-[0_4px_0_0_rgba(161,130,0,1)] active:translate-y-1 active:shadow-none transition-all duration-100 uppercase"
          >
            Book
          </Button>
        </div>
      </section>

      {/* Running Promo Banner */}
      <MarqueeText text="ॐ शिवाय नमः" bg="bg-red-600" textColor="text-white" speed={15} />

      {/* Secondary Banner Section */}
      <section className="w-full">
        <div className="relative w-full aspect-[820/312] md:aspect-[3/1]">
          <Nextimage
            src="/site-img/img2.webp"
            alt="Special Offer"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full aspect-[820/312] md:aspect-[3/1]">
          <Nextimage
            src="/site-img/img3.webp"
            alt="Special Offer"
            fill
            className="object-cover"
          />
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