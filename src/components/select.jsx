import React from "react";

const Select = (props) => {
    return (
        <tr>
            <td>{props.description.name}</td>
            <td>{props.description.choice}</td>
        </tr>
    )
}

export default Select