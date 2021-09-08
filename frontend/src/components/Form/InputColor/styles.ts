import styled from "styled-components";

interface Props {
  background?: string | undefined;
}

export const Container = styled.div``;

export const Content = styled.div`
  .p-color {
    margin: 1.25rem 1.25rem;
    font-size: 18px;
    color: var(--dark-gray);
    font-weight: bold;
    font-family: var(--body-font);
  }
`;

export const ContainerColor = styled.div<Props>`
  width: 21.875rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .span-color {
    width: 1.563rem;
    height: 1.563rem;
    margin-bottom: 1.25rem;
    border-radius: 6px;

    &.color-one {
      background-color: var(--color-one);
    }

    &.color-one-secondary {
      background-color: #dd573250;
    }

    &.color-two {
      background-color: var(--color-two);
    }

    &.color-two-secondary {
      background-color: #a1a5a750;
    }

    &.color-three {
      background-color: var(--color-three);
    }

    &.color-three-secondary {
      background-color: #099ba050;
    }

    &.color-four {
      background-color: var(--color-four);
    }

    &.color-four-secondary {
      background-color: #f7b73350;
    }

    &.color-five {
      background-color: var(--color-five);
    }

    &.color-five-secondary {
      background-color: #b073d350;
    }

    &.color-six {
      background-color: var(--color-six);
    }

    &.color-six-secondary {
      background-color: #37b7e950;
    }

    &.color-seven {
      background-color: var(--color-seven);
    }

    &.color-seven-secondary {
      background-color: #4f7cac50;
    }

    &.color-eight {
      background-color: var(--color-eight);
    }

    &.color-eight-secondary {
      background-color: #d3c64f50;
    }
  }

  @media (max-width: 361px) {
    display: flex;
    flex-wrap: wrap;
    width: 19.375rem;
  }
`;
