
import React from 'react';
import { AlertCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ErrorCardProps {
  message: string;
  isVisible: boolean;
  onRetry: () => void;
}

const ErrorCard = ({ message, isVisible, onRetry }: ErrorCardProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 max-w-md mx-4 shadow-2xl border border-red-200">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Ops! Algo deu errado</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{message}</p>
          <Button
            onClick={onRetry}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            OK - Tentar Novamente
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorCard;
