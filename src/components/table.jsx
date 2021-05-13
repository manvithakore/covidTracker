import React, { Component } from "react";
import './table.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'

class CaseTable extends Component {
    state = {}
    render() {
        return (
                <TableContainer className="tableContainer" component={Paper}>
                    <Table className="table" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Region</TableCell>
                                <TableCell>Cases</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Fort McMurray</TableCell>
                                <TableCell>1500</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
        );
    }
}
export default CaseTable;