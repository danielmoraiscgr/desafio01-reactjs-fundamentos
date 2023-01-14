import { useState } from 'react';

import { CreateToDo } from './components/CreateToDo';
import { Header } from './components/Header';
import { ListToDo } from './components/ListToDo';

import styles from './App.module.css';

import  './global.css';

interface ToDo {
  id: string;
  checked: boolean,
  text: string;
}

function App() {

  const [todos, setTodos] = useState<ToDo[]>([]);

  function createToDo(text: string) {
    const newToDo = {
      id: Date.now().toString(),
      checked: false,
      text
    }
  
    setTodos((state) => [...state, newToDo]);
  }

  function checkedToDo(id: string) {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id) {
        return {
          id: todo.id,
          checked: !todo.checked,
          text: todo.text
        }
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);
  }

  function deleteToDo(id: string) {
    const updatedTodos = todos.filter(todo => {
      return todo.id !== id;
    })

    setTodos(updatedTodos);
  }

  return (
    <div>
       <Header />
        <main className={styles.main}>
           <CreateToDo 
               createToDo={createToDo}
           />
      
       <ListToDo 
            todos={todos} 
            checkedToDo={checkedToDo}
            deleteToDo={deleteToDo}
        />
          </main>
    </div>
  )
}

export default App
