import React from 'react';
import styled from "styled-components"

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
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #ffe6ff;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const NavLogo = styled.img`
  width: 55px;
  height: 60px;
  padding-right: 10px;
`

export const LogoText = styled.p`
  color: #E1533C;
  font-size: 22px;
  font-weight: bold;
`

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`

export const Home = styled.p`
  color: #000000;
  font-size: 15px;
  cursor: pointer;
`

export const Adoptions = styled.p`
  color: #E1533C;
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

export default Navbar;