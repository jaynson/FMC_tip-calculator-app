import React from 'react';

const DisplayPanel = ({ panel, label, output, empty }) => {
    return (
        <section className={ `display-panel display__${panel}-per-person` }>
            <div className='display-panel__label'>
                <p className="display-panel__label--text">{ label }</p>
                <p className='display-panel__label--common'>/ person</p>
            </div>
            <div className='display-panel__output'>
                <span>$</span>{
                    `${(!empty && isFinite(output)) ? output.toFixed(2) : 0.00.toFixed(2)}`
                }
            </div>
        </section>
    );
};

export default DisplayPanel;
