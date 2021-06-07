import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Asset from './Asset';


const AssetData = [
   
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
  {
    'nations':'미국',
    'assetclass':'국채 10년물',
    'period':'10년',
    'CAGR':'4.54%'
  },
  {
    'nations':'International',
    'assetclass':'금(Gold)',
    'period':'10년',
    'CAGR':'8.49%'
  }
]

class CreateTable extends Component {
  render() {
    return(
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>국가</TableCell>
              <TableCell>종목</TableCell>
              <TableCell>투자기간</TableCell>
              <TableCell>수익률</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {AssetData.map(c=>{
                return <Asset key={c.nations}
                 nations={c.nations}
                 assetclass={c.assetclass}
                 period={c.period} CAGR={c.CAGR} />
              })}     
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default CreateTable;