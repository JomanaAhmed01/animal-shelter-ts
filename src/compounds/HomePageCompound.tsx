import React from "react";
import styled from "styled-components";
import Navbar from "../components/HomePage/Navbar";
import Banner from "../components/HomePage/Banner";
import Volunteer from "../components/HomePage/Volunteer";
import AdoptableAnimals from "../components/HomePage/AdoptableAnimals";

function HomePageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <Banner />
      <Volunteer />
      <AdoptableAnimals />
    </Wrapper>
  );
}

export const Wrapper = styled.div``;

export default HomePageCompound;
