import React from 'react';
import { connect } from 'react-redux';

const CustomersList = (props) => {

  const listItems = props.customersData.map(customer => {
    return <li key={customer._id}>{`${customer.first_name} ${customer.last_name}`}</li>
  })

  return (
    <ul>{listItems}</ul>
  )
}


const mapStateToProps = (state) => {
  return {
    customersData: state
  };
};

export default connect(mapStateToProps)(CustomersList);
