import React from 'react'

const Functions = () => {
  
  const sum = (a:number, b:number ):number => {
    return a + b
  }

    return (
    <>
        Functions
        <p>{sum(4, 3)}</p>
    </>
  )
}

export default Functions