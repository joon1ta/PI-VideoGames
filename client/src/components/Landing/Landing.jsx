import { Link } from 'react-router-dom';
import styles from '../Landing/Landing.module.css';

function Landing() {
    return (
      <div className={styles.container}>
        <div className={styles.container2}>
           <h1>Welcome to <span>Game</span> Network</h1>
              <p>Come to see the most popular, upcoming and new games!</p>
              <Link to='/home'>
                <button className={styles.btn}>Press Start</button>
              </Link>
          
        </div>
             
      </div>
    )
}

export default Landing
