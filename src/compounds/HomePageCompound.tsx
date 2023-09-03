import React from "react";
import styled from "styled-components";
import Navbar from "../components/HomePage/Navbar";
import Banner from "../components/HomePage/Banner";
import Volunteer from "../components/HomePage/Volunteer";
import AdoptableAnimals from "../components/HomePage/AdoptableAnimals";
import Events from "../components/HomePage/Events";
import Footer from "../components/HomePage/Footer";

function HomePageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <Banner />
      <Volunteer />
      <AdoptableAnimals />
      <Events />
      <Footer />
    </Wrapper>
  );
}

export const Wrapper = styled.div``;

export default HomePageCompound;
