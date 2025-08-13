import React from 'react';
import { motion } from 'framer-motion';
import '../../assets/styles/container-exchanger.css';

interface SummaryCardProps {
  senderBank: {
    name: string;
    icon: string;
  };
  recipientCurrency: {
    name: string;
    icon: string;
  };
}

const ContainerSummary: React.FC<SummaryCardProps> = ({ 
  senderBank,
  recipientCurrency
}) => {
  return (
    <motion.div
      className="selector-container summary-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="selector-title">
        Данные для обмена:
      </h3>

      <div className="summary-content">
        <div className="summary-item">
          <p className='selector-title' style={{marginTop:'5px'}}>Отправляете:</p>
          <div className="summary-text">
            <div className="summary-icon">{senderBank.icon}</div>
            <p className="font-mono">{senderBank.name}</p>
          </div>
        </div>

      <div className="summary-input-container">
        <input
          type="number"
          placeholder="Введите сумму"
          className="summary-input"
        />
      </div>
        <div className="summary-item">
          <p className='selector-title'>Получаете:</p>
          <div className="summary-text">
            <div className="summary-icon">{recipientCurrency.icon}</div>
            <p className="font-mono">{recipientCurrency.name}</p>
          </div>
        </div>
      </div>

      <div className="summary-input-container">
        <input
          type="number"
          placeholder="Введите сумму"
          className="summary-input"
        />
      </div>

      <motion.button
        className="auth-btn summary-button"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        Подтвердить обмен
      </motion.button>
    </motion.div>
  );
};

export default ContainerSummary;