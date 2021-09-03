import styled from "styled-components";

interface ContainerProps {
  backgroundColor?: string;
}

export const Container = styled.div<ContainerProps>`
  margin: 0;
  padding: 0.625rem 0.625rem;
  width: 330px;
  height: 130px;
  border-style: none;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;

  @media (max-width: 640px) {
    width: 300px;
    height: 130px;
    cursor: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  > .content-card {
    margin: 0;
    padding: 0;
    border-radius: 10px;

    > h1 {
      padding: 0;
      margin: 0;
      font-size: 20px;
      color: var(--main-black);
    }

    > p {
      margin: 0;
      padding: 0;
      font-size: 16px;
      color: var(--main-black);
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  margin-right: 10px;
  justify-content: flex-end;

  > .span-icon {
    width: 60px;
    display: flex;
    justify-content: space-between;
  }
`;
