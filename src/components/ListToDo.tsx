import styles from './ListToDo.module.css';
import { ToDo } from './Todo';

interface ToDo {
    id: string;
    checked: boolean;
    text: string;
  }
  
  interface ToDoProps {
    todos: ToDo[],
    checkedToDo: (id: string) => void;
    deleteToDo: (id: string) => void;
  }
  

export function ListToDo({ todos, checkedToDo, deleteToDo }: ToDoProps) { 

    const createdTodos = todos.length; 

    const todosCompleted = todos.reduce((acc, todo) => {
          if(todo.checked) {
            return acc + 1
          }
          return acc;
    },0);

     return (
       <div className={styles.todos}>
           <div className={styles.info}>
                <div className={styles.created}>
                    <strong>Tarefas criadas</strong>
                    <span>{createdTodos}</span>
                </div>
                <div className={styles.done}>
                    <strong>Concluídas</strong>
                    <span>{todosCompleted} de {createdTodos}</span>
                </div>               
           </div>
           { createdTodos
                ? 
                todos.map(todo => (
                    <ToDo 
                    key={todo.id} 
                    todo={todo} 
                    checkedToDo={checkedToDo}
                    deleteToDo={deleteToDo}
                    />
                ))
                :
                <div className={styles.empty}>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            }

       </div>
     ) 
}