import styled from "styled-components";

export const Container = styled.div`
  grid-area: MENU;
  background-color: var(--sidebar-main-background);
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
  }

  > li > a > div {
    svg {
      width: 2.25rem;
      height: 2.25rem;
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
      }
    }
  }

  > li > a:focus {
    div {
      transition: 0.5s;
      transform: scale(1.3, 1.3);
    }
  }

  > li:active,
  a:active {
  }

  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;
