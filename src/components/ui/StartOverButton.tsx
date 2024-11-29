import React from 'react';
import { RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface StartOverButtonProps {
  onClick: () => void;
}

export function StartOverButton({ onClick }: StartOverButtonProps) {
  const { t } = useTranslation();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:from-purple-700 hover:to-purple-900"
    >
      <RefreshCw className="w-5 h-5" />
      <span>{t('startOver')}</span>
    </motion.button>
  );
}