import React from 'react'

function Item({ data, onDeleteData, onToggleData }) {
  

  const toggleButtonClass = data.completed 
    ? 'toggle-button completed' 
    : 'toggle-button';

  return (

    <li className={data.completed ? 'item completed' : 'item'}>
      <span>{data.title}</span>
      
      <div> 
        <button 
          className={toggleButtonClass}
          onClick={() => onToggleData(data._id , data.completed)}
        >
          
          {data.completed ? 'Completed' : 'Not Completed'}
        </button>
        
        <button 
          className="delete-button" 
          onClick={() => onDeleteData(data._id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default Item