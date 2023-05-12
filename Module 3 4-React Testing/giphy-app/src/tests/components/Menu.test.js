import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useUserContext } from '../../context/UserContext';
import { useSearchContext } from '../../context/SearchContext';
import { useFavoritesContext } from '../../context/FavoritesContext';
import Menu from '../../components/Menu';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../context/UserContext', () => ({
    useUserContext: jest.fn(),
}));
jest.mock('../../context/SearchContext', () => ({
    useSearchContext: jest.fn(),
}));
jest.mock('../../context/FavoritesContext', () => ({
    useFavoritesContext: jest.fn(),
}));

describe('Menu', () => {
    beforeEach(() => {
        useUserContext.mockReturnValue({
            user: 'username',
            setUser: jest.fn(),
            clearUser: jest.fn(),
        });
        useSearchContext.mockReturnValue({
            searchResults: [],
            setSearchResults: jest.fn(),
            clearSearchResults: jest.fn(),
        });
        useFavoritesContext.mockReturnValue({
            favorites: [],
            addFavorite: jest.fn(),
            removeFavorite: jest.fn(),
            clearFavorites: jest.fn(),
        });
    });

    //! See if the menu displays correctly if there is no user
    it('should display login button if there is no user', () => {
        useUserContext.mockReturnValue({
            user: null,
            setUser: jest.fn(),
            clearUser: jest.fn(),
        });
        const { getByTestId } = render(
        <BrowserRouter>
            <Menu />
        </BrowserRouter>
        );
        const loginLink =getByTestId('login');
        expect(loginLink).toBeInTheDocument();
    });

    //! See if the menu displays correctly if there is a user
    it('should display logout button if there is a user', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Menu />
            </BrowserRouter>
            );
        const logoutLink = getByText('Logout');
        expect(logoutLink).toBeInTheDocument();
    });

    //! If you have a logout button, make sure that triggers correct functions
    it('should log the user out when logout button is clicked', () => {
        const clearUserMock = jest.fn(() => {
            useUserContext.mockReturnValue({
                user: null,
                setUser: jest.fn(),
                clearUser: clearUserMock,
            });
        });

        useUserContext.mockReturnValue({
            user: 'username',
            setUser: jest.fn(),
            clearUser: clearUserMock,
        });

        const { getByText } = render(
            <BrowserRouter>
                <Menu />
            </BrowserRouter>
            );
        const logoutLink = getByText('Logout');
        fireEvent.click(logoutLink);
        expect(useUserContext().clearUser).toHaveBeenCalled();
        expect(useUserContext().user).toBeNull();
    });
})