import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import CustomersList from './components/CustomersList';

class App extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div>
        <CustomersList />
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData() {
      dispatch(() => {
        fetch('http://localhost:3000/api/customers')
        .then(res => res.json())
        .then(customersData => {
          dispatch({
            type: 'LOAD_CUSTOMERS_DATA',
            data: customersData
          });
        })
      })
    }
  }
}






export default connect(null, mapDispatchToProps)(App);
