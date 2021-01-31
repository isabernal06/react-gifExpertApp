import React, { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const hundleChange = (e) => {
    setInputValue(e.target.value);
  };

  const hundleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={hundleSubmit}>
      <input type="text" value={inputValue} onChange={hundleChange} />
    </form>
  );
};
