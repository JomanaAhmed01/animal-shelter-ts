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
`;

export const AdoptableDogsWrapper = styled.div``;

export const AdoptableDogsImagesWrapper = styled.div``;

export const DogImageOne = styled.img`
  width: 208px;
  height: 156px;
  border: 10px solid #ffffff;
`;

export const DogImageTwo = styled.img`
  width: 208px;
  height: 156px;
  border: 10px solid #ffffff;
  margin-left: 20px;
`;

export const AdoptableDogsHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StarIcon = styled(Stars)`
  color: #e1533c;
  width: 20px;
  height: 20px;
  padding-right: 10px;
`;

export const AdoptableDogsHeader = styled.p`
  color: #E1533C;
  font-size: 29px;
  font-weight: bold;
`;

export const AdoptableCatsWrapper = styled.div``;

export const AdoptableCatsImagesWrapper = styled.div``;

export const CatImageOne = styled.img`
  width: 208px;
  height: 156px;
  border: 10px solid #ffffff;
`;

export const CatImageTwo = styled.img`
  width: 208px;
  height: 156px;
  border: 10px solid #ffffff;
  margin-left: 20px;
`;

export const AdoptableCatsHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AdoptableCatsHeader = styled.p`
  color: #E1533C;
  font-size: 29px;
  font-weight: bold;
`;

export default AdoptableAnimals;
