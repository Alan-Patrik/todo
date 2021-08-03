import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 15.625rem auto;
  grid-template-rows: 5rem auto;
  grid-template-areas:
    "MENU HEADER"
    "MENU CONTENT";
  height: 100vh;
`;
