
import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpModal = ({ isOpen, onClose }: SignUpModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Senhas não coincidem",
        description: "As senhas inseridas não são iguais.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Senha muito curta",
        description: "A senha deve ter pelo menos 6 caracteres.",
        variant: "destructive",
      });
      return false;
    }

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
        title: "Conta criada com sucesso!",
        description: "Você já pode fazer login com suas credenciais.",
      });
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-white/20 shadow-2xl animate-fade-in">
        <CardHeader className="text-center pb-6 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-white/70 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <CardTitle className="text-2xl font-semibold text-white">
            Criar Conta
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 h-4 w-4" />
              <Input
                type="text"
                placeholder="Nome completo"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 h-4 w-4" />
              <Input
                type="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40"
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 h-4 w-4" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 h-4 w-4" />
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirmar senha"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-blue-800 hover:bg-white/90 font-medium py-3 rounded-lg transition-all duration-200"
            >
              {isLoading ? (
                <>
                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  Criando conta
                </>
              ) : (
                'Cadastrar'
              )}
            </Button>
          </form>

          <div className="text-center">
            <span className="text-white/80 text-sm">Já tem uma conta? </span>
            <button onClick={onClose} className="text-white font-medium hover:underline text-sm">
              Fazer login
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpModal;
