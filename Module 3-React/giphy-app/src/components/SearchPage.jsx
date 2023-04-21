import { React, useState } from 'react';


function SearchPage() {
    
    const [search, setSearch] = useState('');
    const [limit, setLimit] = useState('');
    const [offset, setOffset] = useState('');
    const [rating, setRating] = useState('g');
    const [lang, setLang] = useState('en');

    const BuildURL = () => {
        let base = `https://api.giphy.com/v1/gifs/search?api_key=HOEmxC9GPG6YX1F1XrDyqfZQSD6ig89s&q=${search.value}&rating=${rating.value}&lang=${lang.value}`;

        if(limit.value !== "") {
            base = base + `&limit=${limit.value}`;
        } else if(offset.value !== "") {
            base = base + `&offset=${offset.value}`;
        } else if(offset.value !== "" && limit.value !== "") {
            base = base + `&limit=${limit.value}&offset=${offset.value}`;
        }
        return base;
    }

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
        <label for="rating">Rating:
            <select name="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value="g">G</option>
                <option value="pg">PG</option>
                <option value="pg-13">PG-13</option>
                <option value="r">R</option>
            </select>
        </label>
        <label for="lang">Lang:
            <select name="lang" value={lang} onChange={(e) => setLang(e.target.value)}>
                <option value="en">English</option>
                <option value="es">Espa&ntilde;ol</option>
                <option value="fr">French</option>
            </select>
        </label>
        <button type="submit" onClick={BuildURL}>Search</button>
    </div>
  );
}

export default SearchPage;