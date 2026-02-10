import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SecurityGate from './components/SecurityGate';
import PortfolioMain from './components/PortfolioMain';


const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <SecurityGate onUnlock={() => setIsLoading(false)} />
        ) : (
          <PortfolioMain key="main" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
