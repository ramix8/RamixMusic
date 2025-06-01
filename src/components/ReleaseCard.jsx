import { motion } from 'framer-motion';

const ReleaseCard = ({ release }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray rounded-xl overflow-hidden"
    >
      <img
        src={release.coverUrl}
        alt={release.title}
        className="w-full aspect-square object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold mb-1">{release.title}</h3>
        <p className="text-light/70 text-sm mb-3">{release.artist}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-light/50">{release.type}</span>
          <span className={`px-2 py-1 rounded text-xs ${
            release.status === 'active' ? 'bg-green-500/20 text-green-400' :
            'bg-yellow-500/20 text-yellow-400'
          }`}>
            {release.status}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ReleaseCard;