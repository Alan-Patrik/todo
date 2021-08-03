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
    font-size: 28px;
    margin: 34px 0 24px 0;
  }
`;

export const ComponentContainer = styled.div`
  grid-area: COMPONENT;
  display: flex;
  justify-content: flex-end;
`;
