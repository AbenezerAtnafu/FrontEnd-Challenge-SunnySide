import styled from "styled-components";

import { StyledNavBar } from "./StyledNavBar";

import headerBackground from "../../assets/desktop/image-header.jpg";
import headerArrowImage from "../../assets/icon-arrow-down.svg";

const StyledHeaderBackground = styled.header`
  background-image: url(${headerBackground});
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;
`;

// header arrow part
const HeaderArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HeaderImage = styled.div`
  background-image: url(${headerArrowImage});
  width: 36px;
  height: 114px;
`;

const HeadingText = styled.h1`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-transform: upperCase;
  font-size: 4rem;
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
  letter-spacing: 1rem;
  font-weight: 900;
`;

const StyledHeader = function () {
  return (
    <>
      <StyledHeaderBackground>
        <StyledNavBar />
      </StyledHeaderBackground>
      <HeadingText>We are creatives</HeadingText>
      <HeaderArrow>
        <HeaderImage />
      </HeaderArrow>
    </>
  );
};

export default StyledHeader;
