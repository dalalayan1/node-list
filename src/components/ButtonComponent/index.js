import React from 'react';

const ButtonComponent = ({name, onClick}) => {
    return (
      <button onClick={onClick} className="btn-comp">
        {name}
      </button>
    );
}

export default ButtonComponent;