import React from 'react';
import { useState } from 'react/cjs/react.development';
import CalculatorView from './CalculatorView';
import DisplayPanelView from './DisplayPanelView';


const App = () => {
    const [results, setResults] = useState(
        {
            tip: 0.00,
            total: 0.00
        }
    );

    return (
        <div className='container'>
            <div className='component'>
                <div className='app'>
                    <CalculatorView calculate={ setResults } />
                    <DisplayPanelView results={ results } />
                </div>
            </div>
        </div>
    );
};

export default App;
