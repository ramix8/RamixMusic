import { motion } from 'framer-motion';

const StatsCard = ({ title, value, icon, trend }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray rounded-xl p-6"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-light/70 mb-2">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
        <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
          <i className={`fas fa-${icon} text-accent`}></i>
        </div>
      </div>
      <div className="mt-4 flex items-center text-sm">
        <span className="text-green-400">{trend}</span>
        <span className="text-light/50 ml-2">за месяц</span>
      </div>
    </motion.div>
  );
};

export default StatsCard;