import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  overflow-y: auto;

  ::-webkit-scrollbar-track {
    background-color: #d1d1d1;
    border-radius: 10px;
  }
  ::-webkit-scrollbar {
    width: 0.375rem;
    border-radius: 10px;
    background: #c4c7c9;
  }
  ::-webkit-scrollbar-thumb {
    background: #00000050;
    border-radius: 10px;
  }
`;

export const ContentBody = styled.div`
  height: 100%;

  @media (max-width: 587px) {
    > .title-dashboard {
      display: none;
    }
  }

  @media (min-width: 586px) and (max-width: 639px) {
    > .title-dashboard {
      padding: 1.875rem 0 0 2rem;
      left: 4.375rem;
    }
  }

  @media (min-width: 640px) {
    > .title-dashboard {
      padding: 1.563rem 0 0 5.625rem;
      left: 4.375rem;
    }
  }
`;

export const Content = styled.div`
  height: calc(100% - 6.75rem);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 587px) {
    padding-top: 4rem;
    display: block;
  }
`;

export const ContentChartCard = styled.div`
  display: flex;
  gap: 6rem;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ContentChart = styled.div`
  display: flex;
  margin-top: 4rem;
  flex-direction: row;
  justify-content: space-evenly;

  > .chart-apex {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    z-index: -10;
  }

  .chart-pizza {
    margin-bottom: 3rem;
    cursor: pointer;
  }

  > .chart-donut {
    cursor: pointer;
  }
`;
