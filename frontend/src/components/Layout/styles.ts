import styled from "styled-components";

export const Grid = styled.div`
  height: 100vh;
  display: grid;
  overflow: hidden;
  grid-template-columns: 4.375rem auto;
  grid-template-rows: 4.375rem auto;
  grid-template-areas:
    "MENU HEADER"
    "MENU CONTENT";

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-areas:
    "HEADER"
    "CONTENT CONTENT";
  }
`;
