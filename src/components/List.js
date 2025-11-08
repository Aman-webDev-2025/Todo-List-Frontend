import React from 'react'
import Item from './Item'

function List({data, onDeleteData, onToggleData}) {
  return (
    <ul className='list'>
      {data.map(item => (
          <Item 
          key={item._id} 
          data={item} 
          onDeleteData={onDeleteData} 
          onToggleData={onToggleData} 
        />
      ))}
    </ul>
  )
}

export default List