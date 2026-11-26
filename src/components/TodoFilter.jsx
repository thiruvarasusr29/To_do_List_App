function TodoFilter({ filter, setFilter }) {
  const filters = ["All", "Active", "Completed"];

  return (
    <div className="filters">
      {filters.map((item) => (
        <button
          key={item}
          onClick={() => setFilter(item)}
          className={filter === item ? "selected" : ""}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;
