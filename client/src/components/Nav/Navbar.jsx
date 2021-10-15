import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styles from '../Nav/Navbar.module.css'
import ReorderIcon from '@material-ui/icons/Reorder'
import SearchBar from '../SearchBar/SearchBar'
import Orders from '../Orders/Orders'
import{ Search} from '@material-ui/icons'
function Navbar() {

    
  
const [showLinks, setShowLinks] = useState(false);



    return (
    <nav className={styles.navBar}>
        <div  className={styles.divh1}>
           <Link to='/'> 
           <h1 className={styles.h1Titlenav}><span>Game</span> Network</h1>
           </Link>  
            
            </div> 
       <div className={styles.leftSide}>
           <div className={styles.links} id={showLinks ? "hidden" : ""}>
           <Link to='/home'>Home</Link>
         
        
           <Link to='/creategame'>Create Game</Link>
           </div>
           <button onClick={() => setShowLinks(!showLinks)}>
               <ReorderIcon />
            </button>
       </div>
       <div className={styles.containerOrders}>
      
          <div className={styles.containerGridOrders}>
              <Orders /> 
          </div>
           
       </div>
      
       <div className={styles.rightSide}>
      
           <SearchBar />
           <button className={styles.button}> <Search /></button>
       </div>
    </nav>
    )
}

export default Navbar
