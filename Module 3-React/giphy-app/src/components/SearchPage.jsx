import { React, useState } from 'react';
import Button from '../styled/elements/Button';
import getGifs from '../functions/getGifs';
import { useQuery } from 'react-query';
//import { useSearchContext } from '../context/SearchContext';
import { useFavoritesContext } from '../context/FavoritesContext';
import  GifDisplay  from '../components/GifDisplay';


function SearchPage() {

    const [url, setUrl] = useState(null);
    
    const [search, setSearch] = useState('');
    const [offset, setOffset] = useState('');
    const [rating, setRating] = useState('g');
    const [lang, setLang] = useState('en');

    const { favorites, addFavorite, removeFavorite } = useFavoritesContext();

    const BuildURL = () => {
        let base = `&q=${search}&rating=${rating}&lang=${lang}`;
        if(offset !== "") {
            base = base + `&offset=${offset}`;
        }
        return base;
    }


    const { isLoading, error, isSuccess, data: searchResults } = useQuery(
        ["getGifs", url],
        () => getGifs(url),
        {
          enabled: !!url,
          onSuccess: (data) => {
            console.log("Received data:", data);
          },
        }
      );

  return (
    <div>
        <h2>Search for gifs:</h2>
        <label>Search:
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
        </label>
        <label>Offset:
        <input type="text" value={offset} 
            onChange={(e) => setOffset(e.target.value)}></input>
        </label>
        <label htmlFor="rating">Rating:
            <select name="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value="g">G</option>
                <option value="pg">PG</option>
                <option value="pg-13">PG-13</option>
                <option value="r">R</option>
            </select>
        </label>
        <label htmlFor="lang">Lang:
            <select name="lang" value={lang} onChange={(e) => setLang(e.target.value)}>
                <option value="en">English</option>
                <option value="es">Espa&ntilde;ol</option>
                <option value="fr">French</option>
            </select>
        </label>
        <Button type="submit" onClick={() => setUrl(BuildURL())}>Search</Button>
        {isLoading && <p>Loading. . .</p>}
        {error && <p>An error has occured: {error.message} </p>}
        {isSuccess && (
            searchResults.map((val) => (
                <GifDisplay
                    key={val.gif_id}
                    {...val}
                    addFavorite={() => addFavorite({gif_id: val.gif_id, url: val.url, title: val.title})}
                    removeFavorite={removeFavorite}
                    isFavorite={favorites.some((fav) => fav.gif_id === val.gif_id)}
                />
            ))
        )}



    </div>
  );
}

export default SearchPage;