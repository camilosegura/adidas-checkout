import styled from 'styled-components';

const ShippingBarContainer = styled.div`
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #c8cbcc;
  display: flex;
  height: 40px;
`;

const LinkShipping = styled.a`
  align-items: center;
  display: flex;
  color: #363738;
  cursor: pointer;
  font-family: AdineuePRO,Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.4;
  padding: 30px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: 7px;
  }

  svg[clip-rule=evenodd] {
    width: 19px;
    height: 19px;

    path {
      fill: black;
    }
  }
`;

export {
  LinkShipping,
  ShippingBarContainer,
};
