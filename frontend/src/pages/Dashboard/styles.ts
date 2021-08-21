import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  overflow-y: auto;
`;

export const ContentBody = styled.div`
  height: 100%;

  @media (min-width: 250px) and (max-width: 586px) {
    > .title-dashboard {
      display: none;
    }
  }

  @media (min-width: 586px) and (max-width: 640px) {
    > .title-dashboard {
      padding: 1.875rem 0 0 2rem;
      left: 4.375rem;
      position: absolute;
    }
  }

  @media (min-width: 640px) {
    > .title-dashboard {
      padding: 1.875rem 0 0 90px;
      left: 4.375rem;
      position: absolute;
    }
  }
`;

export const Content = styled.div`
  height: calc(100% - 4.875rem);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 586px) {
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
  }

  .chart-pizza {
    margin-bottom: 3rem;
    cursor: pointer;
  }

  > .chart-donut {
    cursor: pointer;
  }
`;
