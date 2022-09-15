import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

// Component
import { Header, Loading, WebtoonList, Filter } from "Components";

// Hook
import { useGetWebtoonInfo } from "Hooks";

export default function CartoonRanking() {
  const { ref, inView } = useInView();
  const { status, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetWebtoonInfo();

  // 하단으로 내려간 경우 다음 데이터 fetch
  useEffect(() => {
    if (hasNextPage && inView) fetchNextPage();
  }, [hasNextPage, inView]);

  if (status === "loading") {
    return <Loading type="bars" />;
  } else {
    return (
      <StyledPageContainer>
        {/* fetching 중인 경우 로딩바 띄움 */}
        {isFetchingNextPage && <Loading type="bars" />}

        <StyledTemplateWrapper>
          <Header />
        </StyledTemplateWrapper>

        <StyledTemplateWrapper>
          <Filter />
        </StyledTemplateWrapper>

        <StyledListWrapper>
          <WebtoonList />
        </StyledListWrapper>

        <div ref={ref} />
      </StyledPageContainer>
    );
  }
}

const StyledPageContainer = styled.div`
  padding-bottom: 30px;
`;

const StyledTemplateWrapper = styled.div`
  margin-bottom: 50px;
`;

const StyledListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
