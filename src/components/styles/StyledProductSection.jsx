import styled from "styled-components";
import graphicsDesignImage from "../../assets/desktop/image-graphic-design.jpg";
import photograohyImage from "../../assets/desktop/image-photography.jpg";

const ProductSection = styled.div`
  display: flex;
`;

const ProductSectionImage = styled.div`
  flex: 0 0 50%;
`;

const ProductSectionPhoto = styled.div`
  width: 100%;
  display: block;
  height: 600px;
`;

const ProductHeading = styled.h3`
  text-align: center;
  font-size: 3rem;
  font-family: ${({ theme }) => theme.fonts.secondary}, sans-serif;
  font-weight: 900;
`;

const ProductGraphicText = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.graphicDesignText};
  padding: 0 10vw;
`;

const ProductPhotoText = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.photographyText};
  padding: 0 12vw;
`;

const ProductTextDiv = styled.div`
  margin-top: -20rem;
  margin-bottom: 10rem;
`;

const StyledProductWrapper = () => {
  return (
    <>
      <ProductSection>
        <ProductSectionImage>
          <ProductSectionPhoto
            style={{
              background: `url(${graphicsDesignImage}) no-repeat center`,
              backgroundSize: `cover`,
            }}
          />
          <ProductTextDiv>
            <ProductHeading
              style={{
                color: "hsl(167, 40%, 24%)",
              }}
            >
              Graphics Design
            </ProductHeading>
            <ProductGraphicText>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </ProductGraphicText>
          </ProductTextDiv>
        </ProductSectionImage>
        <ProductSectionImage>
          <ProductSectionPhoto
            style={{
              background: `url(${photograohyImage}) no-repeat center`,
              backgroundSize: `cover`,
            }}
          />
          <ProductTextDiv>
            <ProductHeading
              style={{
                color: "hsl(212, 27%, 19%)",
              }}
            >
              Photography
            </ProductHeading>
            <ProductPhotoText>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </ProductPhotoText>
          </ProductTextDiv>
        </ProductSectionImage>
      </ProductSection>
    </>
  );
};

export default StyledProductWrapper;
