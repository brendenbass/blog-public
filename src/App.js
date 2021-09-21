import './index.css';
import Header from './Components/Header'
import Post from './Components/Post';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect } from 'react';

function App() {
  return (
    <div>
          <div className="header"><Header/></div>
          <div>
          <Post/>
          <Post/>
          <Post/>
          </div>
          <div className="App" style={{ display: "flex", justifyContent: "center" }}>
            <EasybaseProvider>
              <Posts />
            </EasybaseProvider>
          </div>
    </div>
  );
}

function Posts() {
  const backendData = [
    { title: "Grocery List",
      description: "Milk, Soup, Bread",
      created: "01-18-2021"
    },
    { title: "Math Homework",
      description: "Milk, Soup, Bread",
      created: "07-18-2021"
    },
    { title: "Call Matthew",
      description: "Milk, Soup, Bread",
      created: "04-18-2021"
    },
  ]

const noteRootStyle = {
    border: "2px #0af solid",
    borderRadius: 9,
    margin: 20,
    backgroundColor: "#efefef",
    padding: 6
  };

return (
  <div style={{ width: 400 }}>
    {backendData.map(ele => 
      <div style={noteRootStyle}>
        <h3>{ele.title}</h3>
        <p>{ele.description}</p>
        <small>{ele.createdat}</small>
      </div>
    )}
  </div>
  )
}


export default App;
