import styled from 'styled-components';

const BaseCenter = styled.div`
  align-items: center;
  display: flex;
`;

const HeaderTop = styled.div`
  background: linear-gradient(90deg,#000 30%,transparent 50%),linear-gradient(180deg,#000 0,#363738);
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-size: 11px;
  font-weight: 400;
  height: 32px;

  a {
    color: #ebedee;
    text-decoration: none;
  }
`;

const BaseHeaderContainer = styled(BaseCenter)`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;

const HeaderTopContainer = styled(BaseHeaderContainer)`
  height: 100%;
  justify-content: flex-end;
`;

const LinkReebok = styled(BaseCenter)`
  font-size: 10px;
  padding: 0 30px 0 10px;

  svg {
    margin-left: 8px;
  }
`;

LinkReebok.target = 'a';

const LinkLogin = styled(BaseCenter)`
  padding: 0 10px;

  svg {
    margin-left: 5px;
  }
`;

LinkLogin.target = 'a';

const ListBase = styled.ul`
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
  }
`;

const NavBase = styled.nav`
  display: inline-block;
`;

const ListTop = styled(ListBase)`
  li {
    padding: 0 10px;
    position: relative;
  }

  li ~ li {
    &::before {
      content: '';
      border-left: 1px solid #767677;
      height: 12px;
      left: 0;
      position: absolute;
    }
  }
`;

const HeaderBottom = styled.div`
  background-color: black;
  font-family: AdineuePRO,Helvetica,Arial,sans-serif;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: .5px;
  line-height: 45px;
  height: 48px;

  li {
    height:
  }

  a {
    color: #fff;
    padding: 0 5px;
    text-decoration: none;
  }
`;

const HeaderBottomContainer = styled(BaseHeaderContainer)`
  height: 100%;
`;

const LinkAdidas = styled.a`
  display: flex;
  margin-right: 20px;
  position: relative;
  top: -15px;
`;

const NavBottom = styled(NavBase)`
  flex-grow: 1;
`;

const FormSearch = styled.form`
  align-items: center;
  display: flex;
  height: 48px;
  position: relative;

  svg {
    left: 0;
    position: absolute;
  }
`;

const InputSearch = styled.input`
  border: none;
  height: 32px;
  width: 140px;
`;

const LinkBag = styled.a`
  align-items: center;
  background-color: #0071ae;
  display: flex;
  font-family: AdihausDIN,Helvetica,Arial,sans-serif;
  font-size: 13px;
  font-weight: 400;
  height: 100%;
  padding-left: 8px !important;
  position: relative;
  width: 48px;

  svg {
    position: relative;
  }
`;

export {
  FormSearch,
  HeaderBottom,
  HeaderBottomContainer,
  HeaderTop,
  HeaderTopContainer,
  InputSearch,
  LinkAdidas,
  LinkBag,
  LinkLogin,
  LinkReebok,
  ListBase,
  ListTop,
  NavBase,
  NavBottom,
};
