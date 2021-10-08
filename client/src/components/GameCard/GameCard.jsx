import React from 'react'
import styles from './GameCard.module.css';

const GameCard = ({name, image, rating, genres }) => {
   //console.log(genres)
    let gen = genres.map(g => g.name).join(' | ')
    
    console.log(gen)

    return (
        <div className={styles.cardsContainer}>
            <div className={styles.imgcontainer}>
              
                 {image ? <img src={image} width='318' height='180' alt=""/> : <img src="" alt="foto" />} 
            </div>
          
            <div className={styles.cardsContainer2}>
            <h3 className={styles.h3CardsTitle}>{name}</h3>
            <h3 className={styles.h3Cards}>{gen}</h3>
           
            <p className={styles.cardRating}> <span className={styles.cardSpan}>✩ {rating}/5</span></p>
            </div>
        </div>
    )
}

export default GameCard
