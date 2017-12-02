import React from 'react';
import './Folder.css';

class Folder extends React.Component {
  render() {
    return (
      <div className="Folder-container">
        <h1 className="Folder-title">{this.props.title}</h1>

        <div className="Folder-formulas">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Folder;
