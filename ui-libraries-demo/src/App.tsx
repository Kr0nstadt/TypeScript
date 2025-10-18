import React, { useState } from 'react';
import { Heart, Cat, Flower, Palette } from 'lucide-react';
import MuiComponents from './components/MuiComponents/MuiComponents';
import AntDesignComponents from './components/AntDesignComponents/AntDesignComponents';
import ChakraComponents from './components/ChakraComponents/ChakraComponents';
import RadixComponents from './components/RadixComponents/RadixComponents';
import { AppProvider } from './data/Store';
import './styles/tailwind.css';


const tabs = [
  { id: 'mui', label: 'Material-UI', icon: Palette },
  { id: 'antd', label: 'Ant Design', icon: Flower },
  { id: 'chakra', label: 'Chakra UI', icon: Cat },
  { id: 'radix', label: 'Radix UI', icon: Heart },
];

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mui');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'mui':
        return <MuiComponents />;
      case 'antd':
        return <AntDesignComponents />;
      case 'chakra':
        return <ChakraComponents />;
      case 'radix':
        return <RadixComponents />;
      default:
        return <MuiComponents />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-50 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-float-delayed"></div>
      <div className="absolute bottom-20 left-20 w-28 h-28 bg-pink-300 rounded-full opacity-25 animate-float-slow"></div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            UI Libraries Demo
          </h1>
          <p className="text-xl text-purple-700 opacity-80">
            Милое приложение с котиками и цветочками 🌸🐱
          </p>
        </div>

        {/* Навигация */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-pink-200">
            <div className="flex space-x-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg transform scale-105'
                        : 'text-purple-700 hover:bg-pink-100'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-semibold">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Контент */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-pink-200 p-8 min-h-[600px]">
          {renderTabContent()}
        </div>

        {/* Футер */}
        <footer className="text-center mt-12 text-purple-600 opacity-70">
          <p>Сделано с 💖 для любителей котиков и красивых интерфейсов</p>
        </footer>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
