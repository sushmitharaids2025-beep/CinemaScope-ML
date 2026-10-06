import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ExportModal from './components/ExportModal';
import ApiConnectorModal from './components/ApiConnectorModal';

// Views
import DashboardOverview from './views/DashboardOverview';
import MoviePredictor from './views/MoviePredictor';
import RiskAnalysis from './views/RiskAnalysis';
import EdaAnalytics from './views/EdaAnalytics';
import ModelComparison from './views/ModelComparison';
import DatasetPipeline from './views/DatasetPipeline';
import RecommendationsView from './views/RecommendationsView';
import AboutProject from './views/AboutProject';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isApiModalOpen, setIsApiModalOpen] = useState(false);
  const [isApiConnected, setIsApiConnected] = useState(false);
  const [apiUrl, setApiUrl] = useState('http://localhost:8000/api/predict');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPreset, setSelectedPreset] = useState(null);
  const [lastPrediction, setLastPrediction] = useState(null);

  const handleSelectPreset = (preset) => {
    setSelectedPreset(preset);
    setActiveTab('predictor');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render current active view
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <DashboardOverview
            setActiveTab={setActiveTab}
            onSelectPreset={handleSelectPreset}
          />
        );
      case 'predictor':
        return (
          <MoviePredictor
            initialPreset={selectedPreset}
            onPredictionChange={setLastPrediction}
            openExportModal={() => setIsExportModalOpen(true)}
          />
        );
      case 'risk':
        return <RiskAnalysis setActiveTab={setActiveTab} />;
      case 'eda':
        return <EdaAnalytics />;
      case 'models':
        return <ModelComparison openApiModal={() => setIsApiModalOpen(true)} />;
      case 'dataset':
        return <DatasetPipeline setActiveTab={setActiveTab} />;
      case 'recommendations':
        return <RecommendationsView setActiveTab={setActiveTab} />;
      case 'about':
        return <AboutProject />;
      default:
        return (
          <DashboardOverview
            setActiveTab={setActiveTab}
            onSelectPreset={handleSelectPreset}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex">
      {/* Responsive Collapsible Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-72 transition-all duration-300">
        {/* Top Header */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          openExportModal={() => setIsExportModalOpen(true)}
          openApiModal={() => setIsApiModalOpen(true)}
          isApiConnected={isApiConnected}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Search Results Filter Banner if Search is active */}
        {searchQuery.trim() && (
          <div className="mx-4 sm:mx-8 mt-4 p-3.5 rounded-xl bg-slate-900 border border-indigo-500/40 text-xs flex items-center justify-between gap-2 shadow-lg">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="font-bold text-white">Search Filter:</span>
              <span>Showing results for "{searchQuery}"</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Jump to section:</span>
              <div className="flex gap-1.5 flex-wrap">
                {['eda', 'predictor', 'models', 'dataset', 'risk', 'about'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setSearchQuery('');
                    }}
                    className="px-2 py-0.5 rounded bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/30 capitalize font-medium"
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="ml-2 px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:text-white"
              >
                Clear
              </button>
            </div>
          </div>
        )}

        {/* Page View Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {renderContent()}
        </main>

        {/* Bottom Project Review Footer */}
        <footer className="border-t border-slate-800/80 px-6 py-4 text-center text-xs text-slate-400 bg-slate-950/60 no-print">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>
              <strong>CinemaScope AI</strong> • Explainable Movie Success Prediction & Box Office Analytics Framework
            </p>
            <p className="text-[11px] font-mono text-slate-400">
              CS5403 ML • II-Year PBL Review-II • Section E
            </p>
          </div>
        </footer>
      </div>

      {/* Export Report Printable Modal */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        lastPrediction={lastPrediction}
        activeTab={activeTab}
      />

      {/* Backend API Connector Modal */}
      <ApiConnectorModal
        isOpen={isApiModalOpen}
        onClose={() => setIsApiModalOpen(false)}
        isConnected={isApiConnected}
        setIsConnected={setIsApiConnected}
        apiUrl={apiUrl}
        setApiUrl={setApiUrl}
      />
    </div>
  );
}
