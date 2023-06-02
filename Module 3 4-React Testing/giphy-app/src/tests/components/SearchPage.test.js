/*import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useQuery } from 'react-query';
import { useSearchContext } from '../../context/SearchContext';
import { useFavoritesContext } from '../../context/FavoritesContext';
import SearchPage from '../../components/SearchPage';

//!Make sure URL is being set
 
jest.mock('../../context/SearchContext', () => ({
    useSearchContext: jest.fn(),
}));

jest.mock('../../context/FavoritesContext', () => ({
    useFavoritesContext: jest.fn(),
}));

jest.mock('react-query', () => ({
    ...jest.requireActual('react-query'),
    useQuery: jest.fn(),
}))

describe('Search Page', () => {
    it('should send correct url when search button is clicked', () => {
        const setSearchResults = jest.fn();
        const addFavorite = jest.fn();
        const removeFavorite = jest.fn();

        useSearchContext.mockReturnValue({
            searchResults: [],
            setSearchResults,
        });

        useFavoritesContext.mockReturnValue({
            favorites: [],
            addFavorite,
            removeFavorite,
        });

        useQuery.mockReturnValue({
            isLoading: false,
            error: null,
            isSuccess: true,
            data: [
                {
                    gif_id: '123',
                    title: 'funny dog',
                    url: 'https://giphy.com/gifs/funny-dog',
                },
            ],
        });

        const { getByTestId } = render(
            <SearchPage />
        );

        const searchButton = getByTestId('search-button');
        const searchText = getByTestId('search-text');

        fireEvent.change(searchText, { target: { value:
        'funny dog' } } );

        //Mock the useState hook to capture the url
        const useStateSpy = jest.spyOn(React, 'useState');

        const setUrl = jest.fn();

        //When useState is called, it returns an array where
        //the first element is the initial value and the
        //second is the setUrl mock function
        useStateSpy.mockImplementation(() => [
            "", // initial state value
            setUrl // mocked setState function
        ]);

        fireEvent.click(searchButton);

        expect(setUrl).toHaveBeenCalledWith('&q=funny dog&rating=g&lang=en');
    });

});*/