import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Shield, Trophy, Lock } from 'lucide-react';

const ActionButton = () => {
  const handleScrollToPlans = () => {
    const plansSection = document.getElementById('plans');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center gap-6"
    >
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
        whileTap={{ scale: 0.98 }}
        animate={{
            scale: [1, 1.03, 1],
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="shadow-[0_5px_30px_rgba(0,255,102,0.4)] hover:shadow-[0_8px_45px_rgba(0,255,102,0.5)] rounded-xl transition-shadow duration-300"
      >
        <Button
          onClick={handleScrollToPlans}
          style={{ '--glow-color': '#00FF84' }}
          className="bg-[#00FF66] h-auto min-h-[52px] text-black font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#00dd5a] transition-all duration-300"
        >
          <Check className="w-6 h-6 mr-2" />
          APROVEITAR OFERTA
        </Button>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="flex flex-col items-center justify-center gap-4 text-white mt-2 font-poppins text-sm" 
        style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
        <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span>Satisfação Garantida</span>
            </div>
        </div>
        <div className="flex items-center gap-2">
          <Lock className="w-5 h-5 text-gray-300" />
          <span>Privacidade Protegida</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ActionButton;