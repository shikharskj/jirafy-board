import { Button } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { IFilterState } from "../model/task";
import useTaskStore from "../store/store";

const Filters = () => {
  const [filters, setFilters] = useState<IFilterState>({
    status: "",
    asignee: "",
  });

  const { setTaskFilters } = useTaskStore();
  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
    setTaskFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const clearFilters = (): void => {
    setFilters({
      status: "",
      asignee: "",
    });
    setTaskFilters({
      status: "",
      asignee: "",
    });
  };

  return (
    <div className="filters-container">
      <select
        id="status-filter-select"
        className="filter-box input-styles"
        value={filters?.status}
        onChange={(e) => handleChange(e)}
        name="status"
      >
        <option value="">None</option>
        <option value="todo">TODO</option>
        <option value="in-progress">IN-PROGRESS</option>
        <option value="done">DONE</option>
      </select>
      <select
        id="status-filter-select"
        className="filter-box input-styles"
        value={filters?.asignee}
        onChange={(e) => handleChange(e)}
        name="asignee"
      >
        <option value="">None</option>
        <option value="Shikhar">Shikhar</option>
        <option value="Vaibhav">Vaibhav</option>
        <option value="Priya">Priya</option>
        <option value="Rohit">Rohit</option>
      </select>
      <Button variant="contained" onClick={clearFilters}>
        Clear
      </Button>
    </div>
  );
};

export default Filters;
