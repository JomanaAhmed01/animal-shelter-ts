import styled from "styled-components";
import Navbar, { Adoptions } from "../components/AdoptionsPage/Navbar";

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