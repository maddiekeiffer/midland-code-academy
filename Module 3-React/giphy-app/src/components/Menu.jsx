import React from 'react';
import { Link } from 'react-router-dom';
import { UL } from '../styled/elements/UL';

function Menu() {

  return (
    <nav>
        <UL>
            <li>
                <Link to='/login'>Login</Link>
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