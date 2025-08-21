import { motion } from 'framer-motion';
import React from 'react';
import '../../assets/styles/containers.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className = '' }: ContainerProps) {
  return (
    <motion.div 
      className={`containers ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        display: "flex",
        textAlign: "start", 
        padding: "10px",
        width: "auto"
    }}
    >
      {children}
    </motion.div>
  );
}

export default Container;