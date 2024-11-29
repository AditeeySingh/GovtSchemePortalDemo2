import React, { useState, useEffect } from 'react';
import { Search, Plus, RefreshCw, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import type { Scheme } from '@/types/scheme';
import { useTranslation } from 'react-i18next';

export function SchemeCompare() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSchemes, setSelectedSchemes] = useState<Scheme[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const { t } = useTranslation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    // Simulated API call
    setTimeout(() => setIsSearching(false), 1000);
  };

  const addScheme = () => {
    if (selectedSchemes.length < 4) {
      const newScheme: Scheme = {
        id: Date.now().toString(),
        name: 'Sample Scheme',
        description: 'This is a sample scheme description',
        eligibilityCriteria: ['Criteria 1', 'Criteria 2'],
        benefits: ['Benefit 1', 'Benefit 2'],
        documents: ['Document 1', 'Document 2'],
        category: 'education',
        central: true
      };
      setSelectedSchemes([...selectedSchemes, newScheme]);
    }
  };

  const removeScheme = (id: string) => {
    setSelectedSchemes(selectedSchemes.filter(scheme => scheme.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <form onSubmit={handleSearch} className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder={t('searchSchemes')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <Button 
            type="submit" 
            className="min-w-[120px]"
            disabled={isSearching}
          >
            {isSearching ? (
              <RefreshCw className="w-5 h-5 animate-spin" />
            ) : (
              t('search')
            )}
          </Button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence>
          {selectedSchemes.map((scheme, index) => (
            <motion.div
              key={scheme.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 relative min-h-[400px] flex flex-col"
            >
              <button
                onClick={() => removeScheme(scheme.id)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h3 className="text-xl font-semibold text-purple-400 mb-4">{scheme.name}</h3>
              <p className="text-gray-300 mb-6">{scheme.description}</p>
              
              <div className="space-y-4 flex-1">
                <div>
                  <h4 className="font-medium text-white mb-2">{t('eligibility')}:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-300">
                    {scheme.eligibilityCriteria.map((criteria, i) => (
                      <li key={i}>{criteria}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-white mb-2">{t('benefits')}:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-300">
                    {scheme.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-700">
                <span className="text-sm text-gray-400">
                  {scheme.central ? t('centralScheme') : t('stateScheme')}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {selectedSchemes.length < 4 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={addScheme}
            className="h-full min-h-[400px] border-2 border-dashed border-gray-700 rounded-lg flex flex-col items-center justify-center gap-4 hover:border-purple-500 hover:bg-gray-800/50 transition-all duration-200 group"
          >
            <Plus className="w-12 h-12 text-gray-400 group-hover:text-purple-400 transition-colors" />
            <span className="text-gray-400 group-hover:text-purple-400 transition-colors">
              {t('addScheme')}
            </span>
          </motion.button>
        )}
      </div>
    </div>
  );
}