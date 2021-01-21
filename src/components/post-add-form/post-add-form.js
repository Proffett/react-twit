import React from 'react';
import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
    return (
      <div className="bottom-panel d-flex">
        <input
          className="form-control new-post-label"
          type="text"
          placeholder="о чем вы думаете?"
        />
        <button
          type="submit"
          className="btn btn-outline-secondary"
          onClick={() => {
              onAdd('hello')
          }}
        >
          Добавить
        </button>
      </div>
    );
}

export default PostAddForm;