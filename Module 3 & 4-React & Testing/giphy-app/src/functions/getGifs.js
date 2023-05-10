import axios from "axios";

const baseURL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=25`;

export default async function getGifs(searchString) {
    console.log(baseURL + searchString);
    const response = await axios.get(baseURL + searchString); //will hold response from axios
    const gifs = response.data.data;
    
    return gifs.map((val) => ({
        gif_id: val.id,
        title: val.title,
        url: val.images.original.url
    }))
}