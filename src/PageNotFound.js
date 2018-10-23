import React from 'react';

// Stateless functional Component
const PageNotFound = (props) => {
    // Return list of Book component
    return (
        <div style={{width: 400, height: 400, display: 'block', margin: 'auto', position: 'relative' }}>
            <h1>Error code 404</h1>
            <h3>Page not found for <code>{ props.location.pathname }</code> </h3>
        </div>
    );
}

export default PageNotFound;