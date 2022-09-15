import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import devices from "Styles/Devices";

// Store
import { filterObState } from "Store";

// Component
import { Button } from "Components";

//Hook
import { useFilterEvent } from "Hooks";

// Lib
import { makeFilterName } from "Lib";

/** ----- 필터 ----- */
const filterList: FilterOption[] = [
  "all",
  "completed",
  "scheduled",
  "freedEpisode",
];

export default function Filter() {
  return (
    <StyledFilterContainer>
      {filterList.map((filterType) => (
        <FilterItem key={filterType} filterType={filterType} />
      ))}
    </StyledFilterContainer>
  );
}

const StyledFilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;

  @media ${devices.mobile} {
    gap: 10px;
  }
`;

/** ----- 필터 버튼 컴포넌트 ----- */
type ItemProps = {
  filterType: FilterOption;
};

const FilterItem = ({ filterType }: ItemProps) => {
  const filterOb = useRecoilValue(filterObState);
  const { handler } = useFilterEvent(filterType); // 필터의 확장성을 높이기 위해 Hook으로 로직 분리

  const checked = useMemo(() => {
    if (filterType === "all" && Object.keys(filterOb).length === 0) return true;
    else return filterOb.hasOwnProperty(filterType);
  }, [filterOb]);

  const filterName = useMemo(() => {
    return makeFilterName(filterType);
  }, []);

  return (
    <Button clickHandler={handler} selected={checked}>
      {filterName}
    </Button>
  );
};
