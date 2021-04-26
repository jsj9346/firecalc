import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  talbe: {
    minWidth: 600,
  }
}
function createData(Years, interest, result) {
  return { Years, interest, result };
}