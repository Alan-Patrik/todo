import styled from "styled-components";

export const Container = styled.div`
  grid-area: MENU;
  background-color: var(--sidebar-main-background);

  @media (min-width: 250px) and (max-width: 600px) {
    width: 2rem;
  }
`;

export const MenuContainer = styled.ul`
  padding: 0;
  list-style: none;
  margin-top: 5rem;

  > li {
    display: flex;
    height: 3.75rem;
    align-items: center;
    justify-content: center;

    @media (min-width: 250px) and (max-width: 600px) {
      display: flex;
      height: 2.25rem;
      align-items: center;
      justify-content: center;
    }
  }

  > li > a > div {
    svg {
      width: 2.25rem;
      height: 2.25rem;

      @media (min-width: 250px) and (max-width: 600px) {
        width: 1.125rem;
        height: 1.125rem;
      }
    }
  }

  > li:hover {
    cursor: pointer;
    transition: 0.5s;
    background-color: var(--sidebar-hover-background);

    a {
      div {
        transition: 0.5s;
        transform: scale(1.3, 1.3);

        @media (min-width: 250px) and (max-width: 600px) {
          transition: none;
          transform: none;
        }
      }
    }

    @media (min-width: 250px) and (max-width: 600px) {
      cursor: default;
      transition: none;
      background-color: unset;
    }
  }

  > li > a:focus {
    div {
      transition: 0.5s;
      transform: scale(1.3, 1.3);

      @media (min-width: 250px) and (max-width: 600px) {
        transition: none;
        transform: none;
      }
    }
  }

  > li:active,
  a:active {
  }
`;
