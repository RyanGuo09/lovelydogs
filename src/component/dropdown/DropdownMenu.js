import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
// css style
import './style.css';
export default class DropdownMenu extends Component {
  static propTypes = {
    text: PropTypes.string,
    options: PropTypes.array,
    sortOnOption: PropTypes.func
  };
  static defaultProps = {
    options: [],
    text: ''
  };
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }
  onSelect(eKey, event) {
    this.props.sortOnOption(eKey);
  }
  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">{this.props.text}</Dropdown.Toggle>

        <Dropdown.Menu>
          {this.props.options.map((option, index) => (
            <Dropdown.Item eventKey={option.text} key={`${option}_${index}`} onSelect={this.onSelect}>
              {option.text}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
