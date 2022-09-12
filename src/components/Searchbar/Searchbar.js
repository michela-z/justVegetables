import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './Searchbar.css';

function Searchbar() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    };

    return (
        <div className='searchbar'>
            <form className='search-container' onSubmit={submitHandler}>
                <input  className='search' placeholder='Cerca' type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <FiSearch className='cerca'/>
            </form>
        </div>
    )
}

export default Searchbar