import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/Global";
import DetailSectionWrapper from "./components/styles/StyledDetailSection";
import GalleryWrapper from "./components/styles/StyledGallery";
import StyledHeader from "./components/styles/StyledHeader";
import StyledProductWrapper from "./components/styles/StyledProductSection";
import StyledTestimonialWrapper from "./components/styles/StyledTestimomnial";
import StyledFooterWrapper from "./components/styles/StyledFooter";

const theme = {
  colors: {
    softRed: "hsl(7, 99%, 70%)",
    yellow: "hsl(51, 100%, 49%)",
    graphicDesignText: "hsl(167, 40%, 24%)",
    photographyText: "hsl(198, 62%, 26%)",
    footer: "hsl(168, 34%, 41%)",
    darkDesaturatedBlue: "hsl(212, 27%, 19%)",
    veryDarkGrayishBlue: "hsl(213, 9%, 39%)",
    darkGrayishBlue: "hsl(232, 10%, 55%)",
    grayishBlue: "hsl(210, 4%, 67%)",
    white: "hsl(0, 0%, 100%)",
  },
  sizes: {
    fontSize: "18px",
  },
  fonts: {
    primary: "Barlow",
    secondary: "Fraunces",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <StyledHeader />
        <DetailSectionWrapper />
        <StyledProductWrapper />
        <StyledTestimonialWrapper />
        <GalleryWrapper />
        <StyledFooterWrapper />
      </>
    </ThemeProvider>
  );
}

export default App;
