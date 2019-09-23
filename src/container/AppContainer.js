import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getProducts } from '../actions/productAction';

import NavBar from '../component/navBar/NavBar';
import MainImage from '../component/imageWrapper/MainImage';
import ProductList from '../component/productList/ProductList';

class AppContainer extends Component {
  static propTypes = {
    getProducts: PropTypes.func,
    cart: PropTypes.object,
    sectionInfo: PropTypes.object
  };
  static defaultProps = {
    cart: {},
    sectionInfo: {}
  };
  constructor(props) {
    super(props);
    this.state = {
      sortKey: ''
    };
  }
  componentDidMount() {
    this.props.getProducts();
  }
  sortOnOption(key) {
    this.setState({ sortKey: key });
  }
  render() {
    const { cart, sectionInfo } = this.props;
    return (
      <Fragment>
        <NavBar cart={cart} />
        <MainImage
          title={sectionInfo.sectionTitle}
          description={sectionInfo.sectionDescription}
          sortOnOption={this.sortOnOption}
        />
        <ProductList />
      </Fragment>
    );
  }
}
export const mapStateToProps = state => ({
  cart: state.productInfo.cart,
  sectionInfo: state.productInfo.sectionInfo
});
const mapDispatchToProps = dispatch => bindActionCreators({ getProducts }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
