import React, { createContext, useCallback, useContext, useReducer } from 'react';
import {
    INITIAL_SEARCH_STATE,
    SET_SEARCH,
    CLEAR_SEARCH,
    searchReducer
} from '../reducers/searchReducer';

const SearchContext = createContext(null);

export const useSearchContext = () => {
    return useContext(SearchContext);
}

export const SearchProvider = (props) => {
    const [search, dispatch] = useReducer(searchReducer, INITIAL_SEARCH_STATE);

    const setSearch = useCallback(
        (search) => dispatch({ type: SET_SEARCH, payload: search }),
        [dispatch]
    );

    const clearSearch = useCallback(() => {
        dispatch({ type: CLEAR_SEARCH })
    }, [dispatch]);

    return(
        <SearchContext.Provider value={{ search, setSearch, clearSearch }}>
            {props.children}
        </SearchContext.Provider>
    )
}