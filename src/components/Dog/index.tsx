import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { DogContainer } from "./styles";

interface DogProps {
  search: string,
}

interface DogResponse {
  message: string;
  status: string;
}

interface DRFResponse {
  favourite: boolean;
}

export function Dog({search}: DogProps) {

  const[image, setImage] = useState('')
  const[loaded, setLoaded] = useState(false)
  const[favourite, setFavourite] = useState(false)

  useEffect(() => {
    async function loadImage() {
      api.get<DogResponse>(`https://dog.ceo/api/breed/${search}/images/random`).then((response) => {
        setImage(response.data.message)
      })
      .catch(() => (setImage(''), setFavourite(false)));
    };
    
    loadImage();
    setLoaded(false);

  }, [search]);

  useEffect(() => {
    async function checkFavourite() {
      api.get<DRFResponse>(`https://glacial-savannah-41879.herokuapp.com/api/favourites/check/${image}/`).then((response) => {
        setFavourite(response.data.favourite)
      })
    };

    if (image) {
      checkFavourite();
    }
    
  }, [image])


  function handleToggleFavourite() {
    if (favourite) {
      api.post(`https://glacial-savannah-41879.herokuapp.com/api/favourites/remove/${image}/`)
    } else {
      api.post(`https://glacial-savannah-41879.herokuapp.com/api/favourites/create/${image}/`)
    }
    setFavourite(!favourite)
  }

  return (
    <DogContainer>
      <img style={loaded ? {} : { display: 'none' }} src={image} alt='dog' onLoad={() => setLoaded(true)}/>
  
      {loaded ? <button type="button" onClick={() => handleToggleFavourite()}>
        <span>{favourite ? 'UNLIKE' : 'LIKE'}</span>
      </button> : null}
    </DogContainer>
  );
}