import React from 'react'
import { useState } from 'react'
import Flex from '../Flex/Flex'

export default function StockCount(props) {
    const[count,setCount]=useState(1)

    function handleSuma() {
        if (count < props.stock) {
            setCount(count + 1)
        }
    }

    function handleResta() {
        setCount(count - 1)
    }

    function onAdd() {
        console.log("Agregado al carrito")
    }

    return (
        <div>
            <Flex>
                <button disabled={count === 1} onClick={handleResta}>-</button>
                <h3>{count}</h3>
                <button onClick={handleSuma}>+</button>
            </Flex>
            <br />
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}
