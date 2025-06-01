import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: 'home', label: 'Главная' },
    { path: '/releases', icon: 'music', label: 'Релизы' },
    { path: '/statistics', icon: 'chart-line', label: 'Статистика' },
    { path: '/balance', icon: 'wallet', label: 'Баланс' },
    { path: '/settings', icon: 'cog', label: 'Настройки' },
  ];

  return (
    <motion.aside
      initial={{ x: -220 }}
      animate={{ x: 0 }}
      className="fixed left-0 top-0 h-screen w-[220px] bg-gray p-6 shadow-xl"
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <Link to="/" className="mb-8">
          <img
            src="https://i.postimg.cc/hJJc0YcN/ramix-logo.png"
            alt="Ramix Music"
            className="h-8"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all ${
                    location.pathname === item.path
                      ? 'bg-accent text-dark'
                      : 'text-light/70 hover:bg-light/5'
                  }`}
                >
                  <i className={`fas fa-${item.icon} w-5`}></i>
                  <span className="ml-3">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="pt-6 border-t border-light/10">
          <div className="flex items-center p-4 rounded-lg bg-light/5">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-dark font-bold">
              A
            </div>
            <div className="ml-3">
              <div className="font-medium">Артист</div>
              <div className="text-sm text-light/50">Профиль</div>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;