import { GoTrashcan } from 'react-icons/go';
import css from './TaskList.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/actions/taskAction';
const TaskList = ({ column }) => {
  const dispatch = useDispatch();

  return (
    <ul className={css.taskList}>
      {column.tasks.map(({ id, name }) => {
        return (
          <li key={id} className={css.taskListItem} draggable="true">
            <span>{name}</span>
            <div className={css.trash} onClick={() => dispatch(deleteTask(id))}>
              <GoTrashcan></GoTrashcan>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
