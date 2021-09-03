import styled from "styled-components";

export const Container = styled.div`
  grid-area: HEADER;
  background-color: var(--main-header);
  box-shadow: 0 0.188rem 0.375rem #00000026;

  @media (max-width: 767px) {
    background-color: var(--menu-graphic-background);
  }
`;

export const Content = styled.div`
  display: flex;
  height: 4.375rem;
  align-items: center;

  @media (max-width: 767px) {
    display: flex;
    height: 3.375rem;
    align-items: center;

    > .menu-hamburguer {
      left: 1.2rem;
      position: fixed;
    }

    > .title-header {
      display: block;
    }
  }

  @media (min-width: 768px) {
    > .menu-hamburguer {
      display: none;
    }

    > .title-header {
      display: none;
    }
  }
`;

export const Image = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  margin: 0 0.375rem 0 5.625rem;

  @media (max-width: 639px) {
    width: 1.3rem;
    height: 1.3rem;
    margin-left: 4rem;
  }

  @media (min-width: 640px) and (max-width: 767px) {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 5.625rem;
  }
`;

export const Title = styled.h4`
  color: #7a7a7a;
  font-size: 1.375rem;
  margin: 0;
  font-family: var(--heading-font);
  padding: 0;
  text-align: center;

  @media (max-width: 767px) {
    display: none;
  }
`;
