import React from 'react'

const Footer = ({length}) => {
   

  return (
    <footer>{length} for {length === 1 ? "Item" :"Items"} </footer>
  )
}

export default Footer