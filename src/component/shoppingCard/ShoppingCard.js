import React, { Component } from 'react';
import PropTypes from 'prop-types';

// css style
import './style.css';
export default class ShoppingCard extends Component {
  static propTypes = { product: PropTypes.object };
  static defaultProps = { product: {} };
  getProductType(type) {
    switch (type) {
      case 'TOP_RATED':
        return <span className="shoppingCard__image--text--format shoppingCard__image--text--topRate">Top Rated</span>;
      case 'NEW_ITEM':
        return <span className="shoppingCard__image--text--format shoppingCard__image--text--new">New!</span>;
      case 'EXCLUSIVE_ITEM':
        return (
          <span className="shoppingCard__image--text--format shoppingCard__image--text--only">Only @ Walmart!</span>
        );
      default:
        return null;
    }
  }
  render() {
    const { product } = this.props;
    return (
      <div className="shoppingCard">
        <div className="shoppingCard__moreChoice--wrapper">
          {product.more_choices ? (
            <div className="shoppingCard__moreChoice--item">
              <span className="shoppingCard__moreChoice--text">More Choice</span>
            </div>
          ) : null}
        </div>
        <div className="shoppingCard__image--wrapper">
          <div className="shoppingCard__image--holder">
            {product.type ? <div className="shoppingCard__image--text">{this.getProductType(product.type)}</div> : null}
            <img src={product.image_url} alt={product.name} width="100%" height="80%" />
          </div>
        </div>
        <div className="shoppingCard__description--wrapper">
          <div className="shoppingCard__description--name">{product.name}</div>
          <div className="shoppingCard__description--original-price">{product.original_price}</div>
        </div>
        <div className="shoppingCard__description--wrapper">
          <div className="shoppingCard__description--description">{product.description}</div>
          <div className="shoppingCard__description--price text-bold">{product.price}</div>
        </div>
      </div>
    );
  }
}
