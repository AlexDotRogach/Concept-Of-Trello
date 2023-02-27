import css from './EditColumnWindow.module.css';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { TiDeleteOutline } from 'react-icons/ti';
import { useEffect } from 'react';

const EditColumnWindow = ({ idColumn, renameColumn, deleteColumn }) => {
  return (
    <ul className={css.editWindow}>
      <li className={css.editWindowItem} onClick={() => renameColumn(idColumn)}>
        <MdOutlineDriveFileRenameOutline></MdOutlineDriveFileRenameOutline>
        <span>rename</span>
      </li>
      <li className={css.editWindowItem} onClick={() => deleteColumn(idColumn)}>
        <TiDeleteOutline></TiDeleteOutline>
        <span>delete column</span>
      </li>
    </ul>
  );
};

export default EditColumnWindow;
