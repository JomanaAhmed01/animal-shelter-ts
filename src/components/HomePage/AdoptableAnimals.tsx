import styled from "styled-components";
import { Stars } from "@styled-icons/bootstrap/Stars";

function AdoptableAnimals() {
  return (
    <Wrapper>
      <AdoptableDogsWrapper>
        <AdoptableDogsImagesWrapper>
          <DogImageOne src="/imgs/dog-image-one.jpg" />

          <DogImageTwo src="/imgs/dog-image-two.jpg" />
        </AdoptableDogsImagesWrapper>

        <AdoptableDogsHeaderWrapper>
          <StarIcon />
          <AdoptableDogsHeader>Adoptable Dogs</AdoptableDogsHeader>
        </AdoptableDogsHeaderWrapper>
      </AdoptableDogsWrapper>

      <AdoptableCatsWrapper>
        <AdoptableCatsImagesWrapper>
          <CatImageOne src="/imgs/cat-image-one.jpg" />

          <CatImageTwo src="/imgs/cat-image-two.jpg" />
        </AdoptableCatsImagesWrapper>

        <AdoptableCatsHeaderWrapper>
          <StarIcon />
          <AdoptableCatsHeader>Adoptable Cats</AdoptableCatsHeader>
        </AdoptableCatsHeaderWrapper>
      </AdoptableCatsWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #ffe6ff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;

  @media screen and (max-width: 1130px) {
    flex-direction: column;
  }
`;

export const AdoptableDogsWrapper = styled.div`
  @media screen and (max-width: 1130px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const AdoptableDogsImagesWrapper = styled.div``;

export const DogImageOne = styled.img`
  width: 208px;
  height: 156px;
  border: 10px solid #ffffff;

  @media screen and (max-width: 565px) {
    width: 132px;
    height: 100px;
  }
`;

export const DogImageTwo = styled.img`
  width: 208px;
  height: 156px;
  border: 10px solid #ffffff;
  margin-left: 20px;

  @media screen and (max-width: 565px) {
    width: 132px;
    height: 100px;
  }
`;

export const AdoptableDogsHeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1130px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StarIcon = styled(Stars)`
  color: #e1533c;
  width: 20px;
  height: 20px;
  padding-right: 10px;

  @media screen and (max-width: 1130px) {
    margin-bottom: -20px;
  }
`;

export const AdoptableDogsHeader = styled.p`
  color: #e1533c;
  font-size: 29px;
  font-weight: bold;

  @media screen and (max-width: 565px) {
    font-size: 27px;
  }
`;

export const AdoptableCatsWrapper = styled.div`
  @media screen and (max-width: 1130px) {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 50px;
  }
`;

export const AdoptableCatsImagesWrapper = styled.div``;

export const CatImageOne = styled.img`
  width: 208px;
  height: 156px;
  border: 10px solid #ffffff;

  @media screen and (max-width: 565px) {
    width: 132px;
    height: 100px;
  }
`;

export const CatImageTwo = styled.img`
  width: 208px;
  height: 156px;
  border: 10px solid #ffffff;
  margin-left: 20px;
  
  @media screen and (max-width: 565px) {
    width: 132px;
    height: 100px;
  }
`;

export const AdoptableCatsHeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1130px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const AdoptableCatsHeader = styled.p`
  color: #e1533c;
  font-size: 29px;
  font-weight: bold;
  
  @media screen and (max-width: 565px) {
    font-size: 27px;
  }
`;

export default AdoptableAnimals;
