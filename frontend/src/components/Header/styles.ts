import styled from "styled-components";

export const Container = styled.div`
  grid-area: HEADER;
  background-color: var(--content-background);
`;

export const Content = styled.div`
  align-items: center;
  box-shadow: 0 3px 6px #00000026;
  display: flex;
  height: 5rem;
  justify-content: space-between;
`;

export const Title = styled.h4`
  color: #7a7a7a;
  font-family: var(--heading-font);
  font-size: 24px;
  margin: 34px 0 35px 90px;
`;
