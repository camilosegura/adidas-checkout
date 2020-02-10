import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cart from 'components/Cart';
import { loadData } from '../redux/actions';

function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, []);

  return (
    <Cart />
  );
}

export default Index;
