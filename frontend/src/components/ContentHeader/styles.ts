import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-areas: "TITLE";
  align-items: center;
`;

export const TitleContainer = styled.div`
  grid-area: TITLE;

  > .title-header {
    color: var(--dark-gray);
    font-family: var(--heading-font);
    font-size: 1.5rem;
    margin: 1.5rem 0 1.5rem 0;
    right: 0;
  }

  @media (max-width: 767px) {
    > .title-header {
      color: var(--dark-gray);
      font-size: 1.125rem;
    }
  }
`;
