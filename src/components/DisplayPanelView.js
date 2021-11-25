import React, { useRef } from 'react';
import DisplayPanel from './DisplayPanel';

const DisplayPanelView = ({ results, resetView, emptyView, empty }) => {

    const handleClick = (e) => {
        resetView(true);
        emptyView(true);
    };

    const btnRef = useRef();

    const checkEmpty = () => {
        if (empty) {
            btnRef.current.disabled = true;
        } else {
            btnRef.current.disabled = false;
        }
    };
    return (
        <section className='display-panel-view'>
            <div className="display-panel-content">
                <div className='panels'>
                    <DisplayPanel
                        label='Tip Amount'
                        panel='tip'
                        empty={ empty }
                        output={ results.tip }
                    />
                    <DisplayPanel
                        label='Total'
                        panel='total'
                        empty={ empty }
                        output={ results.total }
                    />
                </div>
                <div className='display-panel-view--reset'>
                    <button
                        className={ `btn btn-reset ${empty && 'inactive'}` }
                        onClick={ handleClick }
                        onMouseEnter={ checkEmpty }
                        ref={ btnRef }
                    >
                        Reset
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DisplayPanelView;
