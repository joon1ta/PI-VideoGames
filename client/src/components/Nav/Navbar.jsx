import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styles from '../Nav/Navbar.module.css'
import ReorderIcon from '@material-ui/icons/Reorder'
import SearchBar from '../SearchBar/SearchBar'
import {useDispatch} from 'react-redux'
import {createdGame} from '../../actions/ActionIndex'
import Orders from '../Orders/Orders'
function Navbar() {

    
    const dispatch = useDispatch();
const [showLinks, setShowLinks] = useState(false);


const handleCreated = () => {
        dispatch(createdGame());
    }
    return (
    <nav className={styles.navBar}>
       <div className={styles.leftSide}>
           <div className={styles.links} id={showLinks ? "hidden" : ""}>
           <Link to='/'>Home</Link>
         
        
           <Link to='/creategame'>Create Game</Link>
           </div>
           <button onClick={() => setShowLinks(!showLinks)}>
               <ReorderIcon />
            </button>
       </div>
       <div className={styles.containerOrders}>
          <button className={styles.buttonCreated} onClick={handleCreated}>Created Games</button>
          <div className={styles.containerGridOrders}>
              <Orders /> 
          </div>
           
       </div>
      
       <div className={styles.rightSide}>
      
           <SearchBar />
       </div>
    </nav>
    )
}

export default Navbar
