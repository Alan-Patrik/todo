import styled from "styled-components";

export const Container = styled.div`
  grid-area: HEADER;
  background-color: var(--main-header);
  box-shadow: 0 0.188rem 0.375rem #00000026;
`;

export const Content = styled.div`
  display: flex;
  height: 4.375rem;
  align-items: center;

  @media (min-width: 250px) and (max-width: 565px) {
    > .title-header {
      display: block;
    }
  }

  @media (min-width: 565px) {
    > .title-header {
      display: none;
    }
  }
`;

export const Image = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  margin-left: 5.625rem;

  @media (max-width: 640px) {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 2rem;
  }
`;

export const Title = styled.h4`
  color: #7a7a7a;
  font-size: 1.375rem;
  margin: 0 0 0 0.625rem;
  font-family: var(--heading-font);
  padding: 0;

  @media (max-width: 565px) {
    display: none;
  }
`;
