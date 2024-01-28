import React from "react";
import Select from "./select";

const Gender = (props) => {
    
    // eslint-disable-next-line react/prop-types
    const list = props.select.map((select, index) => (
        <Select key={index} description={select} />
    ))
    return (
        <>
        <h2>{`${props.title}`}</h2>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Choice</th>
                </tr>
            </thead>
            <tbody>{list}</tbody>
        </table>
        </>
    )
}

export default Gender