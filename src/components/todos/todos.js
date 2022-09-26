import React from 'react';

import {useEffect, useState} from "react";
import {todosServices} from "../../services";
import {Todo} from "../todo/todo";

const Todos = () => {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    todosServices.getAll().then(({data}) => setTodos(data))
  }, [])

  return (

      <div>
        {
          todos.map(todo => <Todo key={todo.id} todo={todo}/>)
        }
      </div>

  );
};

export {Todos};