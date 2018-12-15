import React from 'react';
import PropTypes from 'prop-types';

// Stateless component
const Avatar = ({ className, onClick, src }) => <img className={className}
                                                     onClick={onClick}
                                                     src={src}>
</img>;

export default Avatar;

Avatar.propTypes = {

  /**
   * class name for avatar
   */
  className: PropTypes.string.isRequired,

  /**
   * Callback to handle on avatar click
   */
  onClick: PropTypes.func,

  /**
   * URL to load the avatar
   */
  src: PropTypes.string,
};