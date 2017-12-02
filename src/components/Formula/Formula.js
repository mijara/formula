import React from 'react';
import './Formula.css';
import {BlockMath} from "../../react-katex";

class Formula extends React.Component {
  render() {
    const {title, formula, comment} = this.props;

    return (
      <div className="Formula-container">
        <div className="Formula-title">{title}</div>
        <div className="Formula-formula">
          <BlockMath math={formula}/>
        </div>
        <div className="Formula-comment">{comment}</div>
      </div>
    )
  }
}

export default Formula;
