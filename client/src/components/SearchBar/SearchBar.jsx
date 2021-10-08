import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchGames } from '../../actions/ActionIndex';
import{ Search} from '@material-ui/icons'
import styles from './SearchBar.module.css'
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
            <input className={styles.inputSearch} onChange={handleChange} value={input} type="text" placeholder="Search Game..."/>
           
            <button>
            <Search />
            </button>
            
                
            </form>
        
    )
}

export default SearchBar
