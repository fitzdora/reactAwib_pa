import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

const styles = {
    root: {
        display: "flex",
        justifyContent: "space-around",
        padding: 1.5,
    },
};

export default function Gender(props) {

    return (
        <>
        <Typography sx={styles.root} variant="h4" component="h1">
        {`${props.title}`}
        </Typography>
        <TableContainer component={"div"}>
            <Table aria-label="gender table">
                <TableHead>
                    <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Choice</TableCell>
                    <TableCell>Image</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.select.map((s, index) => (
                    <TableRow key={index}>
                        <TableCell component="th" scope="row">
                        {s.name}
                        </TableCell>
                        <TableCell>{s.choice}</TableCell>
                        <TableCell>{s.image}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}