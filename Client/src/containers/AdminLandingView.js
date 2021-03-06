/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AdminLanding from '../components/AdminLanding';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FetchProductsAction from '../actions/FetchProductsAction';

export class AdminLandingView extends Component {
  componentDidMount() {
    this.props.FetchProductsAction();
  }

  render() {
    if (this.props.product === []) return null;
    return (
      <div>
        <Header />
        {this.props.product.map(item => <AdminLanding item={item} key={item.product_id} />)}
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  product: state.FetchProductsReducer.Products,

});
AdminLandingView.propTypes = {
  FetchProductsAction: PropTypes.func.isRequired,

};
export default connect(mapStateToProps, { FetchProductsAction })(AdminLandingView);
