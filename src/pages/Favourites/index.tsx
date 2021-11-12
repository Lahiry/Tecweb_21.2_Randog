import { useState, useEffect } from 'react';

import { DogList } from './styles';
import { api } from '../../services/api';

interface FavouriteDog {
  id: number;
  link: string;
}

const Favourites = (): JSX.Element => {
  const [dogs, setDogs] = useState<FavouriteDog[]>([]);

  useEffect(() => {

    loadDogs();

  }, []);

  async function loadDogs() {
    const response = await api.get<FavouriteDog[]>('https://glacial-savannah-41879.herokuapp.com/api/favourites/');

    const data = response.data.map(dog => ({
        ...dog,
        link: dog.link
    }))

    setDogs(data);      
  }

  function handleRemoveFavourite(link: string) {
    api.post(`https://glacial-savannah-41879.herokuapp.com/api/favourites/remove/${link}/`).then(() => {
      loadDogs();
    })
  }

  return (
    <DogList>
      {dogs.map(dog => (
        <li key={dog.id}>
          <img src={dog.link} alt='dog' />
          <button
            type="button"
            onClick={() => handleRemoveFavourite(dog.link)}
          >
            <span>UNLIKE</span>
          </button>
        </li>
      ))}
    </DogList>
  );
};

export default Favourites;
