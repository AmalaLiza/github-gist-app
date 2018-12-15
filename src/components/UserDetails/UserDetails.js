import React, { Component } from 'react';
import styles from './UserDetails.css';
import Avatar from '../Avatar/Avatar';

class UserDetails extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { user } = this.props;

    return <div className={styles.userDetails}>

      <Avatar className={styles.avatar}
              src={user.get('avatar_url')}>
      </Avatar>

      <div className={styles.detailsWrapper}>
        <div className={styles.properties}>
          <span>Name : </span>
          <span className={styles.value}>{user.get('login')}</span>
        </div>
        <div>
          <span>User URL : </span>
          <span className={`${styles.value} url`}
                onClick={() => window.open(user.get('url'))}>{user.get('url')}</span>
        </div>
      </div>
    </div>;
  }
}

UserDetails.propTypes = {};
UserDetails.defaultProps = {};

export default UserDetails;
