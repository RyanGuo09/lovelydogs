import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ShoppingCard from '../shoppingCard/ShoppingCard';
import shortId from 'shortid';
import { Row, Col } from 'react-bootstrap';
// css style
import './style.css';

class ProductList extends Component {
  static propTypes = { products: PropTypes.array };

  render() {
    const { products } = this.props;
    return (
      <Row className="productList__wrapper">
        {products && products.length > 0
          ? products.map(product => (
              <Col xs={6} md={3} key={shortId.generate()}>
                <ShoppingCard product={product} key={shortId.generate()}>
                  shopping cart
                </ShoppingCard>
              </Col>
            ))
          : null}
      </Row>
    );
  }
}
export const mapStateToProps = state => ({ products: state.productInfo.products });

export default connect(mapStateToProps)(ProductList);
