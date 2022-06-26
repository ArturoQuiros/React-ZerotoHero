import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const data = inputValue.trim();

    if (data.length < 1) return;
    onNewCategory(data);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="add Category"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};

export default AddCategory;
