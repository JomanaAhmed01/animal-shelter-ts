import styled from "styled-components";
import { Stars } from "@styled-icons/bootstrap/Stars";

function Adoptions() {
  return (
    <Wrapper>
      <AdoptionsWrapper>
        <HeaderWrapper>
          <Header>Adoptions</Header>
          <HeaderIconWrapper>
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </HeaderIconWrapper>
        </HeaderWrapper>

        <AdoptionsRow>
          <Image src="/imgs/volunteer-cat.jpg" />
          <Image src="/imgs/dog-image-one.jpg" />
          <Image src="/imgs/adoption-one.jpg" />
          <Image src="/imgs/adoption-two.jpg" />
          <Image src="/imgs/adoption-three.jpg" />
        </AdoptionsRow>

        <AdoptionsRow>
          <Image src="/imgs/dog-image-two.jpg" />
          <Image src="/imgs/adoption-four.jpg" />
          <Image src="/imgs/adoption-five.jpg" />
          <Image src="/imgs/adoption-six.jpg" />
          <Image src="/imgs/adoption-seven.jpg" />
        </AdoptionsRow>

        <AdoptionsRow>
          <Image src="/imgs/adoption-eight.jpg" />
          <Image src="/imgs/dog-of-the-week.jpg" />
          <Image src="/imgs/adoption-one.jpg" />
          <Image src="/imgs/adoption-nine.jpg" />
          <Image src="/imgs/adoption.ten.jpg" />
        </AdoptionsRow>

        <AdoptionsRow>
          <Image src="/imgs/cat-of-the-week.jpg" />
          <Image src="/imgs/cat-image-three.jpg" />
          <Image src="/imgs/cat-image-two.jpg" />
          <Image src="/imgs/adoption-six.jpg" />
          <Image src="/imgs/adoption-eleven.jpg" />
        </AdoptionsRow>
      </AdoptionsWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #ffe6ff;
  border: 1px solid transparent;
  padding-bottom: 70px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 400px;
  padding-top: 30px;

  @media screen and (max-width: 565px) {
    width: 320px;
  }
`;

export const Header = styled.p`
  color: #e1533c;
  font-size: 44px;
  font-weight: bold;

  @media screen and (max-width: 565px) {
    font-size: 36px;
  }
`;

export const HeaderIconWrapper = styled.div``;

export const StarIcon = styled(Stars)`
  color: #e1533c;
  width: 40px;
  height: 40px;
  padding-right: 10px;

  @media screen and (max-width: 565px) {
    width: 30px;
    height: 30px;
  }
`;

export const AdoptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AdoptionsRow = styled.div`
  width: 990px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 188px;
  height: 188px;

  @media screen and (max-width: 1024px) {
    width: 388px;
    height: 388px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 565px) {
    width: 250px;
    height: 250px;
  }
`;

export default Adoptions;
