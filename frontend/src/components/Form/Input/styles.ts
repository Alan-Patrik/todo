import styled from "styled-components";

export const Container = styled.div`
  > .input-text {
    width: 21.875rem;
    height: 2.5rem;
    padding-left: 1.25rem;
    margin: 0.313rem 0;
    border-radius: 10px;
    border: 1px solid var(--light-gray);

    :focus {
      outline-style: none;
    }

    ::placeholder {
      color: var(--medium-gray);
    }
  }

  > .input-textarea {
    margin: 0;
    height: 7.5rem;
    width: 21.875rem;
    margin: 0.625rem 0;
    padding: 0.625rem 1.25rem;
    border-radius: 10px;
    border: 1px solid var(--light-gray);

    :focus {
      outline-style: none;
    }

    ::placeholder {
      color: var(--medium-gray);
    }
  }

  @media (max-width: 361px) {
    > .input-text {
      width: 19.375rem;
    }

    > .input-textarea {
      width: 19.375rem;
    }
  }
`;
