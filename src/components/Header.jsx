import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import VideoSection from '@/components/VideoSection';

const Header = () => {
  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      id="hero" 
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('https://horizons-cdn.hostinger.com/efa1de6f-091d-4d54-823a-b1f9a03d2947/69754b81584b698e4d59d8d3c1c763d4.jpg')",
        minHeight: 'calc(100vh - 40px)', // Reduced height slightly
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div
        className="relative z-10 flex flex-col justify-center items-center w-full text-center px-4 py-8"
      >
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center gap-y-4 md:gap-y-6 max-w-[90%] md:max-w-[720px] w-full"
        >
            <h1
              className="font-extrabold uppercase tracking-tighter font-montserrat text-[clamp(2rem,6vw,3.5rem)] leading-none"
              style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.7)' }}
            >
              <span className="text-[#FF2E2E]">TENHA ACESSO A TODAS</span>{' '}
              <span className="text-[#FFD700]">AS SÉRIES!</span>
            </h1>

            <div className="inline-block bg-black/70 rounded-md px-3 py-1">
              <p
                className="text-white/90 font-poppins text-[clamp(1rem,2.5vw,1.25rem)] leading-snug"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
              >
                DE MANEIRA SIMPLES E PRÁTICA, SEM PAGAR QUASE NADA!!!
              </p>
            </div>

            <div className="w-full my-4 scale-110">
                <VideoSection />
            </div>
            
            <div className="flex flex-col items-center w-full px-3 sm:px-0 mt-2">
                <button
                    onClick={scrollToPlans}
                    className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 h-[58px] sm:h-auto sm:py-4 text-base sm:text-lg font-bold text-white uppercase bg-[#00FF66] rounded-full transition-all duration-300 ease-in-out shadow-lg hover:shadow-green-400/50 focus:outline-none transform sm:hover:scale-110"
                >
                    <Check size={24} />
                    <span>Aproveitar Oferta</span>
                </button>

                <img 
                    src="https://horizons-cdn.hostinger.com/efa1de6f-091d-4d54-823a-b1f9a03d2947/bdb78dfe74955645eec1afe57a12ac5c.jpg" 
                    alt="Compra Segura, Satisfação Garantida, Privacidade Protegida. 100% de satisfação ou seu dinheiro de volta" 
                    className="mt-1 md:mt-2 w-full max-w-[280px] sm:max-w-[320px]"
                />
            </div>

        </motion.div>
      </div>
    </header>
  );
};

export default Header;