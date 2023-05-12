import React from 'react';
import { Link } from 'react-router-dom';
import { UL } from '../styled/elements/UL';
import { useUserContext } from '../context/UserContext';
import { useFavoritesContext } from '../context/FavoritesContext';
import { useSearchContext } from '../context/SearchContext';

function Menu() {
    const { clearUser } = useUserContext();
    const { clearFavorites } = useFavoritesContext();
    const { clearSearchResults } = useSearchContext();

  return (
    <nav>
        <UL>
            <li>
            <Link to="/login" data-testid="login"
            onClick={() => {
            clearUser();
            clearFavorites();
            clearSearchResults();
            }
            }>Logout</Link>
            </li>
            <li>
                <Link to='/favorites'>Favorites</Link>
            </li>
            <li>
                <Link to='/search'>Search</Link>
            </li>
        </UL>   
    </nav>
  )
};

export default Menu;