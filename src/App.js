import './index.css';
import Header from './Components/Header'
import Posts from './Components/Posts';

function App() {
  return (
    <div>
      <div className="container">
          <Header/>
      </div>
      <div className="container">
          <Posts/>
      </div>
    </div>
  );
}

export default App;
