import React from 'react';

const ButtonComponent = ({name, onClick, className}) => {
    return (
      <button onClick={onClick} className={`${className ? className : ""} btn-comp`}>
        {name}
      </button>
    );
}

export default ButtonComponent;