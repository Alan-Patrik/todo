import styled from "styled-components";

interface Props {
  background?: string | undefined;
}

export const Container = styled.div<Props>`
  height: 100%;
  overflow-y: auto;

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

  @media (max-width: 767px) {
    display: ${(props) => props.background};
  }
`;

export const ContentBody = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 587px) {
    display: block;
  }
`;

export const Content = styled.div`
  align-items: center;
  gap: 6.25rem;

  @media (max-width: 939px) {
    gap: 1.875rem;
    flex-wrap: wrap;
    align-items: center;
  }
`;

export const ContainerCalendar = styled.div`
  > .title-tasks {
    text-decoration: underline;
  }
`;

export const ContentCard = styled.div`
  gap: 1.875rem;
  width: 25rem;
  height: 17.5rem;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 6.25rem;
  align-items: center;
  flex-direction: column;

  overflow-y: auto;

  ::-webkit-scrollbar-track {
    background-color: #d1d1d1;
    border-radius: 10px;
  }
  ::-webkit-scrollbar {
    width: 0.375rem;
    border-radius: 10px;
    background: #c4c7c9;
  }
  ::-webkit-scrollbar-thumb {
    background: #00000050;
    border-radius: 10px;
  }

  @media (max-width: 720px) {
    margin-top: 0;
  }
`;
