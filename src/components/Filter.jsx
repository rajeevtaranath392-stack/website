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

const Filter = ({ filters, filterKey, handleFilterKeyChange, id }) => {
  return (<ul className="portfolio-menu nav nav-pills text-uppercase justify-content-center border-bottom-0 mb-5 wow fadeInUp">
    <li className="nav-item fw-900">
      <button
        className={
          "nav-link rounded-pill " + (filterKey === "*" ? "active" : "")
        }
        onClick={handleFilterKeyChange("*")}
      >
        All {id === 'gallery' && <>Photos</>}
      </button>
    </li>
    {Object.entries(filters).map((oneKey, i) => (
      <li className="nav-item fw-900" key={i}>
        <button
          className={
            "nav-link rounded-pill " +
            (filterKey === oneKey[1] ? "active" : "")
          }
          onClick={handleFilterKeyChange(oneKey[1])}
        >
          {filters[oneKey[0]]}
        </button>
      </li>
    ))}
  </ul>)
}


export default Filter;