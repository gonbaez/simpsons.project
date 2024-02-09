import React, { Component } from "react";

import { TbTrash } from "react-icons/tb";
import { TbTrashX } from "react-icons/tb";

import styles from "../styles/DeleteButton.module.css";

class DeleteButton extends Component {
  render() {
    const { onDelete, onDeleteConfirm, deleteConfirm, id } = this.props;

    return (
      <>
        <button
          className={
            !deleteConfirm ? styles.deleteButton : styles.deleteConfirmButton
          }
          onClick={() => (!deleteConfirm ? onDelete(id) : onDeleteConfirm(id))}
        >
          {!deleteConfirm ? <TbTrash /> : <TbTrashX />}
        </button>
      </>
    );
  }
}

export default DeleteButton;
