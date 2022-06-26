import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["DBZ", "Naruto"]);
  const onAddCategory = (newCategorie) => {
    setCategories([...categories, newCategorie]);
  };
  return (
    <>
      <h1>Gift Expert App</h1>
      <AddCategory onNewCategory={onAddCategory} />
      <ul>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ul>
    </>
  );
};

export default GiftExpertApp;
