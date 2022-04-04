import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import styled from 'styled-components';

Header.propTypes = {};

function Header() {
  return (
    <Container>
      <Name to={'/'}>
        PhotoApp
      </Name>
      <Login size= 'xs' color= 'primary'>
        Login
      </Login>
    </Container>
  );
}

const Container = styled.div`
  height: 70px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0 100px;
`
const Name = styled(Link)`
  font-size: 30px;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    color: blue;
  }
`
const Login = styled(Button)`
  font-size: 20px;
  text-decoration: none;
  outline: none;
  border:0;

`

export default Header;