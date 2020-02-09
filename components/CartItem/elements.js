import styled from 'styled-components';

const CartItemContainer = styled.article`
  display: flex;
  border: 1px solid #767677;
`;

const LinkImage = styled.a`
  img {
    height: 240px;
    width: 240px;
  }
`;

const CartItemDescription = styled.div`
  flex-grow: 1;
  padding: 20px 0;
`;

const CartItemTitle = styled.h2`
  display: flex;
  font-size: inherit;
  font-weight: inherit;
  justify-content: space-between;
  margin: 0;
`;

const CartItemSizePrice = styled.span`
  display: block;
  margin: 10px 0;
`;

const CartItemStock = styled.strong`
  font-family: Helvetica,Arial,sans-serif;
`;

export {
  CartItemContainer,
  CartItemDescription,
  CartItemSizePrice,
  CartItemStock,
  CartItemTitle,
  LinkImage,
};
