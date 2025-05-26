
import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import SignUpModal from './SignUpModal';
import InvestmentArrow from './InvestmentArrow';
import ErrorCard from './ErrorCard';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [errors, setErrors] = useState<{email?: string, password?: string, general?: string}>({});
  const [showForm, setShowForm] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showErrorCard, setShowErrorCard] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Mostrar formulário após animação inicial da seta
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    if (!email || !password) {
      setErrorMessage("Por favor, preencha os campos obrigatórios para poder entrar em sua conta.");
      setShowErrorCard(true);
      return false;
    }
    
    if (!validateEmail(email) || password.length < 6) {
      setErrorMessage("Por favor, verifique o email e senha inseridos.");
      setShowErrorCard(true);
      return false;
    }
    
    setErrors({});
    return true;
  };

  const handleRetry = () => {
    setShowErrorCard(false);
    setErrorMessage('');
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simular chamada de API
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      // Animação de saída do formulário para a esquerda
      setTimeout(() => {
        toast({
          title: "Login realizado com sucesso!",
          description: "Redirecionando para o painel...",
        });
        navigate('/success');
      }, 2000);
    }, 2000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Estado de erro deve incluir tanto o ErrorCard quanto outros erros
  const hasErrors = Object.keys(errors).length > 0 || showErrorCard;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Padrão de fundo com efeito de mercado */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-1 h-32 bg-blue-400 transform rotate-12 animate-pulse" />
          <div className="absolute top-1/2 right-1/4 w-1 h-24 bg-green-400 transform -rotate-12 animate-pulse delay-300" />
          <div className="absolute bottom-1/4 left-1/3 w-1 h-28 bg-blue-300 transform rotate-45 animate-pulse delay-700" />
        </div>

        {/* Animação da seta de investimento com estado de erro correto */}
        <InvestmentArrow isError={hasErrors} isSuccess={isSuccess} />

        {/* Formulário de login com animação de entrada/saída */}
        <Card className={`w-full max-w-md bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl transition-all duration-1000 ${
          showForm ? (isSuccess ? 'animate-slide-out-left opacity-0' : 'animate-fade-in opacity-100') : 'opacity-0 scale-95'
        }`}>
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-semibold text-white">
              Bem-vindo ao Investor Report
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 h-4 w-4" />
                  <Input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/70 focus:border-blue-400 transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 h-4 w-4" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 bg-white/5 border-white/20 text-white placeholder:text-white/70 focus:border-blue-400 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <div className="text-left">
                  <button
                    type="button"
                    className="text-sm text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    Esqueci minha senha
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <>
                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                    Entrando
                  </>
                ) : (
                  'Entrar'
                )}
              </Button>
            </form>

            <div className="text-center">
              <span className="text-white/80 text-sm">Não tem uma conta? </span>
              <button 
                onClick={() => setShowSignUpModal(true)}
                className="text-blue-300 font-medium hover:text-blue-200 hover:underline text-sm transition-colors"
              >
                Cadastre-se
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      <ErrorCard 
        message={errorMessage}
        isVisible={showErrorCard}
        onRetry={handleRetry}
      />

      <SignUpModal 
        isOpen={showSignUpModal} 
        onClose={() => setShowSignUpModal(false)} 
      />
    </>
  );
};

export default LoginForm;
