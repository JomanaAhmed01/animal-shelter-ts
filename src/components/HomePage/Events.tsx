import styled from "styled-components";
import { Stars } from "@styled-icons/bootstrap/Stars";

function Events() {
  return (
    <Wrapper>
      <InnerWrapper>
        <TicketWrapper>
          <TicketPriceWrapper>
            <TicketPriceOne>ONLY</TicketPriceOne>
            <TicketPriceTwo>35$</TicketPriceTwo>
            <Validity>Valid till June</Validity>
          </TicketPriceWrapper>

          <TicketSpayWrapper>
            <TicketSpayHeader>
              ​﻿﻿$35 Spay/Neuter ﻿for Cats and Kittens!
            </TicketSpayHeader>

            <TicketSpayText>
              To help fight feline overpopulation, we are offering to spay or
              neuter your cat or kitten for only $35.
            </TicketSpayText>
          </TicketSpayWrapper>
        </TicketWrapper>

        <EventsWrapper>
          <EventsHeaderWrapper>
            <StarIcon />
            <EventsHeader>EVENTS</EventsHeader>
          </EventsHeaderWrapper>

          <EventsTextWrapper>
            <EventsTextHeader>
              Special Adoption Day at Golden Gate Park - 1/11/35, 1pm​
            </EventsTextHeader>

            <EventsTextText>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </EventsTextText>

            <EventsTextHeader>
              National Adoption Event at Fisherman's Wharf - 12/12/35, 11am
            </EventsTextHeader>

            <EventsTextText>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </EventsTextText>
          </EventsTextWrapper>
        </EventsWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #ffe6ff;
  border: 1px solid transparent;
  padding-top: 30px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  padding-bottom: 100px;

  @media screen and (max-width: 1130px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const TicketWrapper = styled.div`
  /* background-image: url('/imgs/ticket-bg.jpg');
  background-repeat: no-repeat; */
  /* height: 500px; */
  display: flex;
  justify-content: space-around;
  width: 500px;

  @media screen and (max-width: 565px) {
    width: 400px;
  }

  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;

export const TicketPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
`;

export const TicketPriceOne = styled.p`
  color: #e1533c;
  font-size: 29px;

  @media screen and (max-width: 565px) {
    font-size: 26px;
  }
`;

export const TicketPriceTwo = styled.p`
  color: #e1533c;
  font-size: 35px;
  font-weight: bold;
  margin-top: -30px;

  @media screen and (max-width: 565px) {
    font-size: 28px;
  }
`;

export const Validity = styled.p`
  color: #e1533c;
  font-size: 20px;
  margin-top: -10px;

  @media screen and (max-width: 565px) {
    font-size: 15px;
  }
`;

export const TicketSpayWrapper = styled.div`
  margin-top: 15px;
`;

export const TicketSpayHeader = styled.p`
  color: #e1533c;
  font-size: 20px;
  width: 190px;

  @media screen and (max-width: 565px) {
    font-size: 17px;
  }
`;

export const TicketSpayText = styled.p`
  color: #232323;
  font-size: 14px;
  width: 252px;
  margin-top: -15px;

  @media screen and (max-width: 565px) {
    font-size: 13px;
    margin-top: -10px;
  }
`;

export const EventsWrapper = styled.div`
  @media screen and (max-width: 500px) {
    margin-left: 20px;
  }
`;

export const EventsHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StarIcon = styled(Stars)`
  color: #e1533c;
  width: 20px;
  height: 20px;
  padding-right: 10px;
`;

export const EventsHeader = styled.p`
  color: #e1533c;
  font-size: 29px;
  font-weight: bold;

  @media screen and (max-width: 565px) {
    font-size: 27px;
  }
`;

export const EventsTextWrapper = styled.div``;

export const EventsTextHeader = styled.p`
  color: #e1533c;
  font-size: 14px;
  font-weight: bold;

  @media screen and (max-width: 565px) {
    font-size: 13px;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const EventsTextText = styled.p`
  color: #232323;
  font-size: 14px;
  width: 440px;
  margin-top: -10px;
  margin-bottom: 20px;

  @media screen and (max-width: 565px) {
    font-size: 13px;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
    /* border: 3px solid red; */
  }
`;

export default Events;
