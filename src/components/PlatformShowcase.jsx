import React from 'react';
import { motion } from 'framer-motion';

const PlatformShowcase = () => {
  const compositeImageUrl = "https://horizons-cdn.hostinger.com/efa1de6f-091d-4d54-823a-b1f9a03d2947/86243445a02ea00c31592a2690367260.png";

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="bg-black pt-6 md:pt-9">
      <motion.div 
        className="container mx-auto px-4 flex flex-col items-center max-w-[1200px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <img 
          src={compositeImageUrl} 
          alt="Plataforma DramasPlay em um computador e em celulares" 
          className="w-full h-auto rounded-lg shadow-2xl shadow-red-500/10"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default PlatformShowcase;