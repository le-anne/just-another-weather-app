import React from 'https://cdn.skypack.dev/react';

class ErrorMessage extends React.Component {
    render() {
        return (
            <div className="error">
                <p className="error-text">Please enter the name of the city.</p>
            </div>
        )
    }
}

export default ErrorMessage