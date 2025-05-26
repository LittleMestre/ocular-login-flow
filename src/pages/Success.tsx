
import React, { useState, useEffect } from 'react';
import { CheckCircle, Calendar, Search, MessageCircle, RefreshCw, FileText, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import StartupInvestmentBackground from '@/components/StartupInvestmentBackground';

const Success = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [progress, setProgress] = useState(66);
  const [showTooltip, setShowTooltip] = useState('');

  const steps = [
    { id: 1, label: 'Enviado', icon: '📧', completed: true },
    { id: 2, label: 'Em análise', icon: '🔍', completed: true },
    { id: 3, label: 'Concluído', icon: '✅', completed: true }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStep(3);
      setProgress(100);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleHover = (tooltip: string) => {
    setShowTooltip(tooltip);
  };

  const handleLeave = () => {
    setShowTooltip('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <StartupInvestmentBackground />
      
      {/* Header de sucesso */}
      <div className="w-full max-w-4xl mb-8 text-center relative z-10">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 px-8 rounded-t-2xl flex items-center justify-center gap-3">
          <CheckCircle className="w-8 h-8 text-green-400" />
          <div>
            <h1 className="text-2xl font-bold">Parabéns, Startup X!</h1>
            <p className="text-blue-100">Sua startup foi cadastrada com sucesso no sistema LOOR.</p>
          </div>
        </div>
      </div>

      {/* Cards de informação */}
      <div className="w-full max-w-4xl mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
          <div className="flex items-center gap-2 text-white">
            <Calendar className="w-5 h-5 text-blue-300" />
            <span className="text-sm">Envio: 15/05/2025 às 10:32</span>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
          <div className="flex items-center gap-2 text-white">
            <Search className="w-5 h-5 text-orange-300" />
            <span className="text-sm">Status: Em análise</span>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
          <div className="flex items-center gap-2 text-white">
            <FileText className="w-5 h-5 text-gray-300" />
            <span className="text-sm">ID: #004839</span>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="w-full max-w-2xl mb-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="flex items-center justify-between mb-6">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center relative">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-500 ${
                  step.id <= currentStep 
                    ? step.id === 1 ? 'bg-blue-500' : step.id === 2 ? 'bg-yellow-500' : 'bg-green-500'
                    : 'bg-gray-500'
                }`}>
                  {step.id}
                </div>
                <span className="text-white text-sm mt-2 font-medium">{step.label}</span>
                {index < steps.length - 1 && (
                  <div className="absolute top-6 left-12 h-0.5 w-24 bg-gray-600">
                    <div className={`h-full transition-all duration-500 ${
                      step.id < currentStep ? 'bg-green-500 w-full' : 'bg-gray-600 w-0'
                    }`} />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="w-full">
            <Progress value={progress} className="h-2 bg-gray-700" />
          </div>
        </div>
      </div>

      {/* Botão Gerar One Page */}
      <div className="mb-8 relative z-10">
        <Button 
          className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-200"
          onMouseEnter={() => handleHover('Crie uma página visual com os dados da sua startup')}
          onMouseLeave={handleLeave}
        >
          Gerar One Page
        </Button>
        {showTooltip === 'Crie uma página visual com os dados da sua startup' && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm whitespace-nowrap">
            {showTooltip}
          </div>
        )}
      </div>

      {/* Botões de ação */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 relative z-10">
        <div className="relative">
          <Button 
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200"
            onMouseEnter={() => handleHover('Conversar com um consultor')}
            onMouseLeave={handleLeave}
          >
            <MessageCircle className="w-5 h-5" />
            Conversar com um consultor
          </Button>
          {showTooltip === 'Conversar com um consultor' && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm whitespace-nowrap">
              {showTooltip}
            </div>
          )}
        </div>

        <div className="relative">
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200"
            onMouseEnter={() => handleHover('Use se sua startup mudou de direção')}
            onMouseLeave={handleLeave}
          >
            <RefreshCw className="w-5 h-5" />
            Reiniciar envio
          </Button>
          {showTooltip === 'Use se sua startup mudou de direção' && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm whitespace-nowrap">
              {showTooltip}
            </div>
          )}
        </div>

        <div className="relative">
          <Button 
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200"
            onMouseEnter={() => handleHover('Cadastre outra startup do seu portfólio no sistema LOOR.')}
            onMouseLeave={handleLeave}
          >
            <Plus className="w-5 h-5" />
            <span className="bg-green-500 text-xs px-2 py-1 rounded mr-2">NEW</span>
            Nova Startup
          </Button>
          {showTooltip === 'Cadastre outra startup do seu portfólio no sistema LOOR.' && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm whitespace-nowrap z-20">
              {showTooltip}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-white relative z-10">
        <p className="mb-4">Fique por dentro:</p>
        <div className="flex gap-4 justify-center">
          <a href="#" className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
            <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center text-white text-xs">📷</div>
            loor.vc
          </a>
          <a href="#" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs">💼</div>
            loor.vc
          </a>
        </div>
      </div>
    </div>
  );
};

export default Success;
