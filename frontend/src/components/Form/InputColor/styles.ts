import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  .p-color {
    margin: 20px 20px;
    font-size: 18px;
    color: var(--dark-gray);
    font-weight: bold;
    font-family: var(--body-font);
  }
`;

export const ContainerColor = styled.div`
  width: 21.875rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .span-color {
    width: 25px;
    height: 25px;
    margin-bottom: 20px;
    border-radius: 6px;

    &.color-one {
      background-color: var(--color-one);
    }

    &.color-two {
      background-color: var(--color-two);
    }

    &.color-three {
      background-color: var(--color-three);
    }

    &.color-four {
      background-color: var(--color-four);
    }

    &.color-five {
      background-color: var(--color-five);
    }

    &.color-six {
      background-color: var(--color-six);
    }

    &.color-seven {
      background-color: var(--color-seven);
    }

    &.color-eight {
      background-color: var(--color-eight);
    }
  }

  @media (max-width: 361px) {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
  }
`;
