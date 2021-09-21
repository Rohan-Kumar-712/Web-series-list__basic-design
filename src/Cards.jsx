import React from 'react';

function Card(props){
    return (
    <>
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="Dark" className="cardimage" />
        <div className="cardinfo">
          <span className="cardcategory">{props.title}</span>
          <div className="line">
          <h3 className="cardtitle">{props.sname}</h3>
          <a href={props.link} target="blank">
            <button>Watch Now</button>
          </a>
          </div>
          <p className="gen">Genre: {props.genre}</p>
        </div>
      </div>
    </div>
    </>
    )
  }

export default Card;  