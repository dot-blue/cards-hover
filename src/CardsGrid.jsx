import React from "react";

import { items } from "../items";
import Card from "./Card";

function CardsGrid() {
  return (
    <>
      <h1>The ABC</h1>
      <Card items={items} />
    </>
  );
}

export default CardsGrid;
