import React from "react"

const Select = (props) => {
    return (
        <tr>
            <td>{props.description.typeMale}</td>
            <td>{props.description.typeFemale}</td>
        </tr>
    )
}

export default Select