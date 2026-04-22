import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      rating: 5,
      text: "Finalmente posso assistir todos os doramas sem interrupções! O acesso é super rápido e a qualidade é excelente.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      name: "João Pedro",
      rating: 5,
      text: "Melhor investimento que já fiz! Acesso ilimitado a todas as séries que eu queria assistir. Vale muito a pena!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      name: "Ana Costa",
      rating: 5,
      text: "Incrível! Sem anúncios, sem travamentos. Posso assistir quando e onde quiser. Recomendo demais!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      name: "Carlos Santos",
      rating: 5,
      text: "Estava cansado de pagar mensalidades caras. Aqui paguei uma vez só e tenho acesso a tudo! Perfeito!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    {
      name: "Juliana Oliveira",
      rating: 5,
      text: "A qualidade das séries é excelente e o catálogo é gigante! Não preciso mais de outras plataformas.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
    },
    {
      name: "Roberto Lima",
      rating: 5,
      text: "Suporte rápido e eficiente. Recebi o acesso em minutos após a compra. Muito satisfeito!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="py-8 md:py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-montserrat uppercase">
            VALIAÇÕES DE CLIENTES QUE JÁ USARAM E APROVARAM O Doramas<span className="text-[#E50914]">Plus</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-poppins">
            Veja o que nossos clientes estão dizendo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-[#1a1a1a] border border-[#222222] rounded-lg p-6 hover:border-[#E50914]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-white font-poppins">{testimonial.name}</p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E50914] text-[#E50914]" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed font-poppins text-sm md:text-base">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;