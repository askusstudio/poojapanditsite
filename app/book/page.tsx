import { Navbar } from "@/components/Navbar";
import { HeroBanner } from "@/components/HeroBanner";
import { Footer } from "@/components/Footer";
import { PromoBanner } from "@/components/PromoBanner";
import { MarqueeText } from "@/components/MarqueeText";
import { PujaInquiryForm } from "@/components/PujaInquiryForm";

export default function GeneralBookingPage({
    searchParams
}: {
    searchParams: { service?: string }
}) {
    const serviceName = searchParams.service || "Puja Service";

    return (
        <main className="min-h-screen bg-white">
            <PromoBanner />
            <Navbar />
            <HeroBanner />
            <MarqueeText
                text="ॐ श्री गणेशाय नमः | ॐ नमो नारायणाय | ॐ नमः शिवाय"
                bg="bg-red-600"
                textColor="text-white"
                speed={20}
            />

            <div className="py-12 px-4 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
                    Book {serviceName}
                </h1>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10">
                    Fill out the form below to book your {serviceName}. Our team of experienced pandits will ensure your ritual is performed with full Vedic authenticity.
                </p>
            </div>

            <PujaInquiryForm serviceName={serviceName} />
            <Footer />
        </main>
    );
}
