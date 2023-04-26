import Button from "../styled/elements/Button";

const GifDisplay = ({ url, title, gif_id, addFavorite, removeFavorite }) => {
    return (
        <div>
            <h4>
                {title}
            </h4>
            <img src={url} alt={title} title={title} />
            <Button onClick={() => addFavorite(gif_id)}>
                Add Favorite
            </Button>
            <Button onClick={() => removeFavorite(gif_id)}>
                Remove Favorite
            </Button>
        </div>
    )
}

export default GifDisplay;
