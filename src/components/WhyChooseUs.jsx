import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    { text: "+2500 SÉRIES VIP" },
    { text: "ACESSO ILIMITADO A TODAS AS SÉRIES" },
    { text: "SÉRIES SEM ANÚNCIOS E PROPAGANDAS" },
    { text: "SEM MENSALIDADES" },
  ];

  const faqs = [
    {
      question: "Como funciona o DoramasPlus?",
      answer: "Vamos disponibilizar todas as séries completas para vocês, sem anúncios e propagandas com acesso VIP e ainda sem mensalidades."
    },
    {
      question: "Tem algum limite de Séries que posso assistir?",
      answer: "Não, todos que comprarem o acesso poderão assistir quantas séries quiserem e de forma ilimitada."
    },
    {
      question: "Como faço para ter acesso as Séries?",
      answer: "Crie sua conta, escolha o plano e o acesso é liberado automaticamente após o pagamento."
    }
  ];

  const formatBenefitText = (text) => {
    if (text.includes("TODAS AS SÉRIES")) {
      return (
        <>
          ACESSO ILIMITADO A TODAS AS <span className="text-[#E50914]">SÉRIES</span>
        </>
      );
    }
    return text;
  };

  const formatQuestion = (question) => {
    if (question.includes("DoramasPlus")) {
      return (
        <>
          Como funciona o Doramas<span className="text-[#E50914]">Plus</span>?
        </>
      );
    }
    return question;
  };

  return (
    <section className="pb-0 pt-8 md:pt-16 px-4 bg-black">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-y-6">
            <h2 
              className="text-2xl md:text-3xl font-bold text-white uppercase font-montserrat"
            >
              VOCÊ TERÁ ACESSO VIP:
            </h2>
            <div className="flex flex-col gap-y-5">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="flex items-center gap-4"
                >
                  <div className="bg-[#222222] p-2 rounded-full flex-shrink-0">
                    <Check className="w-6 h-6 text-[#E50914]" />
                  </div>
                  <p className="text-white font-semibold font-poppins text-base md:text-lg">{formatBenefitText(benefit.text)}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="bg-black border border-[#222222] p-4 rounded-lg"
                >
                    <h3 className="text-base md:text-lg font-bold text-white mb-2 font-poppins text-center">
                        "{formatQuestion(faq.question)}"
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-poppins text-sm md:text-base text-center">{faq.answer}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;