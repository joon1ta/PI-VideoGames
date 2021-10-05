import React from 'react'

const GameCard = ({name, image, rating, genres}) => {
   //console.log(genres)
    let gen = genres.map(g => g.name).join(' | ')
    console.log(gen)

    return (
        <div>
            <h2>{name}</h2>
            {image ? <img src={image} width='300' alt=""/> : <img src="" alt="" />}
            <div>
            <h3>{gen}</h3>
            <p>{rating}</p>
            </div>
        </div>
    )
}

export default GameCard
