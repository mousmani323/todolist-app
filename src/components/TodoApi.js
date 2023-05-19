import React, { useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import LocalStorage from '../hooks/LocalStorage';

const TodoApi = ({ deleteTodo, editTodo}) => {
 const [data, setData] = LocalStorage("Api-data",[]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [setData]);

  if (data.length === 0) {
    return (<h1 className='loader'>Loading...</h1>);
  }
  
  return (
    <div className="container">
    {data.map(todo =>  todo.title && (
        <div className="Todo" key={todo.id}>
          <p className={`${todo.completed ? 'completed' : ''}`}>{todo.title}</p>
          <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(todo.id)} />
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
          </div>
        </div>
      ))}
  </div>

  );
};

export default TodoApi;