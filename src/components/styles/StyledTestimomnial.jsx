import styled from "styled-components";
import emlyImage from "../../assets/image-emily.jpg";
import thomasImage from "../../assets/image-thomas.jpg";
import jennieImage from "../../assets/image-jennie.jpg";

import { Row } from "./StyledNavBar";

const Testimonial = styled.div`
  margin-top: 10rem;
  height: 60vh;
`;
const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 15rem;
`;

const TestimonialClients = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TestimonialClientPhoto = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin-bottom: 3rem;
`;
const TestimonialClientText = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
  text-align: center;
  margin-bottom: 4rem;
`;
const TestimonialHeading = styled.h4`
  font-size: 2rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary}, sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5rem;
  margin-bottom: 8rem;
  color: ${({ theme }) => theme.colors.grayishBlue};
`;

const TestimonialName = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.photographyText};
  margin-bottom: 0.2rem;
`;
const TestimonialDescription = styled.div`
  font-size: 1rem;
  width: 50%;
  color: ${({ theme }) => theme.colors.grayishBlue};
  text-align: center;
`;

const StyledTestimonialWrapper = () => {
  const testimonisals = [
    {
      description:
        "  We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.      ",
      name: "Emily R.",
      field: "Marketing Director",
      image: emlyImage,
    },
    {
      description:
        " Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      name: "Thomas S.",
      field: "Chief Operating Officer",
      image: thomasImage,
    },
    {
      description:
        "  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      name: "Jennie F.",
      field: "Business Owner",
      image: jennieImage,
    },
  ];

  return (
    <>
      <Testimonial>
        <TestimonialHeading>Client Testimonials</TestimonialHeading>
        <Row>
          <TestimonialGrid>
            {testimonisals.map((testimony) => {
              return (
                <>
                  <TestimonialClients>
                    <TestimonialClientPhoto
                      style={{
                        background: `url(${testimony.image}) no-repeat center`,
                        backgroundSize: `cover`,
                      }}
                    />
                    <TestimonialClientText>
                      {testimony.description}
                    </TestimonialClientText>
                    <TestimonialName>{testimony.name}</TestimonialName>
                    <TestimonialDescription>
                      {testimony.field}
                    </TestimonialDescription>
                  </TestimonialClients>
                </>
              );
            })}
          </TestimonialGrid>
        </Row>
      </Testimonial>
    </>
  );
};

export default StyledTestimonialWrapper;
