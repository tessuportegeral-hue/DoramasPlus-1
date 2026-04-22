import React from 'react';
    import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
    import { Mail } from 'lucide-react';

    const Footer = () => {
      return (
        <footer className="bg-black border-t border-gray-800 pt-6 pb-4 px-4">
          <div className="max-w-2xl mx-auto text-gray-400">
            <div className="flex items-center justify-center gap-3 text-white/85 text-md mb-4 font-poppins max-w-xl mx-auto">
                <Mail className="w-8 h-8 sm:w-5 sm:h-5 flex-shrink-0"/>
                <span className="text-center sm:text-left text-sm">Seu acesso é liberado automaticamente após o pagamento. Crie sua conta e comece agora!</span>
            </div>
            
            <Accordion type="single" collapsible className="w-full mb-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-poppins text-gray-400 hover:text-[#00FF66]">Política de Privacidade</AccordionTrigger>
                <AccordionContent className="text-gray-500 leading-relaxed font-poppins text-sm">
                  A DoramasPlus+ respeita sua privacidade e protege seus dados pessoais. Coletamos apenas informações necessárias para processar pagamentos e oferecer uma melhor experiência. Nenhum dado sensível é compartilhado com terceiros. Todas as transações são protegidas por criptografia e seguem a LGPD. Ao usar o site, você concorda com esta política.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-poppins text-gray-400 hover:text-[#00FF66]">Termos de Uso</AccordionTrigger>
                <AccordionContent className="text-gray-500 leading-relaxed font-poppins text-sm">
                  Ao acessar o DramasPlay+, o usuário concorda em utilizar a plataforma apenas para fins pessoais e não comerciais. O acesso é individual e intransferível. É proibida a redistribuição de conteúdos da plataforma. A DramasPlay+ reserva-se o direito de suspender acessos em caso de uso indevido. Em caso de dúvidas, entre em contato pelo suporte oficial.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center">
              <p className="text-sm font-poppins text-gray-500">
                Direitos Autorais © 2025 DramasPlay+ — Todos os direitos reservados.
              </p>
              <p className="text-xs text-gray-600 mt-1 font-poppins">
                Este site não possui vínculo com a Netflix.
              </p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;