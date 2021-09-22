import { useEasybase } from 'easybase-react';
import { useEffect, useState } from "react";
import Post from './Post';

function Home() {
    const [easybaseData, setEasybaseData] = useState([]);
    const { db } = useEasybase();
  
    const mounted = async() => {
      const ebData = await db("INSTA BLOG").return().limit(10).all();
      setEasybaseData(ebData);
    }
  
    useEffect(() => {
      mounted();
    }, [])
  
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {easybaseData.map(ele => 
          <div>
            <Post author={ele.author} image={ele.image} description={ele.description} created={ele.created}/>
          </div>
        )}
      </div>
    )
  }

  export default Home