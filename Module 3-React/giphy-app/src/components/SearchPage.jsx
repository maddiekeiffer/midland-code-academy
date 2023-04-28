import { React, useState } from 'react';
import Button from '../styled/elements/Button';
import Input from '../styled/elements/Input';
import { Select, Option} from '../styled/elements/Select';
import getGifs from '../functions/getGifs';
import { useQuery } from 'react-query';
import { useFavoritesContext } from '../context/FavoritesContext';
import  GifDisplay  from '../components/GifDisplay';


function SearchPage() {

    const [url, setUrl] = useState(null);
    
    const [search, setSearch] = useState('');
    const [rating, setRating] = useState('g');
    const [lang, setLang] = useState('en');

    const { favorites, addFavorite, removeFavorite } = useFavoritesContext();

    const BuildURL = () => {
        let base = `&q=${search}&rating=${rating}&lang=${lang}`;
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
            <Input type="text" value={search} onChange={(e) => setSearch(e.target.value)}></Input>
        </label>
        <label htmlFor="rating">Rating:
            <Select name="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                <Option value="g">G</Option>
                <Option value="pg">PG</Option>
                <Option value="pg-13">PG-13</Option>
                <Option value="r">R</Option>
            </Select>
        </label>
        <label htmlFor="lang">Lang:
            <Select name="lang" value={lang} onChange={(e) => setLang(e.target.value)}>
                <Option value="en">English</Option>
                <Option value="es">Espa&ntilde;ol</Option>
                <Option value="fr">French</Option>
            </Select>
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