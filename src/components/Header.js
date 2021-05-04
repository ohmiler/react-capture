import React from 'react'
import Form from './Form'
// import Navigation from './Navigation';

const Header = ({ history, handleSubmit }) => {
    console.log(history);
    return (
        <div>
            <h1>CaptureApp</h1>
            <Form history={history} handleSubmit={handleSubmit} />
            {/* <Navigation /> */}
        </div>
    )
}

export default Header
