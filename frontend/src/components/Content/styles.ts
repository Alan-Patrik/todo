import styled from "styled-components";

export const Container = styled.div`
  grid-area: CONTENT;
`;

export const ContentContainer = styled.div`
  height: calc(100vh - 8.75rem);

  @media (max-width: 960px) {
    height: calc(100vh - 9.5rem);
  }
`;
