import Immutable from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './UserDetails.css';
import Avatar from '../Avatar/Avatar';

const UserDetails = ({ user }) => (
  <div className={styles.userDetails}>

    <Avatar
      className={styles.avatar}
      src={user.get('avatar_url')}
    />

    <div className={styles.detailsWrapper}>
      <div className={styles.properties}>
        <span>Name : </span>
        <span className={styles.value}>{user.get('login')}</span>
      </div>
      <div>
        <span>User URL : </span>
        <span
          className={`${styles.value} url`}
          onClick={() => window.open(user.get('url'))}
        >
          {user.get('url')}
        </span>
      </div>
    </div>
  </div>
);

UserDetails.propTypes = {
  user: PropTypes.instanceOf(Immutable.Map),
};

UserDetails.defaultProps = {
  user: Immutable.fromJS({}),
};

export default UserDetails;
