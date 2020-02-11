import styled from 'styled-components';

const PageHeader = styled.header`
  margin-bottom: 40px;
`;

const PageTitle = styled.h1`
  font-family: AdineuePRO,Helvetica,Arial,sans-serif;
  font-size: 42px;
  font-weight: 600;
  margin: 20px 0;
`;

const TotalItems = styled.span`
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-size: 16px;
  line-height: 22px;

  strong {
    margin-left: 5px;
  }
`;

const ButtonsPayContainer = styled.div`
  display: flex;
`;

export {
  ButtonsPayContainer,
  PageHeader,
  PageTitle,
  TotalItems,
};
