import './index.css';
import Header from './Components/Header'
import Post from './Components/Post';

function App() {
  return (
    <div>
          <div className="header"><Header/></div>
          <div>
          <Post/>
          <Post/>
          <Post/>
          </div>
    </div>
  );
}

export default App;
