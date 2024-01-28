import React from "react"
import Select from "./select"

const Gender = (props) => {
    const list = props.select.map((select, index) => (
        <Select key={index} description={select} />
    ))

    return (
        <>
        <h2>{'$props.title'}</h2>
        <table className="table table-boardered">
            <thead>
                <tr>
                    <th>Male</th>
                    <th>Female</th>
                </tr>
            </thead>
            <tbody>{list}</tbody>
        </table>
        </>
    )
}

export default Gender