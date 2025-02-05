import React from "react";
import ReactImageMagnify from "react-image-magnify";

interface ImageMagnifyProps {
  smallImageSrc: string;
  largeImageSrc: string;
  width?: number;
  height?: number;
  lensStyle?: React.CSSProperties;
  isEnlargedViewEnabled?: boolean;
}

const ImgMagnify: React.FC<ImageMagnifyProps> = (props) => {
  return (
    <div> 
      <ReactImageMagnify
        {...props}
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            isFluidWidth: true,
            src: props.largeImageSrc,
          },
          largeImage: {
            src: props.largeImageSrc,
            width: 1000,
            height: 480,
          },
          enlargedImageContainerStyle: {
            zIndex: "1500",
          },
          enlargedImageContainerDimensions: {
            width: "100%",
            height: "100%",
          },
        }}
      />
    </div>
  );
};

export default React.memo(ImgMagnify);
