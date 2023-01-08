import React from "react";

import { items } from "../items";
import Card from "./Card";

function CardsGrid() {
  return (
    <div className="card-grid">
      <h1>The ABC</h1>
      <Card items={items} />
    </div>
  );
}

export default CardsGrid;
