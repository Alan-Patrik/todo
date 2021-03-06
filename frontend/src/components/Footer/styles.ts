import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 4.375rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const FooterContent = styled.div`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: var(--dark-gray);
  font-family: var(--body-font);
`;
