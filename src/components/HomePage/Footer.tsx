import styled from "styled-components";
import { Stars } from "@styled-icons/bootstrap/Stars";
import { Twitter } from '@styled-icons/boxicons-logos/Twitter'
import { Facebook } from '@styled-icons/boxicons-logos/Facebook'
import { Youtube } from '@styled-icons/boxicons-logos/Youtube'

function Footer() {
  return (
    <Wrapper>
      <RightsWrapper>
        <RightsIconWrapper>
          <StarIcon />
        </RightsIconWrapper>

        <RightsTextWrapper>
          <WebsiteName>2035 by Animal Shelter</WebsiteName>

          <Powered>
            Powered and secured by <Wix>Wix</Wix>
          </Powered>
        </RightsTextWrapper>
      </RightsWrapper>

      <SocialMediaWrapper>
        <TwitterWrapper>
          <TwitterIcon />
          <TwitterFollow>Follow us on Twitter</TwitterFollow>
        </TwitterWrapper>

        <FacebookWrapper>
          <FacebookIcon />
          <FacebookFollow>Follow us on Facebook</FacebookFollow>
        </FacebookWrapper>

        <YoutubeWrapper>
          <YoutubeIcon />
          <YoutubeFollow>Watch adoptable animals on Youtube</YoutubeFollow>
        </YoutubeWrapper>
      </SocialMediaWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #e1533c;
  height: 115px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const RightsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const RightsIconWrapper = styled.div`
  margin-top: 13px;
`;

export const StarIcon = styled(Stars)`
  color: #ffffff;
  width: 20px;
  height: 20px;
  padding-right: 10px;
`;

export const RightsTextWrapper = styled.div``;

export const WebsiteName = styled.p`
  color: #f9e6e4;
  font-size: 14px;
`;

export const Powered = styled.p`
  color: #f9e6e4;
  font-size: 14px;
  margin-top: -12px;
`;

export const Wix = styled.a`
  color: #f9e6e4;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 700px;
`;

export const TwitterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 170px;
`;

export const TwitterIcon = styled(Twitter)`
  width: 24px;
  height: 24px;
  color: #F9E6E4;
`;

export const TwitterFollow = styled.p`
  color: #F9E6E4;
  font-size: 14px;
`;

export const FacebookWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 170px;
`;

export const FacebookIcon = styled(Facebook)`
  width: 24px;
  height: 24px;
  color: #F9E6E4;
`;

export const FacebookFollow = styled.p`
  color: #F9E6E4;
  font-size: 14px;
`;

export const YoutubeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 275px;
`;

export const YoutubeIcon = styled(Youtube)`
  width: 24px;
  height: 24px;
  color: #F9E6E4;
`;

export const YoutubeFollow = styled.p`
  color: #F9E6E4;
  font-size: 14px;
`;

export default Footer;
