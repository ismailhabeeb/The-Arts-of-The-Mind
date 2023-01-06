import React from 'react'
import { useState } from "react";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };


  return (
    <form onSubmit={onSubmit}>
      <div className='navbar justify-content-start'>
        <textarea
          className="comment-form-textarea form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="comment-form-button mt-5 ms-2" disabled={isTextareaDisabled} >
          {submitLabel}<i class=" singlePostIcon fa-sharp fa-solid fa-paper-plane"></i>
        </button>
      </div>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button btn btn-info comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>

  );
}

export default CommentForm;