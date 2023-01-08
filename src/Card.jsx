import React from "react";

function Card({ items }) {
  return (
    <div className="container">
      {items.map((item) => {
        return (
          <div className="card">
            <div key={item.id}>
              <div className="text">{item.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
