import css from './BoardForm.module.css';

const BoardForm = ({ settingButton, formSubmit }) => {
  return (
    <form className={css.form} onSubmit={formSubmit}>
      <div className={css.inputWrapper}>
        <label className={css.nameLabel} htmlFor="login">
          Name of board
        </label>
        <input
          className={css.nameInput}
          type="text"
          name="name"
          id="name"
          placeholder="write name of board"
        />
      </div>

      <button className={css.submitBtn} disabled={!settingButton.show}>
        {console.log('render')}
        {settingButton.text}
      </button>
    </form>
  );
};

export default BoardForm;
