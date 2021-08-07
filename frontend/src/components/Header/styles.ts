import styled from "styled-components";

export const Container = styled.div`
  grid-area: HEADER;
  background-color: var(--main-header);
  box-shadow: 0 0.188rem 0.375rem #00000026;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  height: 5rem;
`;

export const Image = styled.img`
  height: 1.875rem;
  width: 1.875rem;
  margin-left: 5.625rem;
`;

export const Title = styled.h4`
  color: #7a7a7a;
  font-family: var(--heading-font);
  font-size: 1.5rem;
  margin-left: 0.625rem;
`;
