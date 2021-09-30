import styled from "styled-components";

import firstRowImage from "../../assets/desktop/image-transform.jpg";
import secondRowImage from "../../assets/desktop/image-stand-out.jpg";
import { NavButton } from "./StyledNavBar";

const DetailSection = styled.div`
  display: flex;
`;

const DetailContentSection = styled.div`
  padding: 0 10vw;
  align-self: center;
  flex: 0 0 50%;
`;

const DetailContentText = styled.p`
  margin: 2rem 0 2rem 0;
  font-size: 1.5rem;
`;

const DetailImage = styled.div`
  width: 100%;
  display: block;
  height: 600px;
`;

const DetailHeadingSecondary = styled.h2`
  font-size: 3rem;
  font-weight: 1000;
  letter-spacing: 10;
  font-family: "Barlow", sans-serif;
  font-family: "Fraunces", serif;
  line-height: 1;
  color: ${({ theme }) => theme.colors.graphicDesignText};
`;

const LearnMoreButton = styled(NavButton)`
  border-radius: 0;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.secondary}, sans-serif;
  font-weight: 900;
  font-size: 1.4rem;
  padding: 0;
`;

const LearnMoreButton_First = styled(LearnMoreButton)`
  border-bottom: 3px solid ${({ theme }) => theme.colors.yellow};
`;

const LearnMoreButton_Second = styled(LearnMoreButton)`
  border-bottom: 3px solid ${({ theme }) => theme.colors.softRed};
  align-items: flex-start;
`;

const DetailSectionWrapper = () => {
  return (
    <>
      <DetailSection>
        <DetailContentSection>
          <DetailHeadingSecondary>
            Transform your <br></br> brand
          </DetailHeadingSecondary>
          <DetailContentText>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </DetailContentText>
          <LearnMoreButton_First>Learn More</LearnMoreButton_First>
        </DetailContentSection>

        <DetailImage
          style={{
            background: `url(${firstRowImage}) no-repeat center`,
            backgroundSize: `cover`,
          }}
        />
      </DetailSection>

      <DetailSection>
        <DetailImage
          style={{
            background: `url(${secondRowImage}) no-repeat center`,
            backgroundSize: `cover`,
          }}
        />
        <DetailContentSection>
          <DetailHeadingSecondary>
            Stand out to the right <br></br> audience
          </DetailHeadingSecondary>
          <DetailContentText>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </DetailContentText>
          <LearnMoreButton_Second>Learn More</LearnMoreButton_Second>
        </DetailContentSection>
      </DetailSection>
    </>
  );
};

export default DetailSectionWrapper;
