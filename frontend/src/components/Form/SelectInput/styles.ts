import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  > .select-input {
    width: 21.875rem;
    height: 2.5rem;
    padding: 0 1rem;
    border-radius: 10px;
    border: 1px solid var(--light-gray);

    :focus {
      outline-style: none;
    }
  }

  > select > option,
  .select-input {
    color: var(--medium-gray);
  }

  @media (max-width: 361px) {
    > .select-input {
      width: 19.375rem;
    }
  }
`;
