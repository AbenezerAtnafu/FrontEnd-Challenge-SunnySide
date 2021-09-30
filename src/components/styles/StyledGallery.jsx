import styled from "styled-components";
import imageOne from "../../assets/desktop/image-gallery-milkbottles.jpg";
import imageTwo from "../../assets/desktop/image-gallery-orange.jpg";
import imageThree from "../../assets/desktop/image-gallery-cone.jpg";
import imageFour from "../../assets/desktop/image-gallery-sugarcubes.jpg";

const GalleryList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
`;

const GalleryImage = styled.div`
  width: 100%;
  display: block;
  height: 400px;
`;

const GalleryWrapper = () => {
  const imageList = [imageOne, imageTwo, imageThree, imageFour];
  return (
    <>
      <GalleryList>
        {imageList.map((image) => {
          return (
            <GalleryImage
              style={{
                background: `url(${image}) no-repeat center`,
                backgroundSize: `cover`,
              }}
            />
          );
        })}
      </GalleryList>
    </>
  );
};

export default GalleryWrapper;
