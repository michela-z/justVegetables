import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
//import { useContext } from 'react';
//import FavoritesContext from '../FavoritesContext';


function Navbar() {
    //const { items } = useContext(FavoritesContext);

    return (
        <div className='navbar'>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <div className='logo-container'>
                    <img src="/foglia.png" alt="logo" className='logo'/>
                    <h3>just<span>vegetables</span></h3>
                </div>
            </Link>
            <Searchbar />
            <Link to={'/favorites/'} style={{ textDecoration: 'none' }}>
                <h4 className='favor'>Favorites:</h4>
            </Link>
        </div>
    )
}

export default Navbar