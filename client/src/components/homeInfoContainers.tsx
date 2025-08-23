import { motion } from 'framer-motion';

const HomeContainers = () => {
  return (
    <motion.div 
    className="home-containers"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}>
    
    </motion.div>
  );
};

export default HomeContainers;