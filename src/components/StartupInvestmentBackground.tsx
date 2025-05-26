
import React from 'react';

interface StartupInvestmentBackgroundProps {
  hasError?: boolean;
}

const StartupInvestmentBackground = ({ hasError = false }: StartupInvestmentBackgroundProps) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid profissional de fundo */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(${hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(96, 165, 250, 0.1)'} 1px, transparent 1px),
            linear-gradient(90deg, ${hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(96, 165, 250, 0.1)'} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Elementos flutuantes de startup - mais sutis e profissionais */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={`startup-${index}`}
            className={`absolute opacity-[0.15] ${hasError ? 'text-red-400' : 'text-blue-400'}`}
            style={{
              left: `${15 + index * 15}%`,
              top: `${20 + Math.random() * 40}%`,
              fontSize: '20px',
              animation: `float ${6 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          >
            🚀
          </div>
        ))}
      </div>

      {/* Elementos de investimento - moedas e gráficos */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={`investment-${index}`}
            className={`absolute opacity-[0.12] ${hasError ? 'text-red-400' : 'text-yellow-400'}`}
            style={{
              left: `${10 + index * 12}%`,
              top: `${30 + Math.random() * 50}%`,
              fontSize: '18px',
              animation: `pulse ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            💰
          </div>
        ))}
      </div>

      {/* Ondas de crescimento empresarial - mais elegantes */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={hasError ? "rgba(239, 68, 68, 0.3)" : "rgba(59, 130, 246, 0.3)"} />
              <stop offset="50%" stopColor={hasError ? "rgba(248, 113, 113, 0.2)" : "rgba(34, 197, 94, 0.3)"} />
              <stop offset="100%" stopColor={hasError ? "rgba(239, 68, 68, 0.1)" : "rgba(168, 85, 247, 0.2)"} />
            </linearGradient>
          </defs>
          <path
            d="M0,70 Q25,50 50,55 T100,45"
            fill="none"
            stroke="url(#wave-gradient)"
            strokeWidth="2"
          >
            <animate
              attributeName="d"
              values="M0,70 Q25,50 50,55 T100,45;
                      M0,65 Q30,45 55,50 T100,40;
                      M0,75 Q20,55 45,60 T100,50;
                      M0,70 Q25,50 50,55 T100,45"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M0,80 Q20,60 40,65 T100,55"
            fill="none"
            stroke="url(#wave-gradient)"
            strokeWidth="1.5"
            opacity="0.6"
          >
            <animate
              attributeName="d"
              values="M0,80 Q20,60 40,65 T100,55;
                      M0,75 Q25,55 45,60 T100,50;
                      M0,85 Q15,65 35,70 T100,60;
                      M0,80 Q20,60 40,65 T100,55"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Barras de crescimento de mercado - mais profissionais */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={`market-bar-${index}`}
            className="absolute bottom-0 opacity-25"
            style={{
              left: `${8 + index * 7}%`,
              width: '16px',
              height: `${Math.random() * 60 + 30}%`,
              background: hasError 
                ? `linear-gradient(to top, rgba(239, 68, 68, 0.4), rgba(248, 113, 113, 0.2))`
                : `linear-gradient(to top, rgba(59, 130, 246, 0.4), rgba(34, 197, 94, 0.3), rgba(168, 85, 247, 0.2))`,
              animation: `barGrowth ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              borderRadius: '2px 2px 0 0'
            }}
          />
        ))}
      </div>

      {/* Ícones de inovação e negócios */}
      <div className="absolute inset-0">
        {['💡', '📊', '🎯', '📈', '⚡', '🔥'].map((symbol, index) => (
          <div
            key={`business-${index}`}
            className={`absolute opacity-[0.08] ${hasError ? 'text-red-400' : 'text-purple-400'}`}
            style={{
              left: `${20 + index * 12}%`,
              top: `${15 + Math.random() * 50}%`,
              fontSize: '24px',
              animation: `float ${7 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Métricas de negócios flutuantes */}
      <div className="absolute inset-0">
        {['$10M', '+250%', '5x ROI', '$100K', 'IPO'].map((metric, index) => (
          <div
            key={`metric-${index}`}
            className={`absolute font-mono text-xs font-bold opacity-[0.06] ${hasError ? 'text-red-400' : 'text-green-400'}`}
            style={{
              left: `${25 + index * 15}%`,
              top: `${35 + Math.random() * 25}%`,
              animation: `float ${5 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {metric}
          </div>
        ))}
      </div>

      {/* Linhas de conexão de rede de negócios */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {Array.from({ length: 4 }).map((_, index) => (
            <line
              key={`network-line-${index}`}
              x1={`${index * 25}`} y1={`${25 + index * 15}`}
              x2={`${(index + 1) * 25}`} y2={`${35 + index * 12}`}
              stroke={hasError ? "rgba(239, 68, 68, 0.3)" : "rgba(168, 85, 247, 0.3)"}
              strokeWidth="1"
            >
              <animate
                attributeName="opacity"
                values="0.1;0.4;0.1"
                dur={`${4 + index}s`}
                repeatCount="indefinite"
              />
            </line>
          ))}
        </svg>
      </div>

      {/* Círculos de conexão empresarial */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={`connection-${index}`}
            className={`absolute rounded-full border opacity-[0.08] ${hasError ? 'border-red-400' : 'border-blue-400'}`}
            style={{
              left: `${Math.random() * 85}%`,
              top: `${Math.random() * 70}%`,
              width: `${15 + Math.random() * 25}px`,
              height: `${15 + Math.random() * 25}px`,
              animation: `pulse ${4 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StartupInvestmentBackground;
