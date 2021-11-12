import styled from 'styled-components';
import { darken } from 'polished';

export const DogContainer = styled.div`

  display: flex;
  flex-direction: column;

  img {
    max-width: 500px;
  }

  button {
    background: #FFA500;
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    display: flex;
    align-items: center;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.06, '#FFA500')};
    }

    span {
      flex: 1;
      font-size: 21px;
      margin: 10px 0 10px;
      text-align: center;
      font-weight: bold;
    }
  }
`;