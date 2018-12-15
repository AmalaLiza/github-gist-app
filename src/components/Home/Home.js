import React, { Component } from 'react';
import styles from '../PublicGists/PublicGists.css';
import TextField from '../TextField/TextField';
import { loadPublicGistsOfUser } from '../../actions/action-creator';
import connect from 'react-redux/es/connect/connect';
import { selectGists } from '../PublicGists/gists.selector';

class Home extends Component {
  render() {
    return (
      <div className={styles.searchBoxWrapper}>
        <span
          className={styles.searchHint}>Search users' gist by typing username and hit enter</span>
        <TextField
          type="text"
          className={styles.searchBox}
          onEnter={value => this.props.dispatch(loadPublicGistsOfUser(value))}
        />
      </div>
    );
  }
}

Home.propTypes = {};
Home.defaultProps = {};

const mapStateToProps = state => selectGists(state);
export default connect(mapStateToProps)(Home);
