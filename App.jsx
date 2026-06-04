import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import { LoadingProvider, useLoading } from './context/LoadingContext';
import { ActivityLogProvider } from './context/ActivityLogContext';
import { cn } from './utils/cn';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  CalendarCheck,
  FileText,
  Menu,
  X,
  Moon,
  Sun
} from 'lucide-react';

import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import Classes from './pages/Classes';
import Attendance from './pages/Attendance';
import Grades from './pages/Grades';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Students', href: '/students', icon: Users },
  { name: 'Teachers', href: '/teachers', icon: GraduationCap },
  { name: 'Classes', href: '/classes', icon: BookOpen },
  { name: 'Attendance', href: '/attendance', icon: CalendarCheck },
  { name: 'Grades', href: '/grades', icon: FileText },
];

function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

  return (
    <div className={cn(
      'fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
      isOpen ? 'translate-x-0' : '-translate-x-full'
    )}>
      <div className="flex items-center justify-between h-16 px-6 border-b border-slate-700">
        <h1 className="text-xl font-bold">School Manager</h1>
        <button onClick={() => setIsOpen(false)} className="lg:hidden hover:bg-slate-800 p-2 rounded-lg transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>
      <nav className="mt-6 px-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'flex items-center px-4 py-3 mb-2 rounded-lg transition-colors',
                isActive ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'
              )}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

function Header({ setIsOpen }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 h-16 flex items-center justify-between px-6">
      <button onClick={() => setIsOpen(true)} className="lg:hidden">
        <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </button>
      <div className="flex-1 lg:flex-none">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">School Management System</h2>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
        </button>
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
          A
        </div>
      </div>
    </header>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <ThemeProvider>
        <ToastProvider>
          <LoadingProvider>
            <ActivityLogProvider>
              <AppProvider>
                <div className="min-h-screen bg-gray-100 dark:bg-slate-900">
                  <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                  <div className="lg:ml-64">
                    <Header setIsOpen={setIsOpen} />
                    <main className="p-6">
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/students" element={<Students />} />
                        <Route path="/teachers" element={<Teachers />} />
                        <Route path="/classes" element={<Classes />} />
                        <Route path="/attendance" element={<Attendance />} />
                        <Route path="/grades" element={<Grades />} />
                      </Routes>
                    </main>
                  </div>
                </div>
              </AppProvider>
            </ActivityLogProvider>
          </LoadingProvider>
        </ToastProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
