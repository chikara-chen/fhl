import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FormSection from '../components/FormSection';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions';

class App extends Component {
  render() {
    const { orders, actions } = this.props;
    return (
      <div>
        <FormSection></FormSection>
        <MainSection orders={orders} actions={actions}></MainSection>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    orders: state.orders
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(App);
