
import React from 'react';

const StartupInvestmentBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(96, 165, 250, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 165, 250, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Elementos de STARTUP - Foguetes e inovação */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={`rocket-${index}`}
            className="absolute text-blue-400 opacity-30"
            style={{
              left: `${10 + index * 12}%`,
              top: `${20 + Math.random() * 40}%`,
              fontSize: '24px',
              animation: `float ${4 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            🚀
          </div>
        ))}
      </div>

      {/* Elementos de INVESTIMENTO - Gráficos e moedas */}
      <div className="absolute inset-0">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={`coin-${index}`}
            className="absolute text-yellow-400 opacity-30"
            style={{
              left: `${5 + index * 10}%`,
              top: `${30 + Math.random() * 50}%`,
              fontSize: '20px',
              animation: `pulse ${2 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            💰
          </div>
        ))}
      </div>

      {/* Ondas de crescimento - representando startup growth */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0,80 Q20,60 40,65 T80,45 T100,35"
            fill="none"
            stroke="rgba(34, 197, 94, 0.4)"
            strokeWidth="2"
            opacity="0.6"
          >
            <animate
              attributeName="d"
              values="M0,80 Q20,60 40,65 T80,45 T100,35;
                      M0,75 Q25,55 45,60 T85,40 T100,30;
                      M0,85 Q15,65 35,70 T75,50 T100,40;
                      M0,80 Q20,60 40,65 T80,45 T100,35"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Barras de crescimento animadas */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={`growth-bar-${index}`}
            className="absolute bottom-0 opacity-40"
            style={{
              left: `${5 + index * 6}%`,
              width: '24px',
              height: `${Math.random() * 80 + 20}%`,
              background: `linear-gradient(to top, 
                rgba(59, 130, 246, 0.3), 
                rgba(34, 197, 94, 0.3), 
                rgba(168, 85, 247, 0.2))`,
              animation: `barGrowth ${3 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Símbolos de inovação flutuantes */}
      <div className="absolute inset-0">
        {['💡', '⚡', '🎯', '📈', '🔥', '⭐'].map((symbol, index) => (
          <div
            key={`innovation-${index}`}
            className="absolute text-purple-400 opacity-30"
            style={{
              left: `${15 + index * 14}%`,
              top: `${10 + Math.random() * 60}%`,
              fontSize: '28px',
              animation: `float ${5 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Círculos de conexão - representando network e investimentos */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={`connection-${index}`}
            className="absolute rounded-full border-2 border-blue-400 opacity-20"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 80}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              animation: `pulse ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Números de métricas flutuantes */}
      <div className="absolute inset-0">
        {['$1M', '+500%', '10x', '$50K', '∞'].map((metric, index) => (
          <div
            key={`metric-${index}`}
            className="absolute text-green-400 font-mono text-sm opacity-30 font-bold"
            style={{
              left: `${20 + index * 15}%`,
              top: `${25 + Math.random() * 30}%`,
              animation: `float ${4 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {metric}
          </div>
        ))}
      </div>

      {/* Linhas de conexão animadas */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {Array.from({ length: 5 }).map((_, index) => (
            <line
              key={`connection-line-${index}`}
              x1={`${index * 20}`} y1={`${30 + index * 10}`}
              x2={`${(index + 1) * 20}`} y2={`${40 + index * 8}`}
              stroke="rgba(168, 85, 247, 0.2)"
              strokeWidth="1"
              opacity="0.4"
            >
              <animate
                attributeName="opacity"
                values="0.2;0.6;0.2"
                dur={`${3 + index}s`}
                repeatCount="indefinite"
              />
            </line>
          ))}
        </svg>
      </div>

      <style jsx>{`
        @keyframes barGrowth {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.3); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default StartupInvestmentBackground;
