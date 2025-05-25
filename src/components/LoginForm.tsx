
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import SignUpModal from './SignUpModal';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [errors, setErrors] = useState<{email?: string, password?: string, general?: string}>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: {email?: string, password?: string} = {};
    
    if (!email || !password) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha os campos obrigatórios para poder entrar em sua conta.",
        variant: "destructive",
      });
      return false;
    }
    
    if (!validateEmail(email) || password.length < 6) {
      setErrors({
        general: "CAMPO INVALIDO Por favor, verifique o email e senha inseridos."
      });
      toast({
        title: "CAMPO INVALIDO",
        description: "Por favor, verifique o email e senha inseridos.",
        variant: "destructive",
      });
      return false;
    }
    
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simular chamada de API
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo ao Investor Report",
      });
    }, 2000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-blue flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-white/20 shadow-2xl animate-fade-in">
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
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40"
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
                    className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40"
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

              {errors.general && (
                <div className="text-red-300 text-sm text-center bg-red-500/20 p-2 rounded">
                  {errors.general}
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-blue-800 hover:bg-white/90 font-medium py-3 rounded-lg transition-all duration-200"
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
                className="text-white font-medium hover:underline text-sm"
              >
                Cadastre-se
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      <SignUpModal 
        isOpen={showSignUpModal} 
        onClose={() => setShowSignUpModal(false)} 
      />
    </>
  );
};

export default LoginForm;
