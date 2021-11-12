import styled from 'styled-components';
import { darken } from 'polished';

export const DogList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    margin-top: 2rem; 

    img {
      align-self: center;
      height: 350px;
      max-width: 500px;
    }

    button {
    background: #FFA500;
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 0.5rem;
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
  }
`;
