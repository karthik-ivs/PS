import React from "react";

function CheckBox({label, name, checked, onChange}) {
    return (
    <>
        <label>
        <input type="checkbox" name={name} checked={checked} onChange={onChange} />
        {label}
        </label>
    </>
    );
}

export default CheckBox;