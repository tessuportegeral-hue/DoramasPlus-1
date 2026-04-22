import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const SocialProof = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [notification, setNotification] = useState({ message: '' });

  const names = ["Yasmin", "Lucas", "Ana", "Gabriel", "Júlia", "Pedro", "Mariana", "Felipe", "Bianca", "João", "Camila", "Gustavo", "Letícia", "Rafael", "Vitória", "Bruno", "Isabela", "Matheus", "Fernanda", "Daniel"];
  const plans = ["Plano Básico", "Plano Intermediário", "Plano Premium"];
  const emojis = ["✨", "🔥", "🚀", "💖"];

  const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const generateNotification = () => {
    const name = getRandomItem(names);
    const plan = getRandomItem(plans);
    const emoji = getRandomItem(emojis);
    
    return { 
      message: `${name} acabou de comprar o ${plan} ${emoji}`
    };
  };

  useEffect(() => {
    const showNotification = () => {
      setNotification(generateNotification());
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    const interval = setInterval(() => {
      showNotification();
    }, 45000);

    const initialTimeout = setTimeout(showNotification, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 w-full sm:w-auto flex justify-center sm:justify-end pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50, transition: { duration: 0.5 } }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="pointer-events-auto"
          >
            <div className="flex items-center gap-3 bg-black/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-3 shadow-lg shadow-black/50">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <p className="text-sm text-white font-poppins">{notification.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialProof;