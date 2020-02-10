import styled from 'styled-components';

const PromoCodeForm = styled.form`
  align-items: center;
  display: flex;
  margin-top: 20px;
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    right: 26px;
  }
`;

const PromoCodeInput = styled.input`
  height: 50px;
  font-size: 16px;
  padding: 13px 20px;
  text-transform: uppercase;
  width: 100%;

  &::placeholder {
    color: #767677;
  }
`;

export {
  PromoCodeForm,
  PromoCodeInput,
};
