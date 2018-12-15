import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorPopup from '../../components/ErrorPopup/ErrorPopup';
import PublicGists from '../../components/PublicGists/PublicGists';
import { getError } from '../../components/PublicGists/gists.selector';
import { hideError } from '../../actions/action-creator';
import '../../global.css';
import Home from '../../components/Home/Home';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.hideError = this.hideError.bind(this);
  }

  /**
   * Function to hide error component
   * It dispatches action to store to hide error.
   * */

  hideError() {
    this.props.dispatch(hideError());
  }

  render() {
    console.log(this.props.gists);
    return (
      <div>
        {!this.props.gists.size ? <Home /> : <PublicGists />}
        {this.props.error ? (
          <ErrorPopup
            error={this.props.error}
            hideError={this.hideError}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => getError(state);

export default connect(mapStateToProps)(App);
