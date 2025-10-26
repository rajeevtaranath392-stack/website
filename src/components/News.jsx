import { useState } from "react";
import Filter from "./Filter";
import NewsCard from "./NewsCard";
import { projectsData, newsFilters } from "../config/dataConfig";

const News = ({ maxItems }) => {
  const _items = maxItems ? projectsData.slice(0, maxItems) : projectsData;
  const [filterKey, setFilterKey] = useState("*");
  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <section id="press" className="section">
      <div className="container">
        {!maxItems && <Filter id='news' filters={newsFilters} filterKey={filterKey} handleFilterKeyChange={handleFilterKeyChange} />}
        <div>
          <div className="row portfolio-filter filter-container g-4">
            {_items.length > 0 &&
              _items.filter((t) => {
                return filterKey === '*' ? true : t.type === filterKey
              }).map((project, index) => (
                <NewsCard key={index} project={project} />))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
