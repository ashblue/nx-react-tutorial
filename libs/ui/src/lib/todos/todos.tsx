import { Todo } from '@nx-react-tutorial/data';
import styles from './todos.module.css';

/* eslint-disable-next-line */
export interface TodosProps {
  todos: Todo[];
}

export function Todos(props: TodosProps) {
  return (
    <ul className={styles['container']}>
      {props.todos.map((t, i) => <li key={i} className="todo">{t.title}</li>)}
    </ul>
  );
}

export default Todos;
