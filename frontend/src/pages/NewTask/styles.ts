import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
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
    flex-direction: column-reverse;
  }
`;

export const ContainerButton = styled.div`
  width: 21.875rem;
  height: 2.5rem;
  margin-top: 2rem;

  @media (max-width: 361px) {
    width: 19.375rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  border: 1px solid var(--light-gray);
  border-radius: 10px;
  background-color: var(--main-button);

  :hover,
  :active,
  :focus {
    background-color: var(--main-hover-button);
    transition: 1s;
  }

  > .btn-title {
    font-family: var(--body-font);
    font-size: 18px;
    text-align: center;
    color: var(--main-background);
  }
`;

export const ContainerInputs = styled.div`
  .title-newtask {
    text-decoration: underline;
  }

  @media (max-width: 939px) {
    > .title-newtask {
      display: none;
    }
  }
`;

export const ContainerCalendar = styled.div`
  @media (max-width: 939px) {
    > .title-newtask {
      text-decoration: underline;
    }
  }

  @media (min-width: 940px) {
    > .title-newtask {
      display: none;
    }
  }
`;
