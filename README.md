# 레진엔터테인먼트 front-end 과제

## Skill

- React(CRA)
- Typescript
- React-Query
- MSW
- Recoil

## Version

- node.js - v16.17.0
- npm - v8.19.1

## Script

선행

```jsx
npm install
```

Dev 실행

```jsx
npm start
```

Storybook 실행

```jsx
npm run storybook
```

## 라이브러리 사용 이유

- **React**
  - Virtual DOM을 통해 DOM 변화를 최소화할 수 있어 연산 비용이 적어 사용하였습니다.
  - 재사용성이 높은 컴포넌트 단위의 개발을 쉽게 할 수 있도록 지원합니다.
- **React-Query**
  - 데이터 fetching시 비동기 처리를 쉽게 할 수 있도록 지원합니다.
  - fetching 데이터 캐싱 기능 지원합니다.
  - 페이지네이션 기능 지원합니다.
- **React-intersection-observer**
  - Element가 Viewport에 포함되는지를 관찰하는 기능인 Intersection Observer를 Hook으로 만들어 사용의 편의를 높입니다.
  - 페이지네이션 기능을 위해 사용하였습니다.
- **Styled-component**
  - state를 통한 스타일 관리가 쉬우며 이를 통해 component의 범용적인 사용을 위한 구현의 편의성을 제공합니다.
  - 프로젝트의 규모가 크지 않아 모든 스타일을 정의하는 데 사용하였으나, 프로젝트 규모가 크다면 atomic 디자인 기준 UI를 담당하는 원자~유기체는 Styled-component로, page-template은 sass 파일을 따로 만들어서 스타일 정의할 것 같습니다.
- **lodash**
  - 객체의 깊은 복사를 통해 state변경의 편의를 높이기 위해 사용하였습니다.
  - 객체의 깊은 비교를 위해 객체가 이전 상태와 같은지를 확인하기 위해 사용하였습니다.
- **MSW**
  - Back-end API가 있는 것을 가정하고 실제 개발 환경과 최대한 비슷한 환경을 시뮬레이션하기 위해 사용하였습니다.
- **Recoil**
  - Redux에 비해 간편한 상태 구조를 가지고 있어 사용하였습니다.
  - Store와 같은 외부 요인이 아닌 React 내부의 상태를 활용하고, Context API를 통해 구현되어 있으므로 리액트 친화적입니다.
  - 평가를 위한 프로젝트이기에 자주 사용하는 기술로 어필하는 것이 좋을 것으로 판단하였습니다.
