import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styles from '../Nav/Navbar.module.css'
import ReorderIcon from '@material-ui/icons/Reorder'
import SearchIcon from '@material-ui/icons/Search'

function Navbar() {

const [showLinks, setShowLinks] = useState(false);

    return (
    <nav className={styles.navBar}>
       <div className={styles.leftSide}>
           <div className={styles.links} id={showLinks ? "hidden" : ""}>
           <Link>Home</Link>
           <Link>Categories</Link>
           <Link>Create Game</Link>
           </div>
           <button onClick={() => setShowLinks(!showLinks)}>
               <ReorderIcon />
            </button>
       </div>
       <div className={styles.rightSide}>
           <input type="text" placeholder="Search Game..."/>
           <button>
               <SearchIcon />
           </button>
       </div>
    </nav>
    )
}

export default Navbar
