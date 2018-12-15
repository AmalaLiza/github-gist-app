import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Gist from '../Gist/Gist';
import UserDetails from '../UserDetails/UserDetails';
import { clearGists } from '../../actions/action-creator';
import { selectGists } from './gists.selector';
import styles from './PublicGists.css';

const GistCount = ({ count }) => (
  <div className={`${styles.gistCount} bold`}>
    <h3 className={styles.gistCountHeading}>
GISTS (
      {count}
)
    </h3>
  </div>
);

const GistWrapper = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

const PublicGistsWrapper = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

class PublicGists extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { gists, user, dispatch } = this.props;

    return (
      <PublicGistsWrapper className={styles.wrapper}>
        <div className={styles.searchBoxWrapper} onClick={() => dispatch(clearGists())}>

        </div>

        {gists.size ? <UserDetails user={user} /> : null}
        {gists.size ? <GistCount count={gists.size} /> : null}

        <GistWrapper className={styles.gistWrapper}>
          {gists
            .valueSeq()
            .map((gist, index) => (
              <Gist
                key={gist.get('id')}
                gist={gist}
              />
            ))}

        </GistWrapper>

      </PublicGistsWrapper>
    );
  }
}

PublicGists.propTypes = {
  /**
   * Data to load gists components
   */
  gists: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,

  /**
   * Data to load user details
   */
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => selectGists(state);

export default connect(mapStateToProps)(PublicGists);
