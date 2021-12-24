import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    const newItem = items.filter((item) => {
      item.category === category;
    });
    setMenuItems(newItem);
  };

  return (
    <main>
      <section className="menu section">
        <dev className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
          <Categories filterItems={filterItems} />
          <Menu items={menuItems} />
        </dev>
      </section>
    </main>
  );
}

export default App;
