import React, { useState } from 'react';
import { useAppState } from '../../data/Store';
import { Cat, Moon, Sun, User, Mail, Shield, Building } from 'lucide-react';

interface UserFormData {
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  department: string;
}

const UserModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<UserFormData>({
    name: '',
    email: '',
    role: 'user',
    department: 'Разработка',
  });

  const { addUser } = useAppState();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    addUser({
      name: formData.name,
      email: formData.email,
      role: formData.role,
      department: formData.department,
      status: true,
      joinDate: new Date().toISOString().split('T')[0],
    });
    
    console.log('Данные пользователя:', formData);
    alert('Пользователь добавлен!');
    onClose();
    setFormData({ name: '', email: '', role: 'user', department: 'Разработка' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl border-2 border-pink-200 shadow-2xl w-full max-w-md">
        <div className="p-6 border-b-2 border-pink-200 bg-gradient-to-r from-pink-100 to-purple-100 rounded-t-3xl">
          <h2 className="text-2xl font-bold text-pink-600 text-center">
            🐱 Добавить пользователя
          </h2>
        </div>
        
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-pink-600 font-semibold mb-2">
                <User className="inline w-4 h-4 mr-2" />
                Имя
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Введите имя..."
                className="input-cute w-full"
                required
              />
            </div>

            <div>
              <label className="block text-purple-600 font-semibold mb-2">
                <Mail className="inline w-4 h-4 mr-2" />
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Введите email..."
                className="input-cute w-full"
                required
              />
            </div>

            <div>
              <label className="block text-pink-600 font-semibold mb-2">
                <Shield className="inline w-4 h-4 mr-2" />
                Роль
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value as 'admin' | 'user' | 'moderator' })}
                className="input-cute w-full"
                required
              >
                <option value="user">Пользователь</option>
                <option value="admin">Администратор</option>
                <option value="moderator">Модератор</option>
              </select>
            </div>

            <div>
              <label className="block text-purple-600 font-semibold mb-2">
                <Building className="inline w-4 h-4 mr-2" />
                Отдел
              </label>
              <select
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="input-cute w-full"
                required
              >
                <option value="Разработка">Разработка</option>
                <option value="Дизайн">Дизайн</option>
                <option value="Маркетинг">Маркетинг</option>
                <option value="Тестирование">Тестирование</option>
              </select>
            </div>

            <div className="flex space-x-4 pt-4">
              <button
                type="submit"
                className="btn-primary flex-1 h-12"
              >
                💾 Сохранить
              </button>
              <button
                type="button"
                onClick={onClose}
                className="btn-secondary flex-1 h-12"
              >
                ❌ Отмена
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return { isOpen, onOpen, onClose };
};

const ChakraComponents: React.FC = () => {
  const modal = useModal();
  const { colorMode, toggleColorMode, users } = useAppState();

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Chakra UI Компоненты
        </h2>
        <p className="text-lg text-purple-600 opacity-80">
          Модальные окна и темы с котиками! 🐾
        </p>
      </div>

      <div className="flex justify-center space-x-6 mb-8">
        <button
          onClick={modal.onOpen}
          className="btn-primary text-lg font-bold h-14 px-8 flex items-center space-x-2"
        >
          <Cat size={24} />
          <span>Добавить пользователя</span>
        </button>
        
        <button
          onClick={toggleColorMode}
          className="btn-primary flex items-center space-x-2"
        >
          {colorMode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          <span>{colorMode === 'light' ? 'Темная тема' : 'Светлая тема'}</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="card text-center p-8">
          <Cat size={48} className="mx-auto mb-4 text-pink-500 animate-bounce-gentle" />
          <div className="text-2xl font-bold text-pink-600 mb-2">Модальные окна</div>
          <div className="text-purple-600">
            Красивые модальные окна с валидацией и плавными анимациями
          </div>
        </div>

        <div className="card text-center p-8">
          <div className="flex justify-center space-x-4 mb-4">
            <Sun size={48} className="text-yellow-500" />
            <Moon size={48} className="text-purple-500" />
          </div>
          <div className="text-2xl font-bold text-purple-600 mb-2">Темная тема</div>
          <div className="text-pink-600">
            Переключайтесь между темами - все цвета адаптируются автоматически
          </div>
        </div>
      </div>

      <div className="card text-center p-6">
        <div className="text-lg text-purple-700">
          Текущая тема: <span className="font-bold text-pink-600">
            {colorMode === 'light' ? 'Светлая 🌸' : 'Темная 🌙'}
          </span>
        </div>
      </div>

      {/* Список добавленных пользователей */}
      <div className="card">
        <h3 className="text-2xl font-bold text-pink-600 mb-4 text-center">
          📝 Добавленные пользователи ({users.length})
        </h3>
        <div className="space-y-3 max-h-60 overflow-y-auto">
          {users.map(user => (
            <div key={user.id} className="p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-200">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold text-pink-700">{user.name}</div>
                  <div className="text-sm text-purple-600">{user.email}</div>
                </div>
                <div className="text-right">
                  <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    user.role === 'admin' ? 'bg-red-100 text-red-800' :
                    user.role === 'moderator' ? 'bg-purple-100 text-purple-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {user.role}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{user.department}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <UserModal isOpen={modal.isOpen} onClose={modal.onClose} />
    </div>
  );
};

export default ChakraComponents;