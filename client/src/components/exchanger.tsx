import { useState } from 'react';
import ContainerRecipient from './container-recipient';
import ContainerSender from './container-sender';
import ContainerSummary from './container-summary';

const ParentExchangeContainer = () => {
  const [senderBank, setSenderBank] = useState({ name: 'Сбербанк', icon: '💳' });
  const [recipientCurrency, setRecipientCurrency] = useState({ name: 'USDT', icon: '💵' });

  return (
    <div className="exchange-container">
      <ContainerSender 
        selectedBank={senderBank.name}
        onBankSelect={(currency, icon) => setSenderBank({ name: currency, icon })}
      />
      
      <ContainerRecipient 
        selectedCurrency={recipientCurrency.name}
        onCurrencySelect={(currency, icon) => setRecipientCurrency({ name: currency, icon })}
      />
      
      <ContainerSummary 
        senderBank={senderBank}
        recipientCurrency={recipientCurrency}
      />
    </div>
  );
};

export default ParentExchangeContainer;