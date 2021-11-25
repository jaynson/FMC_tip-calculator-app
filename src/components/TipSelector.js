import React from 'react';

const TipSelector = ({ tipValue, isSelected }) => {

    return (
        <div className='tip-selector'>
            <button className={ `btn btn-tip-selector ${isSelected ? 'selected' : ''}` }>
                { `${tipValue}%` }
            </button>
        </div>
    );
};

export default TipSelector;
