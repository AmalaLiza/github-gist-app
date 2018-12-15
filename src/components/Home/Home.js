import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import styles from '../PublicGists/PublicGists.css';
import TextField from '../TextField/TextField';
import { loadPublicGistsOfUser } from '../../actions/action-creator';
import { selectGists } from '../PublicGists/gists.selector';
import banner from '../../assets/download.png';

class Home extends Component {
  render() {
    return (
      <div className={styles.searchBoxWrapper}>
        <img src={banner} />
        <div className={styles.searchWrapper}>
          <span
            className={styles.searchHint}
          >
Search users' gist by typing username and hit enter
          </span>
          <TextField
            type="text"
            className={styles.searchBox}
            onEnter={value => this.props.dispatch(loadPublicGistsOfUser(value))}
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {};
Home.defaultProps = {};

const mapStateToProps = state => selectGists(state);
export default connect(mapStateToProps)(Home);
