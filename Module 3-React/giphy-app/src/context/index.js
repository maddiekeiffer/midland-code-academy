import { FavoritesProvider } from './FavoritesContext';
import { UserProvider } from './UserContext';
import { SearchProvider } from './SearchContext';

function StateProvider(props) {
    return(
        <UserProvider>
            <FavoritesProvider>
                <SearchProvider>
                    {props.children}
                </SearchProvider>
            </FavoritesProvider>
        </UserProvider>
    )
}

export default StateProvider;