// *** Image.jsx ***

import React from "react";
import styled from "styled-components";

const Image = props => {
  const { shape, src, size, _onKeyUp } = props;
  const styles = {
    src: src,
    size: size,
  };

  if (shape === "circle") {
    return <ImageCircle onKeyUp={_onKeyUp} {...styles}></ImageCircle>;
  } else if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner onKeyUp={_onKeyUp} {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  return (
    <React.Fragment>
      <ImageDefault onKeyUp={_onKeyUp} {...styles}></ImageDefault>
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: "",
  src: "https://i.ytimg.com/vi/Ct1Pp_4FEIY/maxresdefault.jpg",
  size: 36,
  _onKeyUp: () => {},
};

const ImageCircle = styled.div`
  --size: ${props => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${props => props.src}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 4px;
`;

const ImageDefault = styled.div`
  --size: ${props => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${props => props.src}");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${props => props.src}");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export default Image;
