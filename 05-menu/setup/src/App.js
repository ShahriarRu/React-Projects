import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = [
  "all",
  ...new Set(
    items.map((item) => {
      return item.category;
    })
  ),
];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItem = items.filter((item) => {
      return item.category === category;
    });
    setMenuItems(newItem);
  };

  return (
    <main>
      <section className="menu section">
        <dev className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
          <Categories filterItems={filterItems} categories={categories} />
          <Menu items={menuItems} />
        </dev>
      </section>
    </main>
  );
}

export default App;
