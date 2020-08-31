import React from "react";
import { TextField } from "@material-ui/core";

class SearchBar extends React.Component {
  state = { query: "" };

  onSearchChange = (event) => {
    this.setState({ query: event.target.value });
  };

  onSearchSubmit = (event) => {
    event.preventDefault();
    // TODO: make sure to call
    // callback function from the parent App component
    this.props.onFormSubmit(this.state.query);
  };
  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onSearchSubmit}>
          <TextField
            id="standard-search"
            label="Search"
            type="search"
            fullWidth
            value={this.state.query}
            onChange={this.onSearchChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
