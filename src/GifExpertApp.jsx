import { useState } from "react";
import AddCategory from "./components/AddCategory";

export const GifExportApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} />

      <ol>
        {categories.map((category) => (
          <div className="" key={category}>
            <h3>{category}</h3>
            <li>{category}</li>
          </div>
        ))}
      </ol>
    </>
  );
};
