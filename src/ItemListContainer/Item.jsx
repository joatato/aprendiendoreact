import React from 'react'
import { useState } from 'react'
import StockCount from '../StockCount/StockCount'
import './item.css'

function Item(props) {
    const { title, price, description } = props
    const [isFavorite, setIsFavorite] = useState(false)

    function handleFavorite() {
        if (isFavorite === true) {
            setIsFavorite(false)
        } else {
            setIsFavorite(true)
        }
    }

    return (

        < div className='card' >
            <button onClick={handleFavorite} className={isFavorite ? "card-favicon favorite" : "card-favicon"}>
                ♥
            </button>

            <div className='card-img'>
                <img
                    src={props.img}
                    alt='imagen'
                ></img>
            </div>
            <div className='card-detail'>
                <h2>{title}</h2>
                <h4>$ {price}</h4>
                <p>{description}</p>
            </div>
            <StockCount stock={5}></StockCount>
        </div >
    )
}

export default Item