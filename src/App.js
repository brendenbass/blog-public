import './index.css';
import Header from './Components/Header';
import { EasybaseProvider } from 'easybase-react';
import ebconfig from './ebconfig';
import Home from './Components/Home';

function App() {

  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <div className="header"><Header/></div>
      <div className="mainContainer">
      <Home />
      </div>
    </EasybaseProvider>
  );
}

export default App;