import React from 'react';
import PropTypes from 'prop-types';


export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {

  // If the task is not archived, render the pin button
    const renderPinButton = () => {
    if (state !== 'TASK_ARCHIVED') {
     return ( 
     <button
        className="pin-button"
        onClick={() => onPinTask(id)}
        id={`pinTask-${id}`}
        aria-label={`pinTask-${id}`}
        key={`pinTask-${id}`}
      >
        <span className={"icon-star"} />
      </button>
    );
}
    //if task is archived, don' render the  pin button
    return null;
};


return (
    
    <div className={`list-item ${state}`}>
      <label
        htmlFor={`archiveTask-${id}`}
        aria-label={`archiveTask-${id}`}
        className="checkbox"
      >
        <input
          type="checkbox"
          disabled={state === 'TASK_ARCHIVED'}
          //name="checked"
          id={`archiveTask-${id}`}
          checked={state === 'TASK_ARCHIVED'}
          onChange={() => onArchiveTask(id)}
        />
        <span
          className="checkbox-custom" 
          onClick={() => onArchiveTask(id)}
        />
      </label>

      <label htmlFor={`title-${id}`} aria-label={title} className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          id={`title-${id}`}
          placeholder="Input title"
        />
      </label>

      {state === 'TASK_PINNED' && (
        <span className='star-icon' role='img' aria-label="Pinned">
          ⭐
        </span>
        )}

        {renderPinButton()}
    </div>
  );
}

Task.propTypes = {
task: PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
}),
onArchiveTask: PropTypes.func,
onPinTask: PropTypes.func,
};