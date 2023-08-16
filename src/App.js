import React, { useState } from "react";

const recommList = ["apple", "banana", "cherry", "grape"];

const SearchWithRecomm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const query = e.target.value;
    setInputValue(query);
  };

  const suggestions = recommList.filter((item) =>
    item.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search.."
        value={inputValue}
        onChange={handleInputChange}
      />

      <div id="recomm">
        {suggestions.length > 0 && inputValue.length > 0 ? (
          suggestions.map((suggestion, index) => (
            <div
              key={index}
              className={`suggestion ${index === 0 ? "top-suggestion" : ""}`}
              onClick={() => setInputValue(suggestion)}
            >
              {suggestion}
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default SearchWithRecomm;
