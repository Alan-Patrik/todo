import styled from "styled-components";

export const Container = styled.div`
  grid-area: HEADER;
  background-color: var(--main-header);
  box-shadow: 0 0.188rem 0.375rem #00000026;

  @media (min-width: 250px) and (max-width: 600px) {
    height: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  height: 4.375rem;
  align-items: center;

  @media (min-width: 250px) and (max-width: 600px) {
    display: flex;
    height: 2rem;
    align-items: center;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    margin: 0;
  }
`;

export const Image = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  margin-left: 5.625rem;

  @media (min-width: 250px) and (max-width: 600px) {
    width: 1rem;
    height: 1rem;
    margin-left: 2rem;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    margin-left: 2.5rem;
  }
`;

export const Title = styled.h4`
  color: #7a7a7a;
  font-size: 1.375rem;
  margin-left: 0.625rem;
  font-family: var(--heading-font);

  @media (min-width: 250px) and (max-width: 600px) {
    font-size: 16px;
  }
`;
