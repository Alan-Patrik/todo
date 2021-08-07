import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "TITLE COMPONENT";
  align-items: center;
`;

export const TitleContainer = styled.div`
  grid-area: TITLE;
  > h1 {
    color: var(--dark-gray);
    font-family: var(--heading-font);
    font-size: 1.75rem;
    margin: 1.5rem 0 1.5rem 0;
    right: 0;
  }
`;

// export const ComponentContainer = styled.div`
//   grid-area: COMPONENT;
//   display: flex;
//   justify-content: flex-end;
// `;
