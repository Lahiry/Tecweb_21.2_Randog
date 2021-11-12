import styled from 'styled-components';

export const Container = styled.form`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    padding-top: 1rem;
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  input {
    width: 60%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    box-sizing: border-box;

    border: 1px solid #D7D7D7;
    background: #E7E9EE;

    font-weight: 400;
    font-size: 1rem;

    margin-bottom: 1rem;

    &::placeholder {
      color: var(--text-body);
    }
  }
`;