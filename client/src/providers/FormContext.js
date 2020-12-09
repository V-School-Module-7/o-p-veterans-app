import React, { useState } from 'react'

export const RegistrationFormContext = React.createContext()

export default function FormContext({ children }) {
    const [questionNumber, setQuestionNumber] = useState(0)

    return (
        <RegistrationFormContext.Provider value={[questionNumber, setQuestionNumber]}>
            { children }
        </RegistrationFormContext.Provider>
    )
}