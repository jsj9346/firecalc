import React, { Component } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from '@material-ui/core/Paper';
import Asset from './Asset';



const AssetData = [
  {
    'nations':'미국',
    'assetclass':'국채 단기물(1~3년)',
    'period':'10년',
    'CAGR':'1.23%'
  },
  {
    'nations':'미국',
    'assetclass':'국채 10년물',
    'period':'10년',
    'CAGR':'4.31%'
  },
  {
    'nations':'미국',
    'assetclass':'국채 20년물',
    'period':'10년',
    'CAGR':'6.76%'
  },
  {
    'nations':'미국',
    'assetclass':'S&P 500 index',
    'period':'10년',
    'CAGR':'14.58%'
  },
  {
    'nations':'대한민국',
    'assetclass':'MSCI Korea index',
    'period':'10년',
    'CAGR':'7.34%'
  },
]

class CreateTable extends Component {
  render() {
    return(
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>국가</TableCell>
              <TableCell>종목</TableCell>
              <TableCell>기간</TableCell>
              <TableCell>수익률</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {AssetData.map(c=>{
                return <Asset key={c.nations} nations={c.nations} assetclass={c.assetclass} period={c.period} CAGR={c.CAGR} />
              })}
            </TableRow>               
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

export default CreateTable;