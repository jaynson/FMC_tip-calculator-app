import React, { useEffect, useState } from 'react';
import InputField from './InputField';
import TipSelector from './TipSelector';

const TipSelectorView = ({ tipsArray, select, inputTyped, reset }) => {

    const [isSelected, setIsSelected] = useState(false);

    const [tipSelectors, setTipSelectors] = useState(
        tipsArray.map((tip) => {
            return (
                <TipSelector key={ tip } tipValue={ tip } isSelected={ false } />
            );
        })
    );

    useEffect(() => {
        setTipSelectors(
            tipsArray.map((tip) => {
                return (
                    <TipSelector key={ tip } tipValue={ tip } isSelected={ false } />
                );
            })
        );
    }, [reset, setTipSelectors]);


    const handleClick = (e) => {
        if (!e.target.closest('.tip-selector')) {
            return;
        }
        // if (!e.target.closest('.user-input__field')) {
        //     return;
        // }
        console.log('clicked');
        const src = e.target.closest('.btn')?.innerText.slice(0, -1);
        // if (src === undefined) {
        //     select(0);
        // }
        // select(src);
        src ? select(src) : select(0);
        src ? setIsSelected(true) : setIsSelected(false);
        console.log(isSelected);
        setTipSelectors(
            tipsArray.map((tip) => {
                const selected = (tip === +src);

                return (
                    <TipSelector key={ tip } tipValue={ tip } isSelected={ selected } />
                );
            })
        );

    };

    return (
        <div className='tip-selector-view'>
            <div className='user-input__label'>Select Tip %</div>
            <div className="tips-wrapper" onClick={ handleClick } >
                { tipSelectors }
                <div className='tip-selector'>
                    <InputField
                        hasIcon={ false }
                        hasLabel={ false }
                        hasSelect={ isSelected }
                        inputName='custom-tip'
                        getValue={ inputTyped }
                        reset={ reset }
                    />
                </div>
            </div>
        </div>
    );
};

export default TipSelectorView;

// <TipSelector tipValue={ 5 } />
//                 <TipSelector tipValue={ 10 } />
//                 <TipSelector tipValue={ 15 } />
//                 <TipSelector tipValue={ 25 } />
//                 <TipSelector tipValue={ 50 } />