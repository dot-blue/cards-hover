import React from "react";

import { items } from "../items";
import Card from "./Card";

function CardsGrid() {
  return (
    <div className="card-grid">
      <Card items={items} />
    </div>
  );
}

export default CardsGrid;
