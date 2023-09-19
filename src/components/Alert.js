import React from 'react'

function Alert(props) {
    return (


        <div className="alert alert-success" role="alert" style={{ height: '50px' }}>
            <p>This is Alert {props.message}</p>
        </div>

    );
}

export default Alert;