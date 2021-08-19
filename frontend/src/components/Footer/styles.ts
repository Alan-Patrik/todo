import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 4.375rem;

  @media (min-width: 250px) and (max-width: 600px) {
    padding-top: 1.5rem;
    height: 3rem;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;

export const FooterContent = styled.footer`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: var(--dark-gray);
  margin-right: 4.375rem;
  font-family: var(--body-font);

  @media (min-width: 250px) and (max-width: 600px) {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: var(--dark-gray);
    margin-left: 2rem;
    font-family: var(--body-font);
  }

  @media (min-width: 600px) and (max-width: 900px) {
    margin: 0;
  }
`;
