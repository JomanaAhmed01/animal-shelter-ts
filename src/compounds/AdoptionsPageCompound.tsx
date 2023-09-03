import styled from "styled-components";
import Navbar from "../components/AdoptionsPage/Navbar";
import Adoptions from "../components/AdoptionsPage/Adoptions";

function AdoptionsPageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <Adoptions />
    </Wrapper>
  );
}

export const Wrapper = styled.div``;

export default AdoptionsPageCompound;