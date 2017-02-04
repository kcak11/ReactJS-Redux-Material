import React, { Component } from "react";
import { connect } from 'react-redux';
import { testAction } from '../actions/index.js';

/**
 * export the dashboard page
 */
class Dashboard extends Component {

  /**
   * call the test action that we created
   */
  handleClickHello() {
    this.props.testAction();
  }

  /**
   * render component to the screen
   * @returns { ReactElement }
   */
  render() {
    return (
      <div>
        <h4>Murthy Training Club</h4>
        <a  onClick={this.handleClickHello.bind(this)}>
        Click me to invoke REST API</a>
        <h3>{this.props.auth.message}</h3>
      </div>
    );
  }
}

/**
 * allows us to call our application state from props
 */
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

/**
 * exports our component and gives it access to the redux state
 */
export default connect(mapStateToProps, { testAction })(Dashboard);
