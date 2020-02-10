import styled from 'styled-components';

const OrderSummaryContainer = styled.article`
  border: 1px solid #ebedee;
  margin-top: 40px;
  padding: 24px 15px;
`;

const OrderSummaryTitle = styled.h5`
  font-size: 20px;
  font-weight: 600;
  line-height: 18px;
  margin 0 0 20px;
`;

const OrderSummaryItem = styled.p`
  display: flex;
  font-size: 14px;
  justify-content: space-between;

  strong {
    font-family: Helvetica,Arial,sans-serif;
  }
`;

export {
  OrderSummaryContainer,
  OrderSummaryItem,
  OrderSummaryTitle,
};
