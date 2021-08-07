import styled from "styled-components";

export const Container = styled.div`
  grid-area: CONTENT;
  background-color: var(--main-background);
  padding: 0 5.875rem;
  height: calc(100vh - 5.313rem);
  overflow-y: hidden;
`;

export const FooterContainer = styled.div`
  margin: 1.875rem 0;
`;

export const FooterContent = styled.footer`
  display: flex;
  color: var(--medium-gray);
  font-family: var(--body-font);
  justify-content: center;
`;
