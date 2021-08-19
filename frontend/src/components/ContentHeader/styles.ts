import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-areas: "TITLE";
  align-items: center;
`;

export const TitleContainer = styled.div`
  grid-area: TITLE;
  > h1 {
    color: var(--dark-gray);
    font-family: var(--heading-font);
    font-size: 1.5rem;
    margin: 1.5rem 0 1.5rem 0;
    right: 0;

    @media (min-width: 250px) and (max-width: 600px) {
      font-size: 16px;
      margin: 1rem 0;
      right: 0;
    }
  }
`;
