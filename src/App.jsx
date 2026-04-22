import React from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import PlatformShowcase from "@/components/PlatformShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Plans from "@/components/Plans";
import Guarantee from "@/components/Guarantee";
import Footer from "@/components/Footer";
import SocialProof from "@/components/SocialProof";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppButton from "@/components/WhatsAppButton";

function App() {
  return (
    <>
      <Helmet>
        <title>Tenha Acesso a Todas as Séries!</title>
        <meta name="description" content="Tenha Acesso a Todas as Séries! DE MANEIRA SIMPLES E PRÁTICA, SEM PAGAR QUASE NADA!!!" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="min-h-screen bg-black text-white selection:bg-[#E50914] selection:text-white">
        <Header />
        <main>
          <PlatformShowcase />
          <WhyChooseUs />
          <Testimonials />
          <Plans />
          <Guarantee />
        </main>
        <Footer />
        <SocialProof />
        <Toaster />
        <WhatsAppButton phoneNumber="+5518996796654" />
      </div>
    </>
  );
}

export default App;