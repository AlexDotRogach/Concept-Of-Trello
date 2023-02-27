import css from './AddButton.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
const AddButton = ({ text = '', click, isAdd }) => {
  const addTaskRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={addTaskRef}
      classNames={{
        enterActive: css.addTaskEnter,
        enterDone: css.addTaskEnterActive,
        exit: css.addTaskExit,
      }}
      in={isAdd}
      timeout={300}
      unmountOnExit
      mountOnEnter
    >
      <div className={css.addTask} ref={addTaskRef}>
        <button className={css.addTaskButton} onClick={click}>
          <AiOutlinePlusCircle size={20}></AiOutlinePlusCircle>
        </button>
        <span>{text}</span>
      </div>
    </CSSTransition>
  );
};

export default AddButton;
