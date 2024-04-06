import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    setInputValue("");
    onAddCategory(inputValue.trim());
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        name=""
        id=""
        value={inputValue}
        onChange={onInputChange}
        placeholder="Buscar Gifs"
      />
      {/* <button type="submit">Agregar</button> */}
    </form>
  );
};
