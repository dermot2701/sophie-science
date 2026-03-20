import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import {
  LayoutDashboard, BookOpen, FileText, Calculator, Brain,
  Layers, CalendarDays, Lightbulb, Sun, Moon, Menu, X, Atom,
} from 'lucide-react'

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/formulas', label: 'Formulas', icon: Calculator },
  { path: '/quiz', label: 'Quizzes', icon: Brain },
  { path: '/flashcards', label: 'Flashcards', icon: Layers },
  { path: '/papers', label: 'Past Papers', icon: FileText },
  { path: '/planner', label: 'Planner', icon: CalendarDays },
  { path: '/tips', label: 'Exam Tips', icon: Lightbulb },
]

export default function AppShell({ children }) {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Mobile header */}
      <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
          <Atom size={24} className="text-violet-500" />
          <span>Sophie's Science</span>
        </Link>
        <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800
        transform transition-transform duration-200 ease-in-out
        lg:relative lg:translate-x-0 lg:flex lg:flex-col lg:shrink-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="hidden lg:flex items-center gap-2 px-6 py-5 font-bold text-lg">
          <Atom size={28} className="text-violet-500" />
          <span>Sophie's Science</span>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto mt-14 lg:mt-0">
          {navItems.map(item => {
            const Icon = item.icon
            const active = location.pathname === item.path ||
              (item.path !== '/' && location.pathname.startsWith(item.path))
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${active
                    ? 'bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300'
                    : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800'
                  }`}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-gray-800">
          <span className="text-xs text-gray-400">Theme</span>
          <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </aside>

      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main content */}
      <main className="flex-1 min-w-0 pb-20 lg:pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </div>
      </main>

      {/* Mobile bottom nav */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-50">
        <div className="flex justify-around py-2">
          {navItems.slice(0, 5).map(item => {
            const Icon = item.icon
            const active = location.pathname === item.path ||
              (item.path !== '/' && location.pathname.startsWith(item.path))
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-0.5 px-2 py-1 text-xs
                  ${active ? 'text-violet-600 dark:text-violet-400' : 'text-gray-400'}`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
