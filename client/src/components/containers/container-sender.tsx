import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../../assets/styles/container-exchanger.css';
interface CurrencyButtonProps {
  currency: string;
  icon: string;
  isSelected: boolean;
  onClick: () => void;
}

interface ContainerProps {
  selectedBank?: string;
  onBankSelect?: (currency: string, icon: string) => void;
}

const CurrencyButton: React.FC<CurrencyButtonProps> = ({ currency, icon, isSelected, onClick }) => (
  <motion.div
    className={`selector-card ${isSelected ? 'selected' : ''}`}
    onClick={onClick}
    whileHover={{ y: -3 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex flex-col items-center">
      <div className="selector-icon">
        {icon}
      </div>
      <span className="font-mono">{currency}</span>
    </div>
    
    {isSelected && (
      <motion.div
        className="selector-check"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 500 }}
      />
    )}
  </motion.div>
);

const ContainerSender: React.FC<ContainerProps> = ({ 
  selectedBank: propSelectedBank = 'Сбербанк', 
  onBankSelect 
}) => {
  const [internalSelectedBank, setInternalSelectedBank] = useState<string>(propSelectedBank);
  
  // Всегда используем internalSelectedBank, который инициализирован значением propSelectedBank
  const selectedBank = internalSelectedBank;

  const currencies = [
    { id: 'bank', name: 'Сбербанк', logo: '🏦' },
    { id: 'bank', name: 'Тинькофф', logo: '💳' },
    { id: 'bank', name: 'Альфа-Банк', logo: 'α' },
    { id: 'bank', name: 'ВТБ', logo: 'V' },
    { id: 'bank', name: 'Газпромбанк', logo: '⛽' },
    { id: 'bank', name: 'Райффайзен', logo: 'R' },
    { id: 'coin', name: 'USDT', logo: '💵' },
    { id: 'coin', name: 'BTC', logo: '🪙' },
    { id: 'coin', name: 'ETH', logo: '⧫' },
    { id: 'coin', name: 'Rub', logo: '💵' },
    { id: 'coin', name: 'By', logo: '🪙' },
    { id: 'coin', name: 'Euro', logo: '⧫' },
    { id: 'coin', name: 'China', logo: '💵' },
    { id: 'coin', name: 'Doge', logo: '🪙' },
  ];

  const handleBankSelect = (currency: string, icon: string) => {
    setInternalSelectedBank(currency);
    if (onBankSelect) {
      onBankSelect(currency, icon);
    }
  };

  return (
    <motion.div 
      className="selector-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="selector-title"> 
        Отправляете:
      </h3>

      <div className="selected-item-container">
        <div className="flex justify-between items-center">
          <p className="selector-title">Выбрано:</p>
          <motion.div 
            className="selected-item"
            layoutId="selectedCurrency"
          >
            <span className="font-mono text-cyan-300">{selectedBank}</span>
            <div className="selected-item-icon">
              {currencies.find(c => c.name === selectedBank)?.logo || '💳'}
            </div>
          </motion.div>
        </div>
      </div>      
      
      <div className="selector-cards-grid">
        {currencies.map((currency) => (
          <CurrencyButton
            key={currency.name}
            currency={currency.name}
            icon={currency.logo}
            isSelected={selectedBank === currency.name}
            onClick={() => handleBankSelect(currency.name, currency.logo)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ContainerSender;