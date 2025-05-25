
import React from 'react';

interface InvestmentArrowProps {
  isError: boolean;
  isSuccess: boolean;
}

const InvestmentArrow = ({ isError, isSuccess }: InvestmentArrowProps) => {
  return (
    <div className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${
      isSuccess ? 'z-50' : ''
    }`}>
      {/* Grid de fundo */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(96, 165, 250, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 165, 250, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Barras verticais animadas */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={`bar-${index}`}
            className="absolute bottom-0 opacity-60"
            style={{
              left: `${5 + index * 4.5}%`,
              width: '20px',
              height: `${Math.random() * 60 + 20}%`,
              background: `linear-gradient(to top, ${
                isError ? 'rgba(239, 68, 68, 0.3)' : 
                isSuccess ? 'rgba(74, 222, 128, 0.3)' : 'rgba(96, 165, 250, 0.3)'
              }, transparent)`,
              animation: `barPulse ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Linhas de gráfico animadas */}
      <div className="absolute inset-0">
        {/* Linha principal */}
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0,80 Q10,60 20,70 T40,50 T60,45 T80,55 T100,40"
            fill="none"
            stroke={isError ? '#ef4444' : isSuccess ? '#4ade80' : '#60a5fa'}
            strokeWidth="0.5"
            opacity="0.8"
            className="animate-pulse"
          />
          <path
            d="M0,75 Q15,55 25,65 T45,45 T65,40 T85,50 T100,35"
            fill="none"
            stroke={isError ? '#f87171' : isSuccess ? '#86efac' : '#93c5fd'}
            strokeWidth="0.3"
            opacity="0.6"
            className="animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
        </svg>
      </div>

      {/* Números flutuantes */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={`number-${index}`}
            className={`absolute text-xs font-mono opacity-40 ${
              isError ? 'text-red-400' : 
              isSuccess ? 'text-green-400' : 'text-blue-400'
            }`}
            style={{
              left: `${10 + index * 12}%`,
              top: `${20 + Math.random() * 40}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {(Math.random() * 100 + 100).toFixed(2)}
          </div>
        ))}
      </div>

      {/* Pontos de dados animados */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={`dot-${index}`}
            className={`absolute w-1 h-1 rounded-full ${
              isError ? 'bg-red-400' : 
              isSuccess ? 'bg-green-400' : 'bg-blue-400'
            }`}
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 60 + 20}%`,
              animation: `pulse ${1 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.6
            }}
          />
        ))}
      </div>

      {/* Animação de expansão quando login é bem-sucedido */}
      {isSuccess && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-400 opacity-20 animate-ping" />
      )}
    </div>
  );
};

export default InvestmentArrow;
