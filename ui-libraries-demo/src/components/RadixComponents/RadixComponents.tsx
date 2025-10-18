import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Tabs from '@radix-ui/react-tabs';
import { Cat, User, Settings, LogOut, Flower, X, ChevronDown } from 'lucide-react';

interface TabItem {
  id: string;
  label: string;
  content: string;
  disabled?: boolean;
}

const RadixComponents: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [dialogOpen, setDialogOpen] = useState(false);

  const tabs: TabItem[] = [
    { id: 'tab1', label: '🌸 Профиль', content: 'Здесь информация о вашем профиле котика! 🐱' },
    { id: 'tab2', label: '🐱 Настройки', content: 'Настройте ваш интерфейс с котиками и цветочками! 🌸' },
    { id: 'tab3', label: '🚀 Проекты', content: 'Ваши проекты с котиками и магией! ✨' },
    { id: 'tab4', label: '💝 Премиум', content: 'Премиум функции для настоящих ценителей красоты!', disabled: true },
  ];

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    console.log('Активная вкладка:', value);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-8">
        Radix UI + Tailwind
      </h2>

      <div className="grid grid-cols-2 gap-8">
        {/* Модальное окно */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-pink-600 text-center">Модальное окно</h3>
          <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
            <Dialog.Trigger asChild>
              <button className="btn-primary w-full text-lg font-bold py-4">
                🐱 Открыть диалог
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fade-in z-50" />
              <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl border-2 border-pink-200 shadow-2xl animate-fade-in z-50">
                <Dialog.Title className="text-2xl font-bold text-pink-600 text-center mb-4">
                  💝 Волшебное окно
                </Dialog.Title>
                <Dialog.Description className="text-purple-600 text-center mb-6">
                  Это красивое модальное окно с котиками и цветочками! 
                  Всё стилизовано с помощью Tailwind CSS.
                </Dialog.Description>
                
                <div className="text-center space-y-4">
                  <Cat className="mx-auto text-pink-500 animate-bounce-gentle" size={64} />
                  <p className="text-lg text-purple-700">
                    Котики одобряют этот дизайн! 🐾
                  </p>
                </div>

                <div className="flex justify-center space-x-4 mt-6">
                  <button 
                    onClick={() => setDialogOpen(false)}
                    className="btn-primary px-6 py-2"
                  >
                    Понятно!
                  </button>
                  <button 
                    onClick={() => setDialogOpen(false)}
                    className="btn-secondary px-6 py-2"
                  >
                    Закрыть
                  </button>
                </div>

                <Dialog.Close asChild>
                  <button
                    className="absolute top-4 right-4 text-pink-500 hover:text-pink-700 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>

        {/* Выпадающее меню */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-purple-600 text-center">Выпадающее меню</h3>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="btn-secondary w-full text-lg font-bold py-4 flex items-center justify-center space-x-2">
                <User size={20} />
                <span>Меню пользователя</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="min-w-[220px] bg-white/95 backdrop-blur-sm rounded-2xl p-2 shadow-2xl border-2 border-pink-200 animate-fade-in z-50"
                sideOffset={5}
              >
                <DropdownMenu.Item className="flex items-center space-x-2 px-3 py-2 text-purple-700 rounded-xl hover:bg-pink-100 cursor-pointer transition-colors">
                  <User className="w-4 h-4" />
                  <span>Профиль</span>
                </DropdownMenu.Item>
                
                <DropdownMenu.Item className="flex items-center space-x-2 px-3 py-2 text-purple-700 rounded-xl hover:bg-pink-100 cursor-pointer transition-colors">
                  <Settings className="w-4 h-4" />
                  <span>Настройки</span>
                </DropdownMenu.Item>
                
                <DropdownMenu.Separator className="h-px bg-pink-200 my-1" />
                
                <DropdownMenu.Item 
                  className="flex items-center space-x-2 px-3 py-2 text-red-500 rounded-xl hover:bg-red-100 cursor-pointer transition-colors"
                  onSelect={() => alert('Выход из системы!')}
                >
                  <LogOut className="w-4 h-4" />
                  <span>Выйти</span>
                </DropdownMenu.Item>

                <DropdownMenu.Arrow className="fill-pink-200" />
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>

      {/* Компонент вкладок */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-center text-pink-600">Вкладки с котиками</h3>
        
        <Tabs.Root value={activeTab} onValueChange={handleTabChange}>
          <Tabs.List className="flex space-x-2 p-2 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-pink-200 shadow-lg">
            {tabs.map((tab) => (
              <Tabs.Trigger
                key={tab.id}
                value={tab.id}
                disabled={tab.disabled}
                className={`
                  flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300
                  ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg transform scale-105'
                    : 'text-purple-700 hover:bg-pink-100'
                  }
                  ${tab.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                `}
              >
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <div className="mt-6 p-8 bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-purple-200 shadow-xl min-h-[200px]">
            {tabs.map((tab) => (
              <Tabs.Content key={tab.id} value={tab.id} className="text-center">
                <Flower className="mx-auto mb-4 text-pink-500 animate-spin-slow" size={48} />
                <h4 className="text-2xl font-bold text-purple-600 mb-4">{tab.label}</h4>
                <p className="text-lg text-purple-700">{tab.content}</p>
                {tab.disabled && (
                  <p className="text-pink-500 mt-4 font-semibold">
                    🔒 Эта вкладка временно недоступна
                  </p>
                )}
              </Tabs.Content>
            ))}
          </div>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default RadixComponents;