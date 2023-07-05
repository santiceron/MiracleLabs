import React from 'react';

const Loading = ({show, children}) => {
    if(show){
        return <>{children}</>;
    } else{
        return <p className='loading'>Loading...</p>;
    }
}

export default Loading;