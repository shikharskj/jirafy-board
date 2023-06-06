import { useState } from "react";

export const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");

  const showSearchedTasks = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.target.value);
  };

  return (
      <input
        placeholder="Search for a Task..."
        className="search-box"
        value={searchText}
        onChange={(e) => showSearchedTasks(e)}
      />
  );
};
