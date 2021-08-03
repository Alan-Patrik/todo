import styled from "styled-components";

export const Container = styled.div`
  grid-area: CONTENT;
  background-color: var(--main-background);
  padding: 0 94px;
  height: calc(100vh - 5rem);
  overflow-y: scroll;
`;

export const FooterContainer = styled.div`
  margin: 30px 0;
`;

export const FooterContent = styled.footer`
  display: flex;
  color: var(--medium-gray);
  font-family: var(--body-font);
  justify-content: center;
`;
