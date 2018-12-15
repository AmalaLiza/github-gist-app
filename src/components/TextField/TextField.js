import * as React from 'react';
import PropTypes from 'prop-types';

export default class TextField extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
    onEsc: PropTypes.func,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
  };

  static defaultProps = {
    type: '',
    id: '',
    className: '',
    onChange: f => f,
    onEnter: f => f,
    onEsc: f => f,
    defaultValue: '',
    value: '',
  };

  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  /**
   * Function to handle on change event of input box.
   * */
  handleChange(event) {
    if (this.props.onChange) {
      let value = event.target.value;

      if (this.props.type === 'number') value = value ? +value : null;

      this.props.onChange(value);
    }
  }

  /**
   * Function to handle on key down event of input box.
   * Handles on enter functionality.
   * @param event
   * */
  handleKeyDown(event) {
    if (event.keyCode === 13 && this.props.onEnter) {
      this.props.onEnter(event.target.value, event);
    } else if (event.keyCode === 27 && this.props.onEsc) {
      this.props.onEsc(event.target.value, event);
    }
  }

  render() {
    const {
      id,
      type,
      className,
      defaultValue,
      value,
    } = this.props;

    return (<input
      type={type}
      id={id}
      className={className}
      defaultValue={defaultValue}
      value={value}
      onKeyDown={this.handleKeyDown}
      onChange={this.handleChange}
      autoFocus
    />
    );
  }
}
