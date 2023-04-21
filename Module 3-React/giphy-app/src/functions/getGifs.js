import axios from 'axios';

const baseURL = `https://api.giphy.com/v1/gifs/search?api_key=HOEmxC9GPG6YX1F1XrDyqfZQSD6ig89s`;

export default async function getGifs(searchString) {
    const response = await axios.get(baseURL + searchString); //will hold response from axios

    const gifs = response.data.data;

    return gifs.map((val) => ({
        gif_id: val.id,
        title: val.title //pieces of data from giphy
    }))
}