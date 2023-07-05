import React from 'react';

const Link = ({href, openInNewTab, children}) => {
    return (
        <a className='myLink' href={href} target={openInNewTab ? '_blank' : '_self'}>
            {children}
        </a>
    );
}

export default Link;