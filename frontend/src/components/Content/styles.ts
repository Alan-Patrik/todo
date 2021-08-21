import styled from "styled-components";

export const Container = styled.div`
  grid-area: CONTENT;
`;

export const ContentContainer = styled.div`
  height: calc(100vh - 8.75rem);

  @media (min-width: 250px) and (max-width: 960px) {
    height: calc(100vh - 7.5rem);
  }
`;
