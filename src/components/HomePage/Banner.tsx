import styled from "styled-components";
import { KeyboardArrowRight } from "@styled-icons/material/KeyboardArrowRight";

function Banner() {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src="/imgs/banner-animals.jpg" />
      </ImageWrapper>

      <TextWrapper>
        <SaveAPet>SAVE A PET</SaveAPet>
        <Donate>DONATE NOW!</Donate>

        <IconWrapper>
          <ArrowRightIcon />
        </IconWrapper>
      </TextWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
  /*border: 3px solid red;*/
  width: 99%;

  @media screen and (max-width: 1090px) {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  margin-left: -30px;

  @media screen and (max-width: 1024px) {
    margin-left: 0px;
  }
`;

export const Image = styled.img`
  /*border: 3px solid red;*/
  width: 100%;

  @media screen and (max-width: 1045px) {
    width: 90%;
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

export const TextWrapper = styled.div`
  margin-right: 60px;

  @media screen and (max-width: 1024px) {
    margin-right: 0px;
    margin-top: -50px;
  }
`;

export const SaveAPet = styled.p`
  color: #232323;
  font-size: 79px;
  font-weight: bold;
  letter-spacing: 0.1px;

  @media screen and (max-width: 1090px) {
    font-size: 69px;
  }

  @media screen and (max-width: 565px) {
    font-size: 49px;
  }
`;

export const Donate = styled.p`
  color: #232323;
  font-size: 44px;
  font-weight: bold;
  margin-top: -90px;
  margin-left: 50px;

  @media screen and (max-width: 1090px) {
    font-size: 34px;
    margin-top: -80px;
    margin-left: 65px;
  }

  @media screen and (max-width: 565px) {
    font-size: 24px;
    margin-top: -55px;
    margin-left: 45px;
  }
`;

export const IconWrapper = styled.div`
  background-color: #e1533c;
  color: #ffffff;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  position: relative;
  margin-left: 160px;
  margin-top: -20px;

  @media screen and (max-width: 1090px) {
    margin-left: 140px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 565px) {
    margin-left: 95px;
    margin-top: 0px;
    width: 75px;
    height: 75px;
  }
`;

export const ArrowRightIcon = styled(KeyboardArrowRight)`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 10%;
  left: 12%;

  @media screen and (max-width: 565px) {
    width: 60px;
    height: 60px;
  }
`;

export default Banner;
