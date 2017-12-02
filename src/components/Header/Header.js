import React from 'react';
import './Header.css';


class Header extends React.Component {
  render() {
    return (
      <div className="Header-container">
        <h1 className="Header-title">
          {this.props.children}
        </h1>

        <input type="text" className="Header-search" placeholder="Search" onChange={this.props.onSearchChange}/>
      </div>
    )
  }
}

export default Header;
