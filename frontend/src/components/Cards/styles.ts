import styled from "styled-components";

interface ContainerProps {
  backgroundColor1?: string;
  backgroundColor2?: string;
}

export const Container = styled.button<ContainerProps>`
  margin: 0;
  padding: 0;
  width: 12.5rem;
  height: 6.875rem;
  border-style: none;
  border-radius: 10px;
  background: linear-gradient(
    to top right,
    ${(props) => props.backgroundColor1},
    ${(props) => props.backgroundColor2}
  );
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  padding: 0.625rem;
  flex-direction: column;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  margin-left: 9.375rem;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 16px;
  margin-left: 3.75rem;
  text-align: right;
  color: var(--main-black);
  text-transform: uppercase;
  font-family: var(--body-font);
`;

export const ResultNumber = styled.span`
  font-size: 30px;
  margin-top: 1.3rem;
  font-weight: bold;
  color: var(--main-black);
  font-family: var(--body-font);
`;
