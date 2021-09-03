import styled from "styled-components";

export const Container = styled.div`
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
  gap: 100px;

  @media (max-width: 939px) {
    gap: 30px;
    flex-wrap: wrap;
    margin-top: 2rem;
    align-items: center;
  }
`;

export const ContainerCalendar = styled.div`
  > .title-tasks {
    text-decoration: underline;
  }
`;

export const ContentCard = styled.div`
  gap: 30px;
  width: 420px;
  height: 280px;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 100px;
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

  @media (max-width: 816px) {
    margin-top: 0;
  }
`;
