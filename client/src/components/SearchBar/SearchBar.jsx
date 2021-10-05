import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchGames } from '../../actions/ActionIndex';

const SearchBar = () => {

const [input, setInput] = useState('');
const dispatch = useDispatch();

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchGames(input))
    setInput('');

}
const handleChange = (e) => {
    setInput(e.target.value);
}
    return (
        
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={input} type="text" placeholder="Search Game..."/>
           
            <input type ="submit" value= "Search"/>
            </form>
        
    )
}

export default SearchBar
