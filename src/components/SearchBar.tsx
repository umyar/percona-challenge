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

  const fetchGifs = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.trim().length === 0) {
      alert("Please type something meaningful for fetching gifs!");
      return;
    }

    onSearch(inputValue);
  };

  return (
    <form onSubmit={fetchGifs} className="search-bar">
      <input
        onChange={onInputChange}
        value={inputValue}
        disabled={disabled}
        type="text"
        placeholder="Type some gif name"
      />
      <input type="submit" disabled={disabled} value="Fetch Gifs" />
    </form>
  );
};
