import styled from "styled-components";

export const Container = styled.div`
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  top: 3.375rem;
  position: fixed !important;
  z-index: 20 !important;
  background-color: var(--menu-graphic-background);
`;

export const ContentContainer = styled.div`
  left: 0;
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: #f3f3f380;
`;

export const Content = styled.ul`
  margin: 0;
  padding: 2rem 0 0 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  > li {
    height: 1.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 1.6rem 0 1.6rem 0;
    box-shadow: 0 0.188rem 0.475rem #00000026;
    width: 98%;
    border-radius: 10px;
  }

  > li > .link-a {
    height: 1.875rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  > li > a > .name-link {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 600;
    color: var(--dark-gray);
  }
`;

export const FooterMenu = styled.div`
  display: flex;
  height: 4.375rem;
  align-items: center;
  justify-content: center;

  > .footer-menu { 
    bottom: 1.76rem;
    position: fixed;
  }
`;