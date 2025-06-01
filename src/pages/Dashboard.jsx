import { motion } from 'framer-motion';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Sidebar from '../components/Sidebar';
import ReleaseCard from '../components/ReleaseCard';
import StatsCard from '../components/StatsCard';

const Dashboard = () => {
  const { user } = useAuth();
  const [releases, setReleases] = useState([]);

  return (
    <div className="flex min-h-screen bg-dark">
      <Sidebar />
      
      <main className="flex-1 p-8 ml-[220px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          {/* Welcome Section */}
          <div className="bg-gray rounded-2xl p-8 mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Добро пожаловать, {user?.displayName || 'Артист'}!
            </h1>
            <p className="text-light/70">
              Управляйте своими релизами и отслеживайте статистику
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard
              title="Активные релизы"
              value="0"
              icon="music"
              trend="+0%"
            />
            <StatsCard
              title="Прослушивания"
              value="0"
              icon="play"
              trend="+0%"
            />
            <StatsCard
              title="Заработано"
              value="0 ₽"
              icon="wallet"
              trend="+0%"
            />
          </div>

          {/* Recent Releases */}
          <section className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Последние релизы</h2>
              <button className="btn btn-primary">
                <i className="fas fa-plus mr-2"></i>
                Загрузить релиз
              </button>
            </div>

            {releases.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {releases.map((release) => (
                  <ReleaseCard key={release.id} release={release} />
                ))}
              </div>
            ) : (
              <div className="bg-gray rounded-2xl p-12 text-center">
                <i className="fas fa-music text-4xl text-accent mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Нет релизов</h3>
                <p className="text-light/70 mb-6">
                  Загрузите свой первый релиз, чтобы начать дистрибуцию
                </p>
                <button className="btn btn-primary">
                  Загрузить первый релиз
                </button>
              </div>
            )}
          </section>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;