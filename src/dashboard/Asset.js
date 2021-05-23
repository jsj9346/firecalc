import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class Asset extends React.Component{
    render(){
        return (
            <TableRow>
                <TableCell>{this.props.nations}</TableCell>
                <TableCell>{this.props.assetclass}</TableCell>
                <TableCell>{this.props.period}</TableCell>
                <TableCell>{this.props.CAGR}</TableCell>
            </TableRow>
        )
    }
}

export default Asset;