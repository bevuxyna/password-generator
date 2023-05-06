import React from 'react';
import './PasswordInput.scss';

function PasswordInput() {
    return (
        <div className='password__wrapper'>
            <input
                type='text'
                className='password__input'
                placeholder='Generated Password'
                readOnly
            />
            <button className='password__save-button' />
        </div>
    );
}

export default PasswordInput;
