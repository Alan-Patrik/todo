import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00000040;
    height: calc(100% - 4.375rem);
    width: calc(100% - 4.375rem);
    position: absolute;
    top: 4.375rem;
    left: 4.375rem;
  }
`;

export const ContentBody = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background-color: white;

  > .icon-modal-span {
    display: none;
  }

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

  @media (min-width: 768px) {
    height: 60%;
    width: 70%;
    overflow-y: auto;
    border-radius: 10px;
    padding: 0 2rem;

    > .icon-modal-span {
      display: flex;
      justify-content: flex-end;

      .icon-modal {
        width: 1.625rem;
        height: 1.625rem;
        position: fixed;
        margin-top: 1.25rem;
        color: var(--dark-gray);
      }
    }
  }

  @media (min-width: 1601px) {
    overflow-y: hidden;
  }
`;

export const Content = styled.div`
  /* --Mobile-- */
  @media (max-width: 767px) {
    gap: 1.875rem;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column-reverse;
  }

  /* --Web-- */
  @media (min-width: 768px) and (max-width: 1218px) {
    gap: 1.875rem;
    flex-wrap: wrap;
    margin-top: 2rem;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
  }

  @media (min-width: 1219px) {
    gap: 6.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 2rem 0;
  width: 21.875rem;
  /* height: 2.5rem; */

  @media (max-width: 361px) {
    width: 19.375rem;
  }
`;

export const ButtonUpdate = styled.button`
  width: 100%;
  height: 2.5rem;
  border: 1px solid var(--light-gray);
  border-radius: 10px;
  background-color: var(--main-button);

  :hover,
  :active,
  :focus {
    background-color: var(--main-hover-button);
    transition: 1s;
  }

  > .btn-title-update {
    font-family: var(--body-font);
    font-size: 18px;
    text-align: center;
    color: var(--main-background);
  }
`;

export const ButtonCancel = styled.button`
  border: none;
  height: 2.5rem;
  margin-top: 2rem;

  > .btn-title-cancel {
    font-family: var(--body-font);
    font-size: 18px;
    text-align: center;
    color: var(--dark-gray);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ContainerInputs = styled.div`
  .title-edit-task {
    padding-left: 1.25rem;
    text-decoration: underline;
  }

  /* --Web-- */
  @media (max-width: 767px) {
    > .title-edit-task {
      font-size: 18px;
    }
  }
  @media (min-width: 768px) {
    .title-edit-task {
      font-size: 24px;
    }
  }
`;

export const ContainerCalendar = styled.div``;
