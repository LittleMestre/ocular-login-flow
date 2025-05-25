
import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface InvestmentArrowProps {
  isError: boolean;
  isSuccess: boolean;
}

const InvestmentArrow = ({ isError, isSuccess }: InvestmentArrowProps) => {
  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${
      isSuccess ? 'z-50' : ''
    }`}>
      {/* Seta animada de mercado - movimento contínuo */}
      <div className={`absolute transition-all duration-1000 ${
        isSuccess ? 'inset-0 flex items-center justify-center' : 'left-20 bottom-20'
      }`}>
        {/* Container da animação da seta */}
        <div className="relative">
          {/* Trilha/caminho da seta - múltiplas posições com opacidade decrescente */}
          <div className="absolute">
            {/* Posições da trilha - do mais fraco ao mais forte */}
            <div className={`absolute animate-[moveUpDown_4s_ease-in-out_infinite] ${
              isError ? 'text-red-500/10' : 'text-blue-400/10'
            }`} style={{ animationDelay: '-3s' }}>
              <ArrowUp className="w-8 h-8" strokeWidth={2} />
            </div>
            <div className={`absolute animate-[moveUpDown_4s_ease-in-out_infinite] ${
              isError ? 'text-red-500/20' : 'text-blue-400/20'
            }`} style={{ animationDelay: '-2.5s' }}>
              <ArrowUp className="w-8 h-8" strokeWidth={2} />
            </div>
            <div className={`absolute animate-[moveUpDown_4s_ease-in-out_infinite] ${
              isError ? 'text-red-500/30' : 'text-blue-400/30'
            }`} style={{ animationDelay: '-2s' }}>
              <ArrowUp className="w-8 h-8" strokeWidth={2} />
            </div>
            <div className={`absolute animate-[moveUpDown_4s_ease-in-out_infinite] ${
              isError ? 'text-red-500/40' : 'text-blue-400/40'
            }`} style={{ animationDelay: '-1.5s' }}>
              <ArrowUp className="w-8 h-8" strokeWidth={2} />
            </div>
            <div className={`absolute animate-[moveUpDown_4s_ease-in-out_infinite] ${
              isError ? 'text-red-500/60' : 'text-blue-400/60'
            }`} style={{ animationDelay: '-1s' }}>
              <ArrowUp className="w-8 h-8" strokeWidth={2} />
            </div>
            <div className={`absolute animate-[moveUpDown_4s_ease-in-out_infinite] ${
              isError ? 'text-red-500/80' : 'text-blue-400/80'
            }`} style={{ animationDelay: '-0.5s' }}>
              <ArrowUp className="w-8 h-8" strokeWidth={2} />
            </div>
          </div>

          {/* Seta principal - mais vibrante e chamativa */}
          <div className={`relative animate-[moveUpDown_4s_ease-in-out_infinite] ${
            isSuccess ? 'animate-pulse scale-150' : ''
          }`}>
            <div className="animate-[changeDirection_4s_ease-in-out_infinite]">
              <ArrowUp 
                className={`w-10 h-10 transition-colors duration-300 ${
                  isError ? 'text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]' : 
                  isSuccess ? 'text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.9)]' : 
                  'text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]'
                }`}
                strokeWidth={3}
              />
            </div>
          </div>

          {/* Linha horizontal de movimento do mercado */}
          <div className={`absolute -right-16 top-1/2 w-16 h-0.5 transition-colors duration-300 ${
            isError ? 'bg-red-500' : 'bg-blue-400'
          } ${!isSuccess && 'animate-pulse'}`}>
            <div className={`absolute right-0 top-0 w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              isError ? 'bg-red-500' : 'bg-blue-400'
            } animate-ping`} />
          </div>
        </div>
      </div>
      
      {/* Animação de expansão quando login é bem-sucedido */}
      {isSuccess && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-400 opacity-20 animate-ping" />
      )}
    </div>
  );
};

export default InvestmentArrow;
