import React from 'react'

export default function Help() {
    
    return (

        <div>

            <h1>Rules of password is </h1>
            <ul>
                <li>Character shall not be repeated twice in a string</li>
                <li>Two consecutive characters shall not be the same type for example ['ad','56','%^','AD'] is not accepted</li>
                <li>Default Size is 10 characters</li>
                <li>Input field doesn't allow characters and immediately, the textbox gets empty.</li>
            </ul>
            
            
        </div>
    )
}