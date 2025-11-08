import React , {useState} from 'react'    //for react component and hooks

function Form({onCreateTodo}) {                    //props used for pass data from parent to child component
    const [data , setData] = useState('');   //made because input value is changing

    const handleSubmit = (e) => {           //for handle form submission
        e.preventDefault();               //for getting page not to reload on submit
        if(!data){
            return alert("Input field is empty");
        }
        onCreateTodo(data);                 //calling oncreate function from props to pass input value to parent component
        setData('');                    //reset input field after submission
    }  

  return (            
    <form onSubmit={handleSubmit} className='form'>
        <input type='text' 
        value={data} 
        onChange={(e) => setData(e.target.value)} 
        placeholder='Add a new assignment'
        />
        <button type='submit' className='button'>Add</button>
    </form>
  )
}

export default Form