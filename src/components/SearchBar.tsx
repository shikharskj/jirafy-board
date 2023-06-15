import { useState } from "react";
import useTaskStore from "../store/store";

export const SearchBar: React.FC = () => {
  const { setSearchText} = useTaskStore();
  const [search, setSearch] = useState<string>("");

  const showSearchedTasks = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const term = e.target.value.toLowerCase();
    setSearch(term);
    setSearchText(term);
  };

  return (
      <input
        placeholder="🔍 Search for a Task..."
        className="search-box input-styles "
        value={search}
        onChange={(e) => showSearchedTasks(e)}
      />
  );
};
