import styled from "styled-components";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";

const Footer = styled.div`
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.footer};
`;

const FooterFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterList = styled.ul`
  list-style: none;
  display: flex;
`;

const FooterItem = styled.li`
  margin-bottom: 5rem;
  /* margin-right: 3rem; */
  padding: 3rem;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #19536b;
  font-size: 1.8rem;
  padding-right: 3rem;
`;

const FooterSocial = styled.div`
  display: flex;
`;

const FooterHeading = styled.h5`
  font-size: 3rem;
  color: #19536b;
  font-family: "Barlow", sans-serif;
  margin-top: 5rem;
  margin-bottom: 3rem;
`;

const SocialMedia = styled.div`
  width: 4rem;
  height: 4rem;
  margin-right: 6rem;
  /* border-radius: 50%; */
`;

const StyledFooterWrapper = () => {
  const socialMedias = [facebook, instagram, twitter, pinterest];
  return (
    <>
      <Footer>
        <FooterFlex>
          <FooterHeading>sunnyside</FooterHeading>
          <FooterList>
            <FooterItem>
              <FooterLink>About</FooterLink>

              <FooterLink>Services</FooterLink>

              <FooterLink>Projects</FooterLink>
            </FooterItem>
          </FooterList>
          <FooterSocial>
            {socialMedias.map((socialmedia) => {
              return (
                <SocialMedia
                  style={{
                    background: `url(${socialmedia}) no-repeat center`,
                    backgroundSize: `cover`,
                  }}
                />
              );
            })}
          </FooterSocial>
        </FooterFlex>
      </Footer>
    </>
  );
};

export default StyledFooterWrapper;
