import { useState } from 'react';
import plusIcon from '../assets/plus.svg';

import styles from './CreateToDo.module.css';

interface NewToDoProps {
    createToDo: (text: string) => void;
}

export function CreateToDo({ createToDo }: NewToDoProps) { 

    const [text, setText ] = useState('');

    function handleCreateToDo() { 
        createToDo(text);
        setText(''); 
    }

     return (
        <div className={styles.wrapper}>
                <input 
                    className={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    value={text}
                    onChange={ (event) => setText(event.target.value)}
                    />
                <button 
                    className={styles.button}
                    onClick={handleCreateToDo}
                    >
                    Criar    
                    <img src={plusIcon} alt="Mais" />
                </button>
        </div>
    )
}