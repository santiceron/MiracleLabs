import React from 'react';

const Loading = ({show, children}) => {
    if(show){
        return <>{children}</>;
    } else{
        return <p>Loading...</p>;
    }
}

export default Loading;