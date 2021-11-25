import React, { useEffect, useState } from 'react';

import InputField from './InputField';
import TipSelectorView from './TipSelectorView';

const CalculatorView = ({ calculate, resetView, reset, emptyView, empty }) => {

    const tipsArray = [5, 10, 15, 25, 50];
    const [selected, setSelected] = useState(0);
    const [billValue, setBillValue] = useState(0);
    const [peopleValue, setPeopleValue] = useState(0);
    const [tipValue, setTipValue] = useState(0);

    useEffect(() => {
        const tip = (+selected === 0) ? +tipValue : +selected;
        const tipTotal = (tip / 100) * +billValue;
        const tipPerPerson = tipTotal / +peopleValue;
        const total = tipTotal + +billValue;
        const totalPerPerson = total / +peopleValue;

        if (tipValue !== 0 || billValue !== 0 || peopleValue !== 0 || selected !== 0) {
            emptyView(false);
        }
        calculate({
            tip: tipPerPerson,
            total: totalPerPerson
        });
        // console.log('Gere');
        // console.log(billValue, 'bv');
        // console.log(peopleValue, 'pv');
        // console.log(selected, 'sel');
        // console.log(tipValue, 'tv');
        // console.log(tip);
        // console.log(tipTotal);
        // console.log(tipPerPerson);
        // console.log(total);
        // console.log(totalPerPerson);
    }, [selected, billValue, peopleValue, tipValue, calculate]);


    return (
        <div className='calculator-view'>
            <section className='bill-section'>
                <InputField
                    hasIcon={ true }
                    hasLabel={ true }
                    inputName='bill'
                    labelText='Bill'
                    iconName='dollar'
                    getValue={ setBillValue }
                    reset={ reset }
                />
            </section>
            <section className='tip-section'>
                <TipSelectorView
                    tipsArray={ tipsArray }
                    select={ setSelected }
                    inputTyped={ setTipValue }
                    reset={ reset }
                />
            </section>
            <section className='people-section'>
                <InputField
                    hasIcon={ true }
                    hasLabel={ true }
                    inputName='people'
                    labelText='Number of People'
                    iconName='person'
                    getValue={ setPeopleValue }
                    reset={ reset }
                />
            </section>
        </div>
    );
};

export default CalculatorView;
