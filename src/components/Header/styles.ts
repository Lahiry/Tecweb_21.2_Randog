import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;

  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #FFF;
    background: #FFA500;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  span {
  font-size: 3rem;
  font-weight: 600;
  color: #FFF;

  p {
    display: inline;
    color: #FFA500;
  }
}
`;