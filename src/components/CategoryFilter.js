import React from "react";

function CategoryFilter({categories ,onSelectCategory, selectedCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=>{return(
        <button 
          className={category===selectedCategory? 'selected':null}
          key={category} 
          value={category} 
          onClick={onSelectCategory}>
            {category}
          </button>
      )})}
    </div>
  );
}

export default CategoryFilter;
