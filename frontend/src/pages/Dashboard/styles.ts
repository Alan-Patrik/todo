import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: calc(100vh - 8.75rem);
  grid-template-columns: 70% 30%;
  grid-template-areas: "BODY GRAPHIC";

  @media (min-width: 250px) and (max-width: 600px) {
    margin: 0;
    padding: 0;
    display: block;
    overflow-y: auto;
    overflow-x: hidden;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const ContentBody = styled.div`
  grid-area: BODY;
`;

export const Content = styled.div``;

export const ContentChartCard = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 4rem;
  justify-content: space-evenly;

  @media (min-width: 250px) and (max-width: 600px) {
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    margin: 0;
    gap: 70px;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 70px;
  }
`;

export const ContentChart = styled.div`
  display: flex;
  margin-top: 5rem;
  flex-direction: row;
  justify-content: space-evenly;

  .chart-pizza {
    margin-right: 5.5rem;
    cursor: pointer;
  }

  > .chart-donut {
    margin-right: 5.5rem;
    cursor: pointer;
  }

  @media (min-width: 250px) and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0 0 3rem;

    > .chart-donut {
      margin-top: 1rem;
    }
  }

  @media (max-width: 600px) and (max-width: 900px) {
    margin-top: 50px;
    display: flex;
    justify-content: center;

    .chart-pizza {
      margin-left: 0.7rem;
    }
  }
`;
