const API_URL = 'https://todo-list-backend-1836.onrender.com';

const handleResponse = async (response) => {  //function to handle responses
    if(!response.ok) {
        const error = await response.json();   //it converts the response body to json format
        throw new Error(error.message || 'Something went wrong');
    }
    return response.json();
}


// Fetch all todos
export const fetchTodos = async () => {
    const response = await fetch(API_URL);
    return handleResponse(response);
}


//fetch todo by id
export const fetchTodoById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return handleResponse(response);
}


//fetch a created todo
export const fetchCreatedTodo = async(title) => {
    const response = await fetch(API_URL , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title })
    });
    return handleResponse(response);
}


//fetch an updated todo
export const fetchUpdatedTodo = async (id, data) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return handleResponse(response);
}


//fetch a deleted todo
export const fetchDeletedTodo =async(id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    return handleResponse(response);
}