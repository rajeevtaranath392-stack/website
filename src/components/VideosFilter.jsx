export const getKeyByValue = (filters, value) => {
  return Object.keys(filters).find((key) => filters[key] === value);
};

export const getFilterClasses = (filters, categories) => {
  if (categories.length > 0) {
    let tempArray = [];
    categories.forEach((category, index) => {
      tempArray.push(getKeyByValue(filters, category));
    });
    return tempArray.join(" ");
  }
};

const Filter = ({ filters, filterKey, handleFilterKeyChange }) => {
  return (<ul className="portfolio-menu nav nav-pills text-uppercase justify-content-center border-bottom-0 mb-5 wow fadeInUp">
    <li className="nav-item fw-900">
      <button
        className={
          "nav-link rounded-pill " + (filterKey === "all" ? "active" : "")
        }
        onClick={handleFilterKeyChange("all")}
      >
        All
      </button>
    </li>
    {Object.entries(filters).filter(([id]) => id !== 'all').map(([id, label], i) => (
      <li className="nav-item fw-900" key={id}>
        <button
          className={
            "nav-link rounded-pill " +
            (filterKey === id ? "active" : "")
          }
          onClick={handleFilterKeyChange(id)}
        >
          {label}
        </button>
      </li>
    ))}
  </ul>)
}


export default Filter;