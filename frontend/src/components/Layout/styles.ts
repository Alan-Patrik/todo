import styled from "styled-components";

export const Grid = styled.div`
  height: 100%;
  display: grid;
  overflow: hidden;
  grid-template-columns: 4.375rem auto;
  grid-template-rows: 4.375rem auto;
  grid-template-areas:
    "MENU HEADER"
    "MENU CONTENT";

  @media (min-width: 250px) and (max-width: 600px) {
    height: 100vh;
    display: grid;
    overflow: hidden;
    grid-template-columns: 2rem auto;
    grid-template-rows: 2rem auto;
    grid-template-areas:
      "MENU HEADER"
      "MENU CONTENT";
  }
`;
