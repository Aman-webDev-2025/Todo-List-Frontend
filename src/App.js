import React from 'react'
import UseFetch from './hooks/UseFetch'
import Form from './components/Form'
import List from './components/List'
import './App.css'

function App() {

    const {todos, loading, error, handleCreateTodo,handleDeleteTodo, handleToggleTodo } = UseFetch();

    if(loading){
        return <p>Loading Tasks...</p>
    }
    if(error){
        return <p className='error-message'> {error} </p>
    }
  return (
    <div className='app-container'>
        <h1>My To-Do List</h1>

        <Form onCreateTodo={handleCreateTodo} />

        <List 
        data={todos}
        onDeleteData={handleDeleteTodo}
        onToggleData= {handleToggleTodo}
        />
    </div>
  )
}

export default App