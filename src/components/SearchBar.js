import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [query, setQuery] = useState("");

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // TODO: make sure to call
    // callback function from the parent App component
    onFormSubmit(query);
  };

  return (
    <div className="ui big aligned search">
      <form onSubmit={onSearchSubmit}>
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <i className="search icon"></i>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
