import { useRecoilValue } from "recoil";
import styled from "styled-components";
import devices from "Styles/Devices";

// Store
import { genreKorean } from "Store";

// Image
import { Logo } from "Resource/Images";

export default function Header() {
  const _genreKorean = useRecoilValue(genreKorean);
  return (
    <StyledWrapper>
      <StyledImage src={Logo} alt="로고" />
      <StyledTitle>{_genreKorean} 장르 랭킹</StyledTitle>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.section`
  height: 80px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  position: relative;
`;

const StyledImage = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 10px;
  left: 20px;

  @media ${devices.mobile} {
    top: 20px;
    width: 40px;
    height: 40px;
  }
`;

const StyledTitle = styled.h1`
  font-size: 35px;
  flex: 1;
  text-align: center;

  @media ${devices.mobile} {
    font-size: 25px;
  }
`;
