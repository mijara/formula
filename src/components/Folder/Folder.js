import React from 'react';
import './Folder.css';

import Formula from "../Formula/Formula";


class Folder extends React.Component {
  render() {
    return (
      <div className="Folder-container">
        <h1 className="Folder-title">{this.props.title}</h1>

        <div className="Folder-formulas">
          {this.buildFormulas()}
        </div>
      </div>
    )
  }

  buildFormulas() {
    return this.props.formulas.map((formula, i) =>
      <Formula title={formula.title} formula={formula.formula} comment={formula.comment} key={i}/>
    )
  }
}

export default Folder;
