import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import { useContext } from 'react';
import FavoritesContext from '../FavoritesContext';
import logo from '../../public/foglia.png';

function Navbar() {
    const { favorite } = useContext(FavoritesContext);

    return (
        <div className='navbar'>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <div className='logo-container'>
                    <img src={logo} alt="logo" className='logo'/>
                    <h3>just<span>vegetables</span></h3>
                </div>
            </Link>
            <Searchbar />
            <Link to={'/favorites/'} style={{ textDecoration: 'none' }}>
                <h4 className='favor'>Favorites: <span>{favorite.length}</span></h4>
            </Link>
        </div>
    )
} 

export default Navbar;