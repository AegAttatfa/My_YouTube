import React from "react";
import Grid from "@material-ui/core/Grid";

import API from "../apis/youtube";
import "./App.css";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onQuerySubmit = async (query) => {
    const response = await API.get("search", {
      params: {
        q: query,
      },
    });
    this.setState({ videos: response.data.items });
    this.setState({ selectedVideo: response.data.items[1] });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onQuerySubmit("React js");
  }
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <div className="search__bar">
            <SearchBar onFormSubmit={this.onQuerySubmit} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="video__detail">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="video__list">
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </div>
        </Grid>
      </Grid>
    );
  }
}
export default App;
