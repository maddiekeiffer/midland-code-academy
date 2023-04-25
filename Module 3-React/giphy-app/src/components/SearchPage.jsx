import { React, useState, useEffect } from 'react';
import Button from '../styled/elements/Button';
import getGifs from '../functions/getGifs';


function SearchPage() {

    const [url, setUrl] = useState(null);
    
    const [search, setSearch] = useState('');
    const [limit, setLimit] = useState('');
    const [offset, setOffset] = useState('');
    const [rating, setRating] = useState('g');
    const [lang, setLang] = useState('en');

    const BuildURL = () => {
        let base = `&q=${search}&rating=${rating}&lang=${lang}`;

        if(limit !== "") {
            base = base + `&limit=${limit}`;
        } else if(offset !== "") {
            base = base + `&offset=${offset}`;
        } else if(offset !== "" && limit !== "") {
            base = base + `&limit=${limit}&offset=${offset}`;
        }
        return base;
    }

    useEffect(() => {
        const fetchGifs = async () =>  {
          if (url) {
            const gifs = await getGifs(url);
            console.log(gifs);
          }
        }
        fetchGifs();
      }, [url]);

  return (
    <div>
        <label>Search:
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
        </label>
        <label>Limit search:
            <input type="text" value={limit} 
            onChange={(e) => setLimit(e.target.value)}></input>
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
    </div>
  );
}

export default SearchPage;