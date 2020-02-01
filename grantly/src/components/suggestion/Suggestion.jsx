import React, { Component, useState } from 'react'
import GrantFoucus from './formElements/GrantFoucusForm'
import GrantDemo from './formElements/GrandDemoForm'
import GrantInfo from './formElements/GrantInfoForm'

const SuggestionForm = props => {
    const [step, setStep] = useState(1)
     
    return (
        <>
        <GrantFoucus />
        <GrantInfo />
        <GrantDemo />
        </>
    )
}

export default SuggestionForm