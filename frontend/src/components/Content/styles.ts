import styled from "styled-components";

export const Container = styled.div`
  grid-area: CONTENT;
  overflow: hidden;
  height: 100%;

  @media (min-width: 250px) and (max-width: 600px) {
    overflow-y: hidden;
    overflow-x: hidden;
    height: 100vh;
  }
`;

export const ContentContainer = styled.div`
  padding-left: 5.625rem;

  @media (min-width: 250px) and (max-width: 600px) {
    padding-left: 2rem;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    margin: 0;
    padding-left: 4rem;
  }
`;
