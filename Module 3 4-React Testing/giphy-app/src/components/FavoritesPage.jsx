import React from 'react';
import GifDisplay from './GifDisplay';
import { useFavoritesContext } from '../context/FavoritesContext';


function FavoritesPage() {

  const {favorites, removeFavorite} = useFavoritesContext();

  return (
    <div>
      <h2>Favorites:</h2>
      {favorites.map((value) => {
        return(
            <GifDisplay
            key={value.gif_id}
            url={value.url}
            gif_id={value.gif_id}
            isFavorite={true}
            removeFavorite={removeFavorite}
          />
        );
      })}
    </div>
  );
};

export default FavoritesPage;