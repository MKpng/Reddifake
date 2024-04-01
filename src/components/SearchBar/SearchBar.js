import './SearchBar.css';
import { useState } from 'react';

export function SearchBar() {
    const [term, setTerm] = useState('');
    const handleSearchTerm = (e) => {
        e.prevent.default();
        setTerm('')
    };

    return (
        <div className="SearchBar">
            <header className='header'>
                <button className='header-button'>
                    <i className="fab fa-reddit"></i>Reddi<span>Fake</span>
                </button>
                <input 
                    type='text'
                    className='bar'
                    placeholder=" What's on your mind?"    
                />
                <button className='lense'>
                    <i className="fas fa-search"></i>
                </button>
            </header>
        </div>
    );
};