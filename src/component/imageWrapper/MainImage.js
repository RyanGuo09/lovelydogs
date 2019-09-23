import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sortProducts } from '../../actions/sortAction';
import DropdownMenu from '../dropdown/DropdownMenu';
import hero from '../../assets/hero_@2x.jpg';
import { DROPDOWN_OPTIONS } from '../../constant/dropdownOptions';

// css style
import './style.css';
class MainImage extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    sortProducts: PropTypes.func
  };
  static defaultProps = {
    title: '',
    description: ''
  };
  constructor(props) {
    super(props);
    this.sortOnOption = this.sortOnOption.bind(this);
  }

  sortOnOption(key) {
    this.props.sortProducts(key);
  }
  render() {
    const { title, description } = this.props;
    return (
      <div className="ImageWrapper">
        <div className="ImageWrapper__text">
          <div className="ImageWrapper__text-dog">{title}</div>
          <div className="ImageWrapper__text-boy">{description}</div>
        </div>

        <div className="ImageWrapper__dropdown">
          <DropdownMenu text="Sort By" options={DROPDOWN_OPTIONS} sortOnOption={this.sortOnOption} />
        </div>
        <img src={hero} alt="dog" className="ImageWrapper__image" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ sortProducts }, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(MainImage);
