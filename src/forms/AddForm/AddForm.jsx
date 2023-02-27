import css from './AddForm.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
const AddForm = ({
  text: { input, btn },
  show,
  submit,
  closeForm,
  styleAnim: { enterActive, enterDone },
}) => {
  const addInputRef = useRef(null);
  const boardAddColumnRef = useRef(null);

  useEffect(() => {
    addInputRef.current?.select();
  }, [show]);

  return (
    <CSSTransition
      nodeRef={boardAddColumnRef}
      classNames={{
        enterActive,
        enterDone,
      }}
      in={show}
      timeout={300}
      unmountOnExit
      mountOnEnter
    >
      <form onSubmit={submit} className={css.addForm} ref={boardAddColumnRef}>
        <input
          className={css.addInput}
          type="text"
          name="name"
          placeholder={input}
          ref={addInputRef}
          autoComplete="off"
        />

        <div className={css.controlBtn}>
          <button className={css.add}>{btn}</button>
          <button type="button" className={css.close} onClick={closeForm}>
            <AiOutlineCloseCircle size={24}></AiOutlineCloseCircle>
          </button>
        </div>
      </form>
    </CSSTransition>
  );
};

export default AddForm;
