import ReactLoading from "react-loading";
import styled from "styled-components";

interface StyledContainerP {
  width?: number;
  height?: number;
}

export interface Props extends StyledContainerP {
  type:
    | "blank"
    | "balls"
    | "bars"
    | "bubbles"
    | "cubes"
    | "cylon"
    | "spin"
    | "spinningBubbles"
    | "spokes";
}

export default function Loading({ type, width, height }: Props) {
  return (
    <StyledContainer width={width} height={height}>
      <ReactLoading
        type={type}
        color={"#ed1c24"}
        width={width ? width : 60}
        height={height ? height : 60}
      />
    </StyledContainer>
  );
}

const StyledContainer = styled.div<StyledContainerP>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  height: ${({ height }) => (height ? `${height}px` : "100vh")};
`;
