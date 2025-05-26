
import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  isVisible: boolean;
}

const ErrorMessage = ({ message, isVisible }: ErrorMessageProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-red-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg border border-red-400/50 flex items-center gap-2 text-sm">
        <AlertCircle className="w-4 h-4" />
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
};

export default ErrorMessage;
