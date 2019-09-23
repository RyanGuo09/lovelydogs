import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Cart } from '../../assets/icons/basket.svg';
import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg';
import { ReactComponent as HamburgerClose } from '../../assets/icons/hamburger_close.svg';

// css style
import './style.css';
export default class Nav extends Component {
  static propTypes = {
    cart: PropTypes.object
  };
  static defaultProps = {
    cart: {}
  };
  constructor(props) {
    super(props);
    this.state = { showHamburger: true };
    this.onClick = this.onClick.bind(this);
  }
  onClick(event) {
    this.setState({ showHamburger: !event.target.checked });
  }
  render() {
    const { cart } = this.props;
    return (
      <div id="page-nav" className="navBar">
        <label htmlFor="hamburger">
          {this.state.showHamburger ? (
            <Hamburger className="navBar__hamburger" />
          ) : (
            <HamburgerClose className="navBar__hamburger--close" />
          )}
        </label>
        <input type="checkbox" id="hamburger" onClick={this.onClick} value={!this.state.showHamburger} />

        <Logo className="navBar__logo" />
        <span className="badge badge-warning" id="wmCartCount">
          {cart.quantity}
        </span>
        <Cart className="navBar__cart" />

        <ul className="navBar__links">
          <div className="navBar__hambuerger-wrapper">
            <label htmlFor="hamburger">
              <HamburgerClose className="navBar__hamburger--close" />
            </label>
            <input type="checkbox" id="hamburger" onClick={this.onClick} value={!this.state.showHamburger} />
          </div>
          <li className="text-bold">
            <a href="#TOYS">TOYS</a>
          </li>
          <li className="text-bold">
            <a href="#FURNITURE<">FURNITURE</a>
          </li>
          <li className="text-bold">
            <a href="#FOOD">FOOD</a>
          </li>
          <li className="text-bold">
            <a href="#HEALTH">HEALTH</a>
          </li>
        </ul>
      </div>
    );
  }
}
