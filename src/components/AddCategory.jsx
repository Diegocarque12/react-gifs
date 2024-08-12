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
    <form onSubmit={(event) => onSubmit(event)} className="add-category-form">
      <input
        type="text"
        name="category"
        id="category-input"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Buscar Gifs"
        className="category-input"
        autoComplete="off"
      />
      <button type="submit" className="submit-button">Agregar</button>
      <div className="input-info">
        <p>Ingrese una categoría para buscar GIFs</p>
        <span className="char-count">{inputValue.length}/50</span>
      </div>
      <div className="recent-searches">
        <h4>Búsquedas recientes:</h4>
        <ul>
          <li>Gatos</li>
          <li>Perros</li>
          <li>Memes</li>
        </ul>
      </div>
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};
