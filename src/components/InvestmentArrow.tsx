
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

      {/* Ondas de gráfico animadas - sempre em movimento */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Onda principal */}
          <path
            d="M0,80 Q10,60 20,70 T40,50 T60,45 T80,55 T100,40"
            fill="none"
            stroke={isError ? '#ef4444' : isSuccess ? '#4ade80' : '#60a5fa'}
            strokeWidth="0.5"
            opacity="0.8"
          >
            <animate
              attributeName="d"
              values="M0,80 Q10,60 20,70 T40,50 T60,45 T80,55 T100,40;
                      M0,75 Q15,55 25,65 T45,45 T65,40 T85,50 T100,35;
                      M0,85 Q12,65 22,75 T42,55 T62,50 T82,60 T100,45;
                      M0,80 Q10,60 20,70 T40,50 T60,45 T80,55 T100,40"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Onda secundária */}
          <path
            d="M0,75 Q15,55 25,65 T45,45 T65,40 T85,50 T100,35"
            fill="none"
            stroke={isError ? '#f87171' : isSuccess ? '#86efac' : '#93c5fd'}
            strokeWidth="0.3"
            opacity="0.6"
          >
            <animate
              attributeName="d"
              values="M0,75 Q15,55 25,65 T45,45 T65,40 T85,50 T100,35;
                      M0,70 Q18,50 28,60 T48,40 T68,35 T88,45 T100,30;
                      M0,80 Q13,60 23,70 T43,50 T63,45 T83,55 T100,40;
                      M0,75 Q15,55 25,65 T45,45 T65,40 T85,50 T100,35"
              dur="5s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Onda terciária */}
          <path
            d="M0,70 Q20,50 30,60 T50,40 T70,35 T90,45 T100,30"
            fill="none"
            stroke={isError ? '#fca5a5' : isSuccess ? '#bbf7d0' : '#bfdbfe'}
            strokeWidth="0.2"
            opacity="0.4"
          >
            <animate
              attributeName="d"
              values="M0,70 Q20,50 30,60 T50,40 T70,35 T90,45 T100,30;
                      M0,65 Q22,45 32,55 T52,35 T72,30 T92,40 T100,25;
                      M0,75 Q17,55 27,65 T47,45 T67,40 T87,50 T100,35;
                      M0,70 Q20,50 30,60 T50,40 T70,35 T90,45 T100,30"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Barras verticais animadas - sempre em movimento */}
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

      {/* Números flutuantes - sempre em movimento */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={`number-${index}`}
            className={`absolute text-xs font-mono opacity-40 ${
              isError ? 'text-red-400' : 
              isSuccess ? 'text-green-400' : 'text-blue-400'
            }`}
            style={{
              left: `${10 + index * 8}%`,
              top: `${20 + Math.random() * 40}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {isError ? 
              `-${(Math.random() * 50 + 10).toFixed(2)}` : 
              `+${(Math.random() * 100 + 50).toFixed(2)}`
            }
          </div>
        ))}
      </div>

      {/* Pontos de dados animados - sempre em movimento */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, index) => (
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

      {/* Linhas de tendência animadas */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line
            x1="0" y1="60" x2="100" y2="50"
            stroke={isError ? '#ef4444' : isSuccess ? '#4ade80' : '#60a5fa'}
            strokeWidth="0.1"
            opacity="0.3"
          >
            <animate
              attributeName="y1"
              values="60;65;55;60"
              dur="7s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y2"
              values="50;45;55;50"
              dur="7s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="0" y1="70" x2="100" y2="65"
            stroke={isError ? '#f87171' : isSuccess ? '#86efac' : '#93c5fd'}
            strokeWidth="0.1"
            opacity="0.2"
          >
            <animate
              attributeName="y1"
              values="70;75;65;70"
              dur="8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y2"
              values="65;60;70;65"
              dur="8s"
              repeatCount="indefinite"
            />
          </line>
        </svg>
      </div>

      {/* Animação de expansão quando login é bem-sucedido */}
      {isSuccess && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-400 opacity-20 animate-ping" />
      )}
    </div>
  );
};

export default InvestmentArrow;
