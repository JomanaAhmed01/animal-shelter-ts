import React from 'react';
import styled from "styled-components"
import { Menu } from '@styled-icons/evaicons-solid/Menu'

function Navbar() {
  return (
    <Wrapper>
       <LogoWrapper>
        <NavLogo src='/imgs/animal-shelter-logo.jpg' />

        <LogoText>Animal Shelter</LogoText>
       </LogoWrapper>

       <NavWrapper>
         <Home>Home</Home>
         <Adoptions>Adoptions</Adoptions>
         <Volunteer>Volunteer</Volunteer>
         <Donate>Donate</Donate>
         <ContactUs>Contact Us</ContactUs>
       </NavWrapper>

       <MenuIcon />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #ffe6ff;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 900px) {
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (max-width: 565px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const NavLogo = styled.img`
  width: 55px;
  height: 60px;
  padding-right: 10px;

  @media screen and (max-width: 565px) {
    width: 35px;
    height: 40px;
  }
`

export const LogoText = styled.p`
  color: #E1533C;
  font-size: 22px;
  font-weight: bold;

  @media screen and (max-width: 565px) {
    font-size: 19px;
  }
`

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const Home = styled.p`
  color: #E1533C;
  font-size: 15px;
  cursor: pointer;
`

export const Adoptions = styled.p`
  color: #000000;
  font-size: 15px;
  cursor: pointer;
`

export const Volunteer = styled.p`
  color: #E1533C;
  font-size: 15px;
  cursor: pointer;
`

export const Donate = styled.p`
  color: #E1533C;
  font-size: 15px;
  cursor: pointer;
`

export const ContactUs = styled.p`
  color: #E1533C;
  font-size: 15px;
  cursor: pointer;
`

export const MenuIcon = styled(Menu)`
  display: none;

  @media screen and (max-width: 900px) {
    display: initial;
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 565px) {
    width: 30px;
    height: 30px;
  }
`

export default Navbar;