import styled from 'styled-components';

const CartQuantityContainer = styled.div`
  align-items: center;
  bottom: 20px;
  display: flex;
  position: absolute;
  width: 106px;

  svg {
    right: 10px;
    position: absolute;
  }
`;

const SelectQuantity = styled.select`
  appearance: none;
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 0;
  font-size: 16px;
  height: 50px;
  padding-left: 15px;
  width: 106px;
  z-index: 1;
`;

export {
  CartQuantityContainer,
  SelectQuantity,
};
