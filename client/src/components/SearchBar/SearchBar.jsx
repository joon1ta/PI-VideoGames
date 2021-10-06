import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchGames } from '../../actions/ActionIndex';
import{ Search} from '@material-ui/icons'
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
           
            <button>
            <Search />
            </button>
            
                
            </form>
        
    )
}

export default SearchBar
