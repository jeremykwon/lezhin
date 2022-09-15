import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import devices from "Styles/Devices";

// Lib
import { makeDateOfWeek } from "Lib";

// Store
import { webtoonListState } from "Store";

/** ---------- 웹툰들을 모아 놓은 Wrapper ---------- */
export default function WebtoonList() {
  const webtoonList = useRecoilValue(webtoonListState);
  return (
    <StyledListWrapper>
      {webtoonList.map((item) => {
        // isView가 false인 경우 filter를 통해 보여지지 않음을 의미
        if (item.isView) return <WebtoonItem key={item.id} itemInfo={item} />;
        else return null;
      })}
    </StyledListWrapper>
  );
}

const StyledListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 30px;
  width: 1470px;

  @media ${devices.mobile} {
    width: 100%;
    gap: 20px;
    padding: 0 10px;
  }

  @media ${devices.half} {
    justify-content: center;

    &:after {
      display: block;
      content: "";
      width: 450px;
    }
  }
`;

/** ---------- 단일 웹툰 ---------- */
const WebtoonItem = ({ itemInfo }: { itemInfo: WebtoonInfo }) => {
  const {
    thumbnailSrc,
    title,
    artists,
    previousRank,
    currentRank,
    freedEpisodeSize,
    contentsState,
    schedule,
  } = itemInfo;

  // 작가
  const artistList = useMemo(() => {
    return artists.filter((item) =>
      ["writer", "painter", "scripter"].includes(item.role)
    );
  }, []);

  // 연재 요일
  const koPeriodList = useMemo(() => {
    return schedule.periods.map((period) => {
      return makeDateOfWeek(period);
    });
  }, []);

  // 랭킹
  const rankingState = useMemo(() => {
    if (previousRank < currentRank) return "up";
    else if (previousRank > currentRank) return "down";
    else return "-";
  }, []);

  return (
    <StyledItemWrapper>
      <StyledThumbnailWrapper>
        <img src={thumbnailSrc} alt="썸네일" />
      </StyledThumbnailWrapper>

      <StyledRankWrapper rankingState={rankingState}>
        <p className="rank">{currentRank}</p>
        <div className="change-rank-wrapper">
          <p>
            {rankingState === "up" ? "▲" : rankingState === "down" ? "▼" : "-"}
          </p>
          <p>{rankingState !== "-" && Math.abs(currentRank - previousRank)}</p>
        </div>
      </StyledRankWrapper>

      <StyledTextWrapper>
        <p className="title">{title}</p>
        <div className="writer-wrapper">
          {artistList.map((artist) => (
            <p key={`${artist.id}_${title}`}>-{artist.name}</p>
          ))}
        </div>
        {freedEpisodeSize !== 0 && <p>{freedEpisodeSize}화 무료</p>}
        {contentsState === "completed" ? (
          <p>[완결]</p>
        ) : (
          <p>
            [연재 중 - 매주 {koPeriodList.map((p) => p).join("·")}요일 연재]
          </p>
        )}
      </StyledTextWrapper>
    </StyledItemWrapper>
  );
};

const StyledItemWrapper = styled.li`
  display: flex;
  width: 450px;
  height: 144px;
  border: 2px var(--lightgray-color) solid;
  border-radius: 5px;
  padding: 10px;
`;

const StyledThumbnailWrapper = styled.div`
  width: 80px;

  img {
    width: 80px;
    height: 100%;
  }
`;

const StyledRankWrapper = styled.div<{
  rankingState: "up" | "down" | "-";
}>`
  width: 50px;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;

  @media ${devices.mobile} {
    width: 40px;
  }

  // p - 랭크
  .rank {
    font-size: 30px;

    @media ${devices.mobile} {
      font-size: 23px;
    }
  }

  // div - 랭크 변동 wrapper
  .change-rank-wrapper {
    display: flex;
    font-size: 13px;
    gap: 3px;
    color: var(
      ${({ rankingState }) =>
        rankingState === "up" ? "--primary-color" : "--lightblue-color"}
    );

    @media ${devices.mobile} {
      font-size: 11px;
    }
  }
`;

const StyledTextWrapper = styled.div`
  flex: 1;
  max-width: clac(100% - 130px);
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media ${devices.mobile} {
    font-size: 14px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;

    @media ${devices.mobile} {
      font-size: 15px;
    }
  }

  .writer-wrapper {
    flex: 1;
    display: flex;
    gap: 10px;
    font-size: 13px;
    color: var(--darkgray-color);

    @media ${devices.mobile} {
      font-size: 12px;
    }
  }
`;
