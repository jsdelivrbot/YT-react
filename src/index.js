import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyBHi2yIT2mowtiMeW8V46s0T3BoEwke1zc";

const App = () => {
  return(
    <div>
    <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".container"));
