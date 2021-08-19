import styled from "styled-components";

interface ContainerProps {
  transition: string;
}

export const Container = styled.div<ContainerProps>`
  grid-area: GRAPHIC;
  right: 0;
  display: none;
  width: 20.5rem;
  overflow-y: auto;
  justify-self: end;
  overflow-x: hidden;
  position: absolute;
  height: calc(100vh - 4.375rem);
  display: ${(props) => props.transition};
  background-color: var(--menu-graphic-background);

  > svg {
    height: 1.6em;
    width: 1.6em;
  }

  ::-webkit-scrollbar-track {
    background-color: #44444411;
    border-radius: 10px;
  }
  ::-webkit-scrollbar {
    width: 0.375rem;
    background: var(--light-gray);
  }
  ::-webkit-scrollbar-thumb {
    background: #00000050;
    border-radius: 10px;
  }

  @media (min-width: 250px) and (max-width: 600px) {
    top: 2rem;
    right: 0;
    width: 60vw;
    height: calc(100vh - 2rem);
    position: absolute;
    z-index: 1;

    > svg {
      height: 1.2rem;
      width: 1.2rem;
    }
  }
`;

export const ContentMenu = styled.div``;
