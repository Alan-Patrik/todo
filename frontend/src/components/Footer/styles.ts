import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 4.375rem;

  @media (min-width: 250px) and (max-width: 960px) {
    height: 3.375rem;
  }
`;

export const FooterContent = styled.footer`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: var(--dark-gray);
  font-family: var(--body-font);
`;
