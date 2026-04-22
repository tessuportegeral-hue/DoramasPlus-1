import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Tv, Download } from 'lucide-react';

const PlanFeature = ({ icon, text }) => (
  <li className="flex items-start gap-3">
    {icon}
    <span className="text-gray-300 font-poppins flex-1 text-sm sm:text-base">
      {text}
    </span>
  </li>
);

const Plans = () => {

  const plans = [
    {
      name: "DoramasPlus Padrão",
      price: "15,90",
      checkoutUrl: "https://doramasplus.com.br/register?plano=mensal",
      paymentType: "/mês",
      color: "red",
      features: [
        { icon: <Check className="w-5 h-5 text-red-500 mt-1" />, text: "Acesso ilimitado" },
        { icon: <Check className="w-5 h-5 text-red-500 mt-1" />, text: "Sem anúncios" },
        { icon: <Check className="w-5 h-5 text-red-500 mt-1" />, text: "Qualidade HD" },
        { icon: <Tv className="w-5 h-5 text-red-500 mt-1" />, text: "Assista em qualquer lugar" },
        { icon: <Check className="w-5 h-5 text-red-500 mt-1" />, text: "Sem travamentos" },
        { icon: <Star className="w-5 h-5 text-red-500 mt-1" />, text: "Atualizações todos os dias" },
      ]
    },
    {
      name: "DoramasPlus Trimestral",
      price: "43,90",
      checkoutUrl: "https://doramasplus.com.br/register?plano=trimestral",
      paymentType: "/3 meses",
      color: "gold",
      highlight: true,
      features: [
        { icon: <Check className="w-5 h-5 text-yellow-400 mt-1" />, text: "Tudo do plano Padrão" },
        { icon: <Star className="w-5 h-5 text-yellow-400 mt-1" />, text: "Prioridade no suporte" },
        { icon: <Download className="w-5 h-5 text-yellow-400 mt-1" />, text: "Downloads offline (em breve)" },
        { icon: <Check className="w-5 h-5 text-yellow-400 mt-1" />, text: "Economia garantida" },
        { icon: <Check className="w-5 h-5 text-yellow-400 mt-1" />, text: "Sem travamentos" },
        { icon: <Tv className="w-5 h-5 text-yellow-400 mt-1" />, text: "Aba exclusiva de Continuar Assistindo" },
      ]
    }
  ];

  const colors = {
    red: {
      border: 'border-red-500',
      shadow: 'hover:shadow-[0_0_30px_rgba(229,9,20,0.45)]',
      button: 'bg-red-600 hover:bg-red-700',
      text: 'text-red-400'
    },
    gold: {
      border: 'border-yellow-500',
      shadow: 'hover:shadow-[0_0_35px_rgba(234,179,8,0.55)]',
      button: 'bg-yellow-500 hover:bg-yellow-600',
      text: 'text-yellow-400'
    }
  };

  return (
    <section id="plans" className="py-8 px-4 bg-[#121212]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 uppercase font-montserrat">
          Escolha seu <span className="text-[#E50914]">plano ideal</span>
        </h2>

        <div className="space-y-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`relative bg-gray-900/80 border-2 rounded-2xl p-5 transition-all duration-300 
                ${colors[plan.color].border} 
                ${colors[plan.color].shadow}
                ${plan.highlight ? 'ring-2 ring-yellow-400/40' : ''}
              `}
            >
              {plan.highlight && (
                <span className="absolute -top-3 right-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  MAIS VANTAJOSO
                </span>
              )}

              <div className="mb-4 text-center">
                <h3 className="text-2xl font-bold font-montserrat">
                  {plan.name}
                </h3>

                <p className="text-5xl font-extrabold text-white my-2">
                  R$ <span className={colors[plan.color].text}>{plan.price}</span>
                </p>

                <p className="text-gray-400 font-poppins text-sm">
                  {plan.paymentType}
                </p>
              </div>

              <ul className="space-y-2 mb-5">
                {plan.features.map((feature, i) => (
                  <PlanFeature key={i} icon={feature.icon} text={feature.text} />
                ))}
              </ul>

              <motion.a
                href={plan.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full block text-center text-white font-bold text-lg py-3 rounded-xl transition-all duration-300 ${colors[plan.color].button}`}
              >
                Assinar DoramasPlus agora
              </motion.a>

              <p className="text-xs text-gray-400 mt-3 text-center font-poppins">
                Crie sua conta e o acesso é liberado automaticamente após o pagamento.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Plans;