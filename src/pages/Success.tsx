
import React, { useState, useEffect } from 'react';
import { CheckCircle, Calendar, Search, MessageCircle, RefreshCw, FileText, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import StartupInvestmentBackground from '@/components/StartupInvestmentBackground';

const Success = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [progress, setProgress] = useState(66);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const steps = [
    { id: 1, label: 'Enviado', icon: '📧', completed: true },
    { id: 2, label: 'Em análise', icon: '🔍', completed: true },
    { id: 3, label: 'Concluído', icon: '✅', completed: true }
  ];

  useEffect(() => {
    // Animação de carregamento contínua entre step 2 e 3
    const loadingInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          setCurrentStep(3);
          setProgress(100);
          clearInterval(loadingInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(loadingInterval);
  }, []);

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
            <span className="text-sm">Status: {currentStep === 3 ? 'Concluído' : 'Em análise'}</span>
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
          
          {/* Progress Bar com carregamento contínuo */}
          <div className="w-full">
            {currentStep === 2 && loadingProgress < 100 ? (
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-yellow-500 to-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
            ) : (
              <Progress value={progress} className="h-2 bg-gray-700" />
            )}
          </div>
        </div>
      </div>

      {/* Botão Gerar One Page - DESTACADO */}
      <div className="mb-8 relative z-10">
        <Button 
          className="bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 hover:from-green-600 hover:via-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl transition-all duration-300 border-2 border-white/20 hover:border-white/40 hover:scale-105 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-lg">🎨 Gerar One Page</span>
            <span className="text-sm opacity-90 mt-1">Crie uma página visual com os dados da sua startup</span>
          </div>
        </Button>
      </div>

      {/* Botões de ação */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 relative z-10">
        <Button 
          className="w-full bg-green-600 hover:bg-green-700 text-white py-6 rounded-xl font-semibold flex flex-col items-center justify-center gap-1 transition-all duration-200 h-20"
        >
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            <span>Conversar com consultor</span>
          </div>
          <span className="text-xs opacity-80">Tire suas dúvidas</span>
        </Button>

        <Button 
          className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-6 rounded-xl font-semibold flex flex-col items-center justify-center gap-1 transition-all duration-200 h-20"
        >
          <div className="flex items-center gap-2">
            <RefreshCw className="w-5 h-5" />
            <span>Reiniciar envio</span>
          </div>
          <span className="text-xs opacity-80">Se sua startup mudou</span>
        </Button>

        <Button 
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 rounded-xl font-semibold flex flex-col items-center justify-center gap-1 transition-all duration-200 h-20"
        >
          <div className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            <span className="bg-green-500 text-xs px-2 py-1 rounded mr-2">NEW</span>
            <span>Nova Startup</span>
          </div>
          <span className="text-xs opacity-80">Cadastre outra startup</span>
        </Button>
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
