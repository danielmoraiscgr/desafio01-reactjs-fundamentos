import styles from './Header.module.css';

import logoToDo from '../assets/logotodo.png';

export function Header () {
    return (
        <header className={styles.header}>
            <img src={logoToDo} alt="Logotipo to do" />
            <div>                
            </div>
        </header>
    )
}