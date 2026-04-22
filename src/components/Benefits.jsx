import React from 'react';
import { motion } from 'framer-motion';
import { Infinity, Globe, Sparkles } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Infinity className="w-12 h-12" />,
      title: "Acesso Vitalício",
      description: "Atualizações diárias com novos doramas. Pague uma vez, assista para sempre."
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Dublados e Legendados",
      description: "Escolha como prefere assistir. Todos os títulos com opções de áudio e legenda."
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Sem Anúncios",
      description: "Qualidade HD/4K sem interrupções. Experiência premium do início ao fim."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Por que escolher a{' '}
          <span className="text-[#00FF7F]">DramasPlay?</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-[#00FF7F] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,127,0.2)] group"
            >
              <div className="text-[#00FF7F] mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;