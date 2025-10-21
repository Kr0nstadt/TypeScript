import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User, Project, mockUsers, mockProjects } from './mockData';

interface AppState {
  users: User[];
  projects: Project[];
  colorMode: 'light' | 'dark';
  addUser: (user: Omit<User, 'id'>) => void;
  addProject: (project: Omit<Project, 'id'>) => void;
  toggleUserStatus: (userId: number) => void;
  toggleColorMode: () => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');

  const addUser = (userData: Omit<User, 'id'>) => {
    const newUser: User = {
      ...userData,
      id: Math.max(0, ...users.map(u => u.id)) + 1,
    };
    setUsers(prev => [...prev, newUser]);
  };

  useEffect(() => {
    if (colorMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [colorMode]);
  
  const addProject = (projectData: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...projectData,
      id: Math.max(0, ...projects.map(p => p.id)) + 1,
    };
    setProjects(prev => [...prev, newProject]);
  };

  const toggleUserStatus = (userId: number) => {
    setUsers(prev => prev.map(user => 
      user.id === userId ? { ...user, status: !user.status } : user
    ));
  };

  const toggleColorMode = () => {
    setColorMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value: AppState = {
    users,
    projects,
    colorMode,
    addUser,
    addProject,
    toggleUserStatus,
    toggleColorMode,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppState must be used within AppProvider');
  }
  return context;
};