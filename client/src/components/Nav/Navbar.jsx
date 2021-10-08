import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styles from '../Nav/Navbar.module.css'
import ReorderIcon from '@material-ui/icons/Reorder'
import SearchBar from '../SearchBar/SearchBar'
import Filters from '../Filters/Filters'
import Orders from '../Orders/Orders'

function Navbar() {

const [showLinks, setShowLinks] = useState(false);

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
       <Filters />
       <Orders />
       <div className={styles.rightSide}>
           <SearchBar />
       </div>
    </nav>
    )
}

export default Navbar
