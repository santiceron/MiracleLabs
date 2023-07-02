import React from 'react';

const Link = ({href, openInNewTab, children}) => {
    return (
        <a href={href} target={openInNewTab ? '_blank' : '_self'}>
            {children}
        </a>
    );
}

export default Link;