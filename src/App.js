import './App.scss';
import { useEffect, useState } from 'react';
import WaitingScreen from './components/WaitingScreen';
import LofiApp from './components/LofiApp';

function App() {

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  })

  return (
    <div className="App">
      { isLoading ? <WaitingScreen /> : <LofiApp /> }
    </div>
  );
}

export default App;
