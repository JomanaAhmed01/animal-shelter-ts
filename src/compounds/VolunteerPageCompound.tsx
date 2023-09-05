import styled from "styled-components";
import Navbar from "../components/VolunteerPage/Navbar";
import Volunteer from "../components/VolunteerPage/Volunteer";

function VolunteerPageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <Volunteer />
    </Wrapper>
  );
}

export const Wrapper = styled.div``;

export default VolunteerPageCompound;