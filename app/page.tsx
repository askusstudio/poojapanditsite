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
              className="object-contain"
            />
          </div>
          <div className="flex justify-start px-2 md:px-0">
            <Button
              className="ml-[10%] sm:ml-[15%] md:ml-[20%] w-fit px-4 md:px-8 h-8 md:h-10 lg:h-12 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold text-xs sm:text-sm md:text-base lg:text-lg shadow-[0_4px_0_0_rgba(161,130,0,1)] active:translate-y-1 active:shadow-none transition-all duration-100 uppercase"
            >
              Book an Appointment
            </Button>
          </div>

          {/* Three Images Section */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6">
            {[
              {
                title: "Festival",
                src: "/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__12_58_52_PM-removebg-preview.png",
                alt: "Festival Ritual",
              },
              {
                title: "Wedding",
                src: "/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__04_49_22_PM-removebg-preview-removebg-preview.png",
                alt: "Wedding Ritual",
              },
              {
                title: "Vedic",
                src: "/site-img/between-section-img/ChatGPT_Image_Jan_27__2026__01_01_15_PM-removebg-preview.png",
                alt: "Vedic Ritual",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 md:gap-3">
                <div className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
                  <Nextimage
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[#F6700B] font-extrabold text-xs sm:text-base md:text-lg lg:text-xl uppercase tracking-widest">
                  {item.title}
                </span>
                <Button
                  className="w-full max-w-[100px] md:max-w-[160px] lg:max-w-[200px] h-6 md:h-9 lg:h-11 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold text-[9px] sm:text-xs md:text-sm lg:text-base shadow-[0_2px_0_0_rgba(161,130,0,1)] md:shadow-[0_3px_0_0_rgba(161,130,0,1)] active:translate-y-0.5 active:shadow-none transition-all duration-100 uppercase"
                >
                  Book
                </Button>
              </div>
            ))}
          </div>
          <div className="relative w-full aspect-[820/312] md:aspect-[3/1] overflow-hidden">
            <Nextimage
              src="/site-img/22.png"
              alt="Special Offer"
              fill
              className="object-contain"
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