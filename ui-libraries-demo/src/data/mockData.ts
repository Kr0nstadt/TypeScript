export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  department: string;
  status: boolean;
  joinDate: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  categories: string[];
  deadline: string;
  budget: number;
}

export interface ChartData {
  date: string;
  value: number;
  category: string;
}

export interface StatsData {
  revenue: number;
  users: number;
  projects: number;
  conversion: number;
}

export const mockUsers: User[] = [
  { id: 1, name: 'Анна Котова', email: 'anna@meow.com', role: 'admin', department: 'Разработка', status: true, joinDate: '2023-01-15' },
  { id: 2, name: 'Максим Кошкин', email: 'max@purr.com', role: 'user', department: 'Дизайн', status: true, joinDate: '2023-02-20' },
  { id: 3, name: 'София Мурзикова', email: 'sofia@whiskers.com', role: 'moderator', department: 'Маркетинг', status: false, joinDate: '2023-03-10' },
  { id: 4, name: 'Дмитрий Пушистин', email: 'dmitry@fluffy.com', role: 'user', department: 'Разработка', status: true, joinDate: '2023-04-05' },
  { id: 5, name: 'Елена Лапкина', email: 'elena@paws.com', role: 'user', department: 'Дизайн', status: true, joinDate: '2023-05-12' },
  { id: 6, name: 'Артем Хвостиков', email: 'artem@tail.com', role: 'moderator', department: 'Тестирование', status: false, joinDate: '2023-06-18' },
  { id: 7, name: 'Ольга Мурлыкина', email: 'olga@purrr.com', role: 'user', department: 'Маркетинг', status: true, joinDate: '2023-07-22' },
  { id: 8, name: 'Иван Когтев', email: 'ivan@claws.com', role: 'admin', department: 'Разработка', status: true, joinDate: '2023-08-30' },
  { id: 9, name: 'Мария Пушистая', email: 'maria@fluff.com', role: 'user', department: 'Дизайн', status: false, joinDate: '2023-09-14' },
  { id: 10, name: 'Сергей Усатов', email: 'sergey@whiskers.com', role: 'user', department: 'Тестирование', status: true, joinDate: '2023-10-08' },
];

export const mockProjects: Project[] = [
  { id: 1, name: 'Котикотека', description: 'Библиотека для любителей котиков', priority: 'high', categories: ['frontend', 'design'], deadline: '2024-12-31', budget: 50000 },
  { id: 2, name: 'Мурчик CRM', description: 'CRM система для кошачьих питомников', priority: 'medium', categories: ['backend', 'mobile'], deadline: '2024-11-15', budget: 75000 },
];

export const mockChartData: ChartData[] = [
  { date: '2024-01', value: 100, category: 'Котики' },
  { date: '2024-02', value: 150, category: 'Котики' },
  { date: '2024-03', value: 200, category: 'Котики' },
  { date: '2024-04', value: 180, category: 'Котики' },
  { date: '2024-01', value: 80, category: 'Цветочки' },
  { date: '2024-02', value: 120, category: 'Цветочки' },
  { date: '2024-03', value: 160, category: 'Цветочки' },
  { date: '2024-04', value: 140, category: 'Цветочки' },
];

export const mockStats: StatsData = {
  revenue: 125430,
  users: 2847,
  projects: 143,
  conversion: 12.5,
};

export const categoriesOptions = [
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Design', value: 'design' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'AI', value: 'ai' },
];