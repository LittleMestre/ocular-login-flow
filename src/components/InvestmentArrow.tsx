
import React from 'react';
import { TrendingUp } from 'lucide-react';

interface InvestmentArrowProps {
  isError: boolean;
  isSuccess: boolean;
}

const InvestmentArrow = ({ isError, isSuccess }: InvestmentArrowProps) => {
  return (
    <div className={`fixed z-10 transition-all duration-1000 ${
      isSuccess ? 'inset-0 flex items-center justify-center' : 'bottom-10 left-10'
    }`}>
      <div className={`relative ${
        isSuccess ? 'animate-pulse scale-150' : 'animate-bounce'
      }`}>
        <TrendingUp 
          className={`w-12 h-12 transition-colors duration-300 ${
            isError ? 'text-red-500' : isSuccess ? 'text-green-400' : 'text-blue-400'
          }`}
          strokeWidth={3}
        />
        {/* Linha de movimento horizontal para simular mercado de ações */}
        <div className={`absolute -right-20 top-1/2 w-20 h-0.5 transition-colors duration-300 ${
          isError ? 'bg-red-500' : 'bg-blue-400'
        } ${!isSuccess && 'animate-pulse'}`}>
          <div className={`absolute right-0 top-0 w-2 h-2 rounded-full transition-colors duration-300 ${
            isError ? 'bg-red-500' : 'bg-blue-400'
          } animate-ping`} />
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
