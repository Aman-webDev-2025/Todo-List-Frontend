import  { useEffect, useState } from 'react';

import { 
  fetchTodos, 
  fetchTodoById, 
  fetchCreatedTodo, 
  fetchUpdatedTodo, 
  fetchDeletedTodo 
} from '../services/api'; 

function useFetch() { 

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTodos = async () => {
        try{
            setLoading(true);
            const data = await fetchTodos();
            setTodos(data);
            setError(null);
        }
        catch (err){
            setError(err.message);
        }
        finally{
            setLoading(false);
        }
    }
    loadTodos();
  }, []);

 
  const handleCreateTodo = async (title) => {
    try {
      const newTodo = await fetchCreatedTodo(title);
      setTodos([newTodo, ...todos]); 
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  
  const handleDeleteTodo = async (id) => {
    try {
      await fetchDeletedTodo(id);
      setTodos(todos.filter(todo => todo._id !== id)); 
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleToggleTodo = async (id, currentStatus) => {
    try {
      const updatedTodo = await fetchUpdatedTodo(id, { completed: !currentStatus });
 
      setTodos(todos.map(todo => (todo._id === id ? updatedTodo : todo)));
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };


  const handleFetchTodoById = async (id) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchTodoById(id);
      setLoading(false);
      return data; 
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };


  
return { 
  todos, 
  loading, 
  error, 
  handleCreateTodo, 
  handleDeleteTodo, 
  handleToggleTodo,
  handleFetchTodoById 
};
}


export default useFetch;