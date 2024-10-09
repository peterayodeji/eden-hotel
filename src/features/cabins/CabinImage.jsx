import { useState } from 'react';
import styled, { css } from 'styled-components';

const Img = styled.img`
  display: block;
  width: 8rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;

  @media (max-width: 825px) {
    width: 100%;
  }
`;

const ImgOverlay = styled.div`
  display: none;

  @media (max-width: 825px) {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    ${props =>
      props.$imgReady &&
      css`
        display: block;
        background: linear-gradient(
          to left,
          rgba(0, 0, 0, 0.6) 10%,
          rgba(0, 0, 0, 0.1) 20%,
          rgba(0, 0, 0, 0) 30%
        );
      `}
  }
`;

function CabinImage({ image, name }) {
  const [hasImgLoaded, setHasImgLoaded] = useState(false);

  return (
    <>
      <Img
        src={image}
        alt={`Cabin ${name} Image`}
        onLoad={() => setHasImgLoaded(true)}
      />
      <ImgOverlay $imgReady={hasImgLoaded} />
    </>
  );
}

export default CabinImage;
