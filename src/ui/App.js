import React from 'react';
import TestForm from './Form.js'

const App = () => {
    const getResults = (value) => {
        console.log(JSON.stringify(value, null, 2))
    }
    return (
        <TestForm onSubmit={getResults}/>
    )
}
export default App
