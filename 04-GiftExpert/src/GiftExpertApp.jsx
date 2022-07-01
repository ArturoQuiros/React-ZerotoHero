import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["DBZ"]);
  const onAddCategory = (newCategorie) => {
    if (categories.includes(newCategorie)) return;
    setCategories([newCategorie, ...categories]);
  };
  return (
    <>
      <h1>Gift Expert App</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GiftExpertApp;
