import React from 'react'
import Cell from '../Cell/Cell'
import "./index.css"

const Row = ({item}) => {
  return (
        <tr className='form'>
        {Object.entries(item).map(([key, value]) =>{
            return (
                <Cell key={key} cellData = {JSON.stringify(value)}/>
            )
        })}
    </tr>
  
   
    
  )
}
export default Row