import React from 'react'
import ListItem from '../ListItem/ListItem'
import "./index.css"

const List = ({items}) => {
  return (
    <ul className='form'>
        {items.map((item)=> (
            <ListItem  key= {item.id} item={item}/>
        ))}
    </ul>
  )
}

export default List