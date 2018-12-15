import * as React from 'react';
import PropTypes from 'prop-types';

export default class TextField extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  /**
   * Function to handle on change event of input box.
   **/
  handleChange(event) {
    if (this.props.onChange) {
      let value = event.target.value;

      if (this.props.type === 'number')
        value = value ? +value : null;

      this.props.onChange(value);
    }
  }

  /**
   * Function to handle on key down event of input box.
   * Handles on enter functionality.
   * @param event
   **/
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

    return (<input type={type}
                   id={id}
                   className={className}
                   defaultValue={defaultValue}
                   value={value}
                   onKeyDown={this.handleKeyDown}
                   onChange={this.handleChange}
                   autoFocus={true}
      />
    );
  }
}

TextField.propTypes = {
  /**
   * type email/password, default is text
   */
  type: PropTypes.string,
  /**
   * Class name for the component
   */
  className: PropTypes.string,
  /**
   * Callback for on input change
   */
  onChange: PropTypes.func,
  /**
   * Callback for on enter
   */
  onEnter: PropTypes.func,
  /**
   * Callback for on Esc key press
   */
  onEsc: PropTypes.func,
  /**
   * Default value of the input field
   */
  defaultValue: PropTypes.any,
};
