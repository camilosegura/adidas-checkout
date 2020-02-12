import React from 'react';
import { connect } from 'react-redux';
import Cart from 'components/Cart';
import { loadData } from '../redux/actions';

function Index() {
  return (
    <Cart />
  );
}

Index.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;

  store.dispatch(loadData());

  return { isServer };
};

export default connect()(Index);
