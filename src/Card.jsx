import React from "react";

function Card({ items }) {
  return (
    <div className="container">
      {items.map((item) => {
        return (
          <div key={item.id} className="card">
            <p> {item.name}</p>
            <span className="text">{item.text}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
