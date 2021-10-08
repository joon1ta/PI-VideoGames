import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { genreFilter, getGames,  getGenres } from '../../actions/ActionIndex'
import styles from './Filters.module.css'
function Filters() {

const dispatch = useDispatch();
const genres = useSelector(state => state.genres)
const handleReload = () => {
    dispatch(getGames());
}


useEffect(() => {
    dispatch(getGenres())
},[dispatch])

    return (
        <div>
            <h4 className={styles.h4Filter}>Filter by</h4>
            <div className={styles.containerButtons}>
                {
                    genres.map(g => { return ( <button className={styles.buttonsFilters} onClick= {(e) => dispatch(genreFilter(e.target.value)) } value={g.name}>{g.name.toUpperCase()}</button> )})
                    
                }
               

                
            

                <button className={styles.buttonsFilters} onClick = {handleReload} >{'All Games'.toUpperCase()}</button>

                
            </div>
        </div>
    )
}

export default Filters
