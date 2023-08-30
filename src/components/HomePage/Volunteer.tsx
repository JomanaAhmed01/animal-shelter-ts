import styled from "styled-components";
import { Stars } from "@styled-icons/bootstrap/Stars";

function Volunteer() {
  return (
    <Wrapper>
      <VolunteerWrapper>
        <VolunteerHeeader>VOLUNTEER</VolunteerHeeader>

        <VolunteerText>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me and you can start
          adding your own content and make changes to the font. Feel free to
          drag and drop me anywhere you like on your page. I’m a great place for
          you to tell a story and let your users know a little more about you.
        </VolunteerText>

        <VolunteerText>
          This is a great space to write long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide. Tell
          your visitors the story of how you came up with the idea for your
          business and what makes you different from your competitors. Make your
          company stand out and show your visitors who you are.
        </VolunteerText>
      </VolunteerWrapper>

      <AnimalsOfTheWeek>
        <DogOfTheWeek>
          <DogOfTheWeekImageWrapper>
            <DogImage src="/imgs/dog-of-the-week.jpg" />
          </DogOfTheWeekImageWrapper>

          <DogOfTheWeekTextWrapper>
            <DogHeaderWrapper>
              <StarIcon />
              <DogOfTheWeekHeader>Dog of the Week</DogOfTheWeekHeader>
            </DogHeaderWrapper>

            <DogOfTheWeekText>
              ​I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.​
            </DogOfTheWeekText>
          </DogOfTheWeekTextWrapper>
        </DogOfTheWeek>

        <CatOfTheWeek>
          <DogOfTheWeekImageWrapper>
            <DogImage src="/imgs/cat-of-the-week.jpg" />
          </DogOfTheWeekImageWrapper>

          <DogOfTheWeekTextWrapper>
            <DogHeaderWrapper>
              <StarIcon />
              <DogOfTheWeekHeader>Cat of the Week</DogOfTheWeekHeader>
            </DogHeaderWrapper>

            <DogOfTheWeekText>
              ​I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.​
            </DogOfTheWeekText>
          </DogOfTheWeekTextWrapper>
        </CatOfTheWeek>
      </AnimalsOfTheWeek>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #ffe6ff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (max-width: 1130px) {
    flex-direction: column;
  }
`;

export const VolunteerWrapper = styled.div`
  border-right: 2px solid #e1533c;
  border-right-style: dotted;
  padding-right: 100px;

  @media screen and (max-width: 1250px) {
    padding-right: 60px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 1130px) {
    border-right: none;
    padding-right: 0px;
    padding-left: 60px;
  }

  @media screen and (max-width: 425px) {
    padding-left: 30px;
  }
`;

export const VolunteerHeeader = styled.p`
  color: #e1533c;
  font-size: 29px;
`;

export const VolunteerText = styled.p`
  color: #232323;
  font-size: 14px;
  width: 435px;

  @media screen and (max-width: 565px) {
    width: 70%;
  }

  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;

export const AnimalsOfTheWeek = styled.div`
  margin-left: -100px;

  @media screen and (max-width: 1130px) {
    margin-left: 0px;
  }
`;

export const DogOfTheWeek = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1130px) {
    flex-direction: column;
  }
`;

export const CatOfTheWeek = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1130px) {
    flex-direction: column;
    margin-top: 30px;
  }
`;

export const DogOfTheWeekImageWrapper = styled.div`
  padding-right: 20px;
`;

export const DogImage = styled.img`
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const DogOfTheWeekTextWrapper = styled.div``;

export const DogHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StarIcon = styled(Stars)`
  color: #e1533c;
  width: 20px;
  height: 20px;
  padding-right: 10px;
`;

export const DogOfTheWeekHeader = styled.p`
  color: #e1533c;
  font-size: 20px;
  font-weight: bold;
`;

export const DogOfTheWeekText = styled.p`
  color: #232323;
  font-size: 14px;
  width: 270px;
  margin-top: -10px;
  margin-left: 30px;
`;

export const CatOfTheWeekImageWrapper = styled.div`
  padding-right: 20px;
`;

export const CatImage = styled.img`
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const CatOfTheWeekTextWrapper = styled.div``;

export const CatHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CatOfTheWeekHeader = styled.p`
  color: #e1533c;
  font-size: 20px;
  font-weight: bold;
`;

export const CatOfTheWeekText = styled.p`
  color: #232323;
  font-size: 14px;
  width: 270px;
  margin-top: -10px;
  margin-left: 30px;
`;

export default Volunteer;
