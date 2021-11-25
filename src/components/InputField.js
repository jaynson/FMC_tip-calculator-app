import React, { useEffect, useState } from 'react';

const InputField = ({ hasLabel, hasIcon, labelText, iconName, inputName, getValue, hasSelect, reset }) => {

    const [textStr, setTextStr] = useState('');

    useEffect(() => {
        if (reset) setTextStr('');
        // if (reset) setTextStr('');
        if (hasSelect) setTextStr('');
    }, [reset, hasSelect]);

    const handleMouseWheel = (e) => {
        e.target.blur();
    };

    const handleChange = (e) => {
        setTextStr(e.target.value);
        getValue(e.target.value);
        // console.log(textStr);
    };
    return (
        <div className='user-input'>

            {
                (hasLabel) &&
                (<label className='user-input__label' htmlFor={ inputName }>{ labelText }</label>)
            }

            <div className="user-input--wrapper">
                {
                    (hasIcon) &&
                    <svg className={ `icon__svg icon-${iconName}` } >
                        <use xlinkHref={ `sprite.svg#icon-${iconName}` }></use>
                    </svg>
                }
                {
                    (hasLabel) ?
                        (<input
                            formNoValidate
                            type='number'
                            id={ inputName }
                            name={ inputName }
                            className={
                                `user-input__field 
                                user-input__field--${inputName} 
                                ${(+textStr === 0) ? 'invalid' : ''}
                                `
                            }
                            onWheel={ handleMouseWheel }
                            placeholder='0'
                            min='1'
                            onChange={ handleChange }
                            value={ textStr }
                        />
                        ) :
                        (<input
                            formNoValidate
                            type='number'
                            name={ inputName }
                            className={ `user-input__field user-input__field--custom-tip` }
                            onWheel={ handleMouseWheel }
                            placeholder='Custom'
                            min='1'
                            onChange={ handleChange }
                            value={ textStr }

                        />)
                }
                {
                    (+textStr === 0) &&
                    <p className='invalid-value'>Can't be Zero</p>
                }
            </div>
        </div>
    );
};

export default InputField;
