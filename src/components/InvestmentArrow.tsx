
import React from 'react';
import { ArrowUp } from 'lucide-react';

interface InvestmentArrowProps {
  isError: boolean;
  isSuccess: boolean;
}

const InvestmentArrow = ({ isError, isSuccess }: InvestmentArrowProps) => {
  // Criar múltiplas setas espalhadas pela largura da tela
  const arrowPositions = [
    { left: '5%', delay: 0 },
    { left: '15%', delay: -1 },
    { left: '25%', delay: -2 },
    { left: '35%', delay: -0.5 },
    { left: '45%', delay: -1.5 },
    { left: '55%', delay: -3 },
    { left: '65%', delay: -2.5 },
    { left: '75%', delay: -0.8 },
    { left: '85%', delay: -1.8 },
    { left: '95%', delay: -2.8 },
  ];

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${
      isSuccess ? 'z-50' : ''
    }`}>
      {/* Múltiplas setas espalhadas por toda a largura */}
      {arrowPositions.map((position, index) => (
        <div
          key={index}
          className="absolute bottom-0 h-full"
          style={{ left: position.left }}
        >
          {/* Container da animação da seta */}
          <div className="relative h-full">
            {/* Trilha/caminho da seta - múltiplas posições com opacidade decrescente */}
            <div className="absolute">
              {/* Posições da trilha - do mais fraco ao mais forte */}
              <div className={`absolute animate-[moveUpDown_4s_ease-in-out_infinite] ${
                isError ? 'text-red-500/5' : 'text-blue-400/5'
              }`} style={{ animationDelay: `${position.delay - 3}s` }}>
                <ArrowUp className="w-6 h-6" strokeWidth={1} />
              </div>
              <div className={`absolute animate-[moveUpDown_4s_ease-in-out_infinite] ${
                isError ? 'text-red-500/10' : 'text-blue-400/10'
              }`} style={{ animationDelay: `${position.delay - 2.5}s` }}>
                <ArrowUp className="w-6 h-6" strokeWidth={1} />
              </div>
              <div className={`absolute animate-[moveUpDown_4s_ease-in-out_infinite] ${
                isError ? 'text-red-500/15' : 'text-blue-400/15'
              }`} style={{ animationDelay: `${position.delay - 2}s` }}>
                <ArrowUp className="w-6 h-6" strokeWidth={1} />
              </div>
              <div className={`absolute animate-[moveUpDown_4s_ease-in-out_infinite] ${
                isError ? 'text-red-500/25' : 'text-blue-400/25'
              }`} style={{ animationDelay: `${position.delay - 1.5}s` }}>
                <ArrowUp className="w-6 h-6" strokeWidth={1} />
              </div>
              <div className={`absolute animate-[moveUpDown_4s_ease-in-out_infinite] ${
                isError ? 'text-red-500/35' : 'text-blue-400/35'
              }`} style={{ animationDelay: `${position.delay - 1}s` }}>
                <ArrowUp className="w-6 h-6" strokeWidth={2} />
              </div>
              <div className={`absolute animate-[moveUpDown_4s_ease-in-out_infinite] ${
                isError ? 'text-red-500/50' : 'text-blue-400/50'
              }`} style={{ animationDelay: `${position.delay - 0.5}s` }}>
                <ArrowUp className="w-6 h-6" strokeWidth={2} />
              </div>
            </div>

            {/* Seta principal - mais vibrante e chamativa */}
            <div className={`relative animate-[moveUpDown_4s_ease-in-out_infinite] ${
              isSuccess ? 'animate-pulse scale-150' : ''
            }`} style={{ animationDelay: `${position.delay}s` }}>
              <div className="animate-[changeDirection_4s_ease-in-out_infinite]" style={{ animationDelay: `${position.delay}s` }}>
                <ArrowUp 
                  className={`w-8 h-8 transition-colors duration-300 ${
                    isError ? 'text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]' : 
                    isSuccess ? 'text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.9)]' : 
                    'text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]'
                  }`}
                  strokeWidth={3}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Animação de expansão quando login é bem-sucedido */}
      {isSuccess && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-400 opacity-20 animate-ping" />
      )}
    </div>
  );
};

export default InvestmentArrow;
