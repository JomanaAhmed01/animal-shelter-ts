import styled from "styled-components";
import Navbar from "../components/AdoptionsPage/Navbar";
import Adoptions from "../components/AdoptionsPage/Adoptions";
import Footer from "../components/HomePage/Footer";

function AdoptionsPageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <Adoptions />
      <Footer />
    </Wrapper>
  );
}

export const Wrapper = styled.div``;

export default AdoptionsPageCompound;