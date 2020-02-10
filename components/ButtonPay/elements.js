import styled, { css } from 'styled-components';

const Button = styled.button`
  align-items: center;
  background-color: #000;
  color: #fff;
  display: flex;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  height: 50px;
  padding: 0 21px;
  text-transform: uppercase;
  transform: translate(-3px,-3px);
  width: 100%;

  &::before {
    border: 1px solid #000;
    content: '';
    left: 0;
    height: 100%;
    position: absolute;
    top: 0;
    transform: translate(3px, 3px);
    width: 100%;
  }

  span {
    flex-grow: 1;
    text-align: left;
  }

  ${({ payPal }) => payPal && css`
    background: #fff;
    border: 1px solid #000;
    transform: initial;

    &::before {
      border: none;
    }

    svg {
      color: #000;
    }
  `}
`;

export default Button;
