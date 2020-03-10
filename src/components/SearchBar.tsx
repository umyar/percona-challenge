import React, { useState } from "react";

type SearchBarProps = {
  onSearch: (searchString: string) => void;
  disabled: boolean;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, disabled }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const fetchGifs = () => {
    if (inputValue.trim().length === 0) {
      alert("Please type something meaningful for fetching gifs!");
      return;
    }

    onSearch(inputValue);
  };

  return (
    <div className="search-bar">
      <input
        onChange={onInputChange}
        value={inputValue}
        disabled={disabled}
        type="text"
        placeholder="Type some gif name"
      />
      <button onClick={fetchGifs} disabled={disabled}>
        Fetch Gifs
      </button>
    </div>
  );
};
