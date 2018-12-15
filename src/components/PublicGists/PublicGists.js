import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
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

GistCount.propTypes = {
  count: PropTypes.number,
};

GistCount.defaultProps = {
  count: 0,
};

const GistWrapper = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

GistWrapper.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const PublicGistsWrapper = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

PublicGistsWrapper.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

class PublicGists extends Component {
  static propTypes = {
    gists: PropTypes.instanceOf(Immutable.Map).isRequired,
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.instanceOf(Immutable.Map).isRequired,
  };

  render() {
    const { gists, user, dispatch } = this.props;

    return (
      <PublicGistsWrapper className={styles.wrapper}>
        <div className={styles.searchBoxWrapper} onClick={() => dispatch(clearGists())} />

        {gists.size ? <UserDetails user={user} /> : null}
        {gists.size ? <GistCount count={gists.size} /> : null}

        <GistWrapper className={styles.gistWrapper}>
          {gists
            .valueSeq()
            .map(gist => (
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

const mapStateToProps = state => selectGists(state);
export default connect(mapStateToProps)(PublicGists);
