import React from "react";

const Button = ({text, onClick, type = "button", variant}) => (
    <button type={type} onClick={onClick} className={{variant}}>
        {text}
    </button>
);

export default Button;