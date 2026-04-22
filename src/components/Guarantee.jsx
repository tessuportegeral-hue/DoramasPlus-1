import React from 'react';
import { motion } from 'framer-motion';
import ActionButton from './ActionButton';

const Guarantee = () => {
  return (
    <section className="py-3 md:py-8 lg:py-12 px-4 bg-black">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
          <div className="flex justify-center items-center mb-4">
            <img 
              src="https://horizons-cdn.hostinger.com/efa1de6f-091d-4d54-823a-b1f9a03d2947/4fac9b1aca9db9e9f5b05104d1b74e2b.png"
              alt="Selo de garantia de 30 dias"
              className="w-24 h-24 drop-shadow-[0_0_20px_rgba(0,255,102,0.3)]"
            />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-2 font-montserrat">
            Nossa Garantia Incondicional
          </h2>

          <p className="text-base md:text-lg text-gray-300 mb-4 leading-relaxed max-w-2xl mx-auto font-poppins">
            Se você adquirir o DoramasPlus+ e por algum motivo não gostar, você tem 30 dias para pedir reembolso de 100% do valor pago.
            Não importa o motivo, basta um único e-mail e seu dinheiro é 100% devolvido, sem perguntas, sem questionamentos.
          </p>

          <ActionButton />
      </motion.div>
    </section>
  );
};

export default Guarantee;