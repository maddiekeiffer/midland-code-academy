import axios from 'axios';

const baseURL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;

export default async function getGifs(searchString) {
    const response = await axios.get(baseURL + searchString); //will hold response from axios

    const gifs = response.data.data;
    //console.log(gifs);
    return gifs.map((val) => ({
        gif_id: val.id,
        title: val.title //pieces of data from giphy
    }))
}