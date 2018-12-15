import React from 'react';
import * as PropTypes from 'prop-types';
import styles from './Tag.css';

const Tag = ({ value }) => <span className={styles.tag}>{value}</span>;

export default Tag;

Tag.propTypes = {

  /**
   * Tag value
   */
  value: PropTypes.string.isRequired,
};