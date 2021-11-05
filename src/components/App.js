import React, { useEffect, useState } from 'react';
import CalculatorView from './CalculatorView';
import DisplayPanelView from './DisplayPanelView';


const App = () => {
    const [results, setResults] = useState(
        {
            tip: 0.00,
            total: 0.00
        }
    );

    const [reset, setReset] = useState(false);
    useEffect(() => {
        console.log(reset);

        return () => {
            setReset(false);
        };
    }, [reset]);

    const [empty, setEmpty] = useState(true);

    return (
        <div className='container'>
            <div className='component'>
                <svg className='svg__logo'>
                    <use xlinkHref={ `sprite.svg#logo` }></use>
                </svg>
                <div className='app'>
                    <CalculatorView
                        calculate={ setResults }
                        resetView={ setReset }
                        reset={ reset }
                        emptyView={ setEmpty }
                        empty={ empty }
                    />
                    <DisplayPanelView
                        results={ results }
                        resetView={ setReset }
                        reset={ reset }
                        emptyView={ setEmpty }
                        empty={ empty }
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
