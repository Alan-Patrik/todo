import styled from "styled-components";

export const Container = styled.div`
  .selected-month {
    font-size: 22px;
    font-weight: 500;
    color: var(--dark-gray);
    font-family: var(--heading-font);
    padding: 0;
    margin: 1rem 0;
  }

  .div-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > .div-title > .div-icon > .span-icon {
    svg {
      width: 1.3rem;
      height: 1.3rem;
      color: var(--dark-gray);
    }
  }

  .table {
    margin: 0 auto 20px;
  }

  > table > thead > tr {
    font-weight: bold;
    color: var(--main-black);
    font-family: var(--body-font);
  }

  > table > tbody > tr {
    text-align: center;
    color: var(--dark-gray);
    font-family: var(--body-font);
  }

  .today {
    background-color: #2c99ff;
    color: #fff;
  }

  .day {
    :hover,
    :focus,
    :active {
      background-color: #2c99ff;
      color: #fff;
    }
  }

  .in-prev-month,
  .in-next-month {
    color: var(--light-gray);
  }

  @media (max-width: 768px) {
    .selected-month {
      font-size: 18px;
    }
  }
`;
