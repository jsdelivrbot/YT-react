import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = "AIzaSyBHi2yIT2mowtiMeW8V46s0T3BoEwke1zc";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
      this.setState({videos: data});
    });
  }

  render() {
    return(
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector(".container"));
