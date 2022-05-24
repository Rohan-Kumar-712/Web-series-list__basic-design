import React from 'react';
import Card from './Cards';
import './index.css';
import Sdata from './Sdata';

function App() {
    return (
<>
  <h1 className="header">Top Netflix Shows</h1>
  {Sdata.map((val) => {
      console.log(val);
      return (
        <Card 
        key={val.id}
        imgsrc={val.imgsrc} 
        title={val.title} 
        sname={val.sname} 
        link={val.link} 
        genre={val.genre} />
      );
  })}           
</>
    )
}

export default App;