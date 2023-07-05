import React from "react";

function IncrementButton({ onClick }) {
    return (
        <button onClick={onClick}>Increment</button>
    );
}

export default IncrementButton;