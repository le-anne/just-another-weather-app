import React from 'https://cdn.skypack.dev/react';

const Container = (props) => {
    return (
        <div className="container">
            { props.children }
        </div>
    )
}

export default Container