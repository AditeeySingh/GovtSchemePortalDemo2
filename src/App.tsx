import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SearchForm } from './components/SchemeSearch/SearchForm';
import { AIChat } from './components/ChatBot/AIChat';
import { SchemeCompare } from './components/SchemeComparison/SchemeCompare';
import { Search, MessageSquare, LayoutGrid } from 'lucide-react';
import { Button } from './components/ui/Button';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <header className="bg-gray-900 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-purple-400">
                Government Scheme Portal
              </h1>
              <div className="flex items-center gap-4">
                <LanguageSwitcher />
                <nav>
                  <Link to="/">
                    <Button variant="secondary">{t('home')}</Button>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/find-scheme" element={<SearchForm />} />
            <Route path="/chat" element={<AIChat />} />
            <Route path="/compare" element={<SchemeCompare />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-purple-400 mb-8">
        {t('findSupportSchemes')}
      </h1>
      <p className="text-xl text-gray-300 mb-12">
        {t('discoverSchemes')}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/find-scheme">
          <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors">
            <Search className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-purple-400">{t('findYourScheme')}</h2>
            <p className="text-gray-300">
              {t('findSchemeDescription')}
            </p>
          </div>
        </Link>

        <Link to="/chat">
          <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors">
            <MessageSquare className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-purple-400">{t('semanticSearch')}</h2>
            <p className="text-gray-300">
              {t('chatDescription')}
            </p>
          </div>
        </Link>

        <Link to="/compare">
          <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors">
            <LayoutGrid className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-purple-400">{t('compareSchemes')}</h2>
            <p className="text-gray-300">
              {t('compareDescription')}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default App;