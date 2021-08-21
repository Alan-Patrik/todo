import styled from "styled-components";

interface ContainerProps {
  transition: string;
}

export const Container = styled.div<ContainerProps>`
  right: 0;
  top: 4.375rem;
  display: none;
  width: 20.5rem;
  overflow-y: auto;
  justify-self: end;
  overflow-x: hidden;
  position: fixed;
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

  @media (min-width: 250px) and (max-width: 400px) {
    width: calc(100% - 8rem);
  }

  @media (min-width: 400px) and (max-width: 540px) {
    width: calc(100% - 12rem);
  }
`;

export const ContentMenu = styled.div``;
