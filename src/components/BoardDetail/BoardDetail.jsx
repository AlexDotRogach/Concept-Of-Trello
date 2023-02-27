import css from './BoardDetail.module.css';
import { HiDotsHorizontal } from 'react-icons/hi';
import { useEffect, useRef, useState } from 'react';
import { NotificationManager } from 'react-notifications';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectColumns } from '../../redux/selectors';
import { createTask } from '../../redux/actions/taskAction';
import { renameColumn, deleteColumn } from '../../redux/actions/columnAction';
import { nanoid } from 'nanoid';
import AddForm from '../../forms/AddForm';
import AddButton from '../../layouts/AddButton';
import EditColumnWindow from '../EditColumnWindow';
import TaskList from '../TaskList';
import AddColumn from '../AddColumn';
const getStartStateShowElement = columns => {
  return columns.reduce((columns, { id }) => {
    columns[id] = false;
    return columns;
  }, {});
};

const resetStateShowElement = columns => {
  return Object.entries(columns).reduce((columns, [id]) => {
    columns[id] = false;
    return columns;
  }, {});
};

const BoardDetail = () => {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const columns = useSelector(selectColumns);
  const columnsById = columns.filter(column => column.idBoard === boardId);
  const inputRenameRef = useRef(null);
  const startStateShow = getStartStateShowElement(columnsById);
  const [isEditWindow, setIsEditWindow] = useState(() => startStateShow);
  const [isAddTask, setIsAddTask] = useState(() => startStateShow);
  const [isRename, setIsRename] = useState(() => startStateShow);

  useEffect(() => {
    inputRenameRef.current?.select();
  }, [isRename]);

  useEffect(() => {
    window.addEventListener('click', closeElementByOutClick);
    return () => window.removeEventListener('click', closeElementByOutClick);
  }, []);

  useEffect(() => {
    const inputRename = inputRenameRef?.current;

    if (!inputRename) return;

    inputRename.addEventListener('blur', closeRenameByOutFocus);
    return () => inputRename.removeEventListener('blur', closeRenameByOutFocus);
  }, [isRename]);

  const closeElementByOutClick = ({ target }) => {
    if (target.closest(`.${css.boardColumnItem}`)) return;

    setIsAddTask(startStateShow);
    setIsEditWindow(startStateShow);
  };

  const closeRenameByOutFocus = ({ target }) => {
    setIsRename(resetStateShowElement(isRename));

    const { value: newColumnName } = target;

    const boardColumnItem = target.closest(`.${css.boardColumnItem}`);

    if (!boardColumnItem || !newColumnName) return;

    const renameData = {
      newColumnName,
      columnIdRename: boardColumnItem.dataset.id,
    };

    dispatch(renameColumn(renameData));
  };

  const changeStateTaskById = id =>
    setIsAddTask({ ...isAddTask, [id]: !isAddTask[id] });

  const changeEditWindow = id =>
    setIsEditWindow({ ...isEditWindow, [id]: !isEditWindow[id] });

  const changeIsRename = id => {
    setIsRename({ ...resetStateShowElement(isRename), [id]: !isRename[id] });
    changeEditWindow(id);
  };

  const clickDeleteColumn = id => {
    dispatch(deleteColumn(id));
    changeEditWindow(id);
  };

  const formSubmitAddTask = (e, id) => {
    e.preventDefault();

    const {
      currentTarget: {
        elements: {
          name: { value: nameOfTask },
        },
      },
    } = e;

    if (!nameOfTask) {
      NotificationManager.info('Write the name of column');
      return;
    }

    const taskData = {
      columnParentId: id,
      taskId: nanoid(),
      taskName: nameOfTask,
    };

    dispatch(createTask(taskData));
    changeStateTaskById(id);
  };

  return (
    <section className={css.columns}>
      <ul className={css.boardList}>
        {columnsById.map(({ id, name }) => {
          return (
            <li className={css.boardColumnItem} key={id} data-id={id}>
              {isRename[id] ? (
                <input
                  className={css.renameInput}
                  type="text"
                  name="rename"
                  placeholder="write new name"
                  ref={inputRenameRef}
                  autoComplete="off"
                />
              ) : (
                <div className={css.titleTask}>
                  {name.length > 10 ? name.slice(0, 20) : name}
                </div>
              )}
              <div
                className={css.editTask}
                onClick={() => changeEditWindow(id)}
              >
                {!isRename[id] && <HiDotsHorizontal></HiDotsHorizontal>}
              </div>
              {isEditWindow[id] && (
                <EditColumnWindow
                  idColumn={id}
                  renameColumn={changeIsRename}
                  deleteColumn={clickDeleteColumn}
                ></EditColumnWindow>
              )}
              <div className={css.controlTask}>
                <AddForm
                  text={{ input: 'name of task', btn: 'add task' }}
                  show={isAddTask[id]}
                  submit={e => formSubmitAddTask(e, id)}
                  closeForm={() => changeStateTaskById(id)}
                  styleAnim={{
                    enterActive: css.addFormTaskEnter,
                    enterDone: css.addFormTaskEnterDone,
                  }}
                ></AddForm>
                <AddButton
                  text="add task"
                  click={() => changeStateTaskById(id)}
                  isAdd={!isAddTask[id]}
                ></AddButton>
              </div>
              <TaskList
                column={
                  columnsById[columnsById.findIndex(column => column.id === id)]
                }
              ></TaskList>
            </li>
          );
        })}
      </ul>

      <AddColumn></AddColumn>
    </section>
  );
};

export default BoardDetail;
