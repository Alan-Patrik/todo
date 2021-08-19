import styled from "styled-components";

export const Container = styled.div`
  margin-top: 0;
  padding: 0 0.625rem 0.938rem 0.625rem;
`;

export const Content = styled.div`
  > li {
    margin: 0.625rem 0;
    padding: 0.625rem 0.625rem;
    list-style: none;
    border-radius: 10px;
    background-color: #f3f3f380;

    > h1 {
      padding: 0;
      margin: 0;
      font-size: 18px;
      color: var(--dark-gray);
    }

    > p {
      margin: 0;
      padding: 0;
      font-size: 14px;
      color: var(--dark-gray);
    }
  }

  #animation:hover {
    width: 17.375rem;
    animation: animation 0.3s;
    animation-iteration-count: 1;

    > h1,
    p {
      color: #000000;
      transition: 0.8s;
    }
  }

  @keyframes animation {
    0% {
      margin-left: 0;
    }
    25% {
      margin-left: 0.438rem;
    }
    50% {
      margin-left: 0;
    }
    75% {
      margin-left: -0.438rem;
    }
    100% {
      margin-left: 0;
    }
    0% {
      margin-left: 0;
    }
  }

  @media (min-width: 250px) and (max-width: 600px) {
    > li > h1 {
      font-size: 17px;
    }

    #animation:hover {
      animation: none;
      width: auto;
    }
  }
`;
