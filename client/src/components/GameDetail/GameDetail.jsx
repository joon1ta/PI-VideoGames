import React from 'react'

const GameDetail = ({name, image, rating, genres}) => {




    return (
        <div>
            <h2>{name}</h2>
            {image ? <img src={image} width='300' alt=""/> : <img src="" alt="" />}
            <div>
                
            </div>
        </div>
    )
}

export default GameDetail
