import React, { useState } from 'react'
import './Button.css'

export const Button = React.memo(({ active, option, setOption }) => {
    return (
        <button
            value={option}
            onClick={(ev) => setOption(prev => prev === ev.target.value ? '' : ev.target.value)}
            className={active ? "active" : ""}>
            {option}
        </button>
    )
})
