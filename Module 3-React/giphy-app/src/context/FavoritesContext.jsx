import React, { createContext, useCallback, useContext, useReducer } from 'react';
import {
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    CLEAR_FAVORITES,
    INITIAL_FAVORITE_STATE,
    favoritesReducer
} from '../reducers/favoritesReducer';

const FavoritesContext = createContext(null);

export const useFavoritesContext = () => {
    return useContext(FavoritesContext);
}

export const FavoritesProvider = (props) => {
    const [favorite, dispatch] = useReducer(favoritesReducer, INITIAL_FAVORITE_STATE);

    const addFavorite = useCallback(
        (fav) => dispatch({ type: ADD_FAVORITE, payload: fav }),
        [dispatch]
    );

    const removeFavorite = useCallback(
        (gif_id) => {
          dispatch({ type: REMOVE_FAVORITE, payload: gif_id });
        },
        [dispatch]
      );

    const clearFavorites = useCallback(() => {
        dispatch({ type: CLEAR_FAVORITES })
    }, [dispatch]);

    return(
        <FavoritesContext.Provider value={{ favorite, addFavorite, removeFavorite, clearFavorites }}>
            {props.children}
        </FavoritesContext.Provider>
    )
}