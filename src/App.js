import React from 'react';
import './App.css';
import Folder from "./components/Folder/Folder";
import Header from "./components/Header/Header";
import Fuse from 'fuse.js';

import data from './data';

class App extends React.Component {
  state = {
    folders: data.folders,
  };

  onSearchChange = (e) => {
    if (e.target.value === "") {
      this.setState({
        folders: data.folders,
      })
    } else {
      const folders = this.filterFormulas(e.target.value);

      console.log(folders);

      this.setState({
        folders,
      })
    }
  };

  filterFormulas(filter) {
    const options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "title",
        "comment"
      ]
    };

    return data.folders.map((folder) => {
      let fuse = new Fuse(folder.formulas, options);

      return {
        ...folder,
        formulas: fuse.search(filter),
      };
    })
  }

  render() {
    return (
      <div>
        <Header onSearchChange={this.onSearchChange}>Formula</Header>
        {this.buildFolders()}
      </div>
    );
  }

  buildFolders() {
    return this.state.folders.map((folder, i) =>
      <Folder title={folder.title} formulas={folder.formulas} key={i}/>
    )
  }
}

export default App;
