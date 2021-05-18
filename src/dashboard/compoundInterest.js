import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//테이블 작업용 import
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//테이블 스타일
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(years, principal, interest, result) {
  return {years, principal, interest, result}
}

const CompoundInterest = () => {
    const [principal, setPrincipal] = useState();
    const [years, setYears] = useState();
    const [interest, setInterest] = useState();
    const [result, setResult] = useState();
  
    const calculate = () => {
      // A=p(1+(r/n))^(nt)
      const result = principal * Math.pow(1 + interest, years);
      setResult(result.toFixed(2));
    };
//Dynamic inputting table row
//연도 시작값 =0, Break는 설정한 연도    
function createTable(years, principal, interest, result ) {
  return {};
  
}

return (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40vh",
          }}
        >
          <form>
            <TextField
              label="설정금액(투자원금)"
              variant="outlined"
              type="number"
              onChange={(e) => setPrincipal(e.target.value)}
            />
            <TextField
              label="투자기간(연)"
              variant="outlined"
              type="number"
              onChange={(e) => setYears(e.target.value)}
            />
            <TextField
              label="연평균 목표수익률(%)"
              variant="outlined"
              type="number"
              onChange={(e) => setInterest(e.target.value / 100)}
            />
            <br />
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                calculate();
              }}
            >
              계산하기!
            </Button>
            <br />
            <br />
            <div style={{ fontSize: "30px" }}>금액 : {result}</div>

            {/* 일단 요기에다가 테이블작업 시작*/}
            
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>투자기간(년)</TableCell>
                    <TableCell>원금</TableCell>
                    <TableCell>수익률(%)</TableCell>
                    <TableCell>총평가액</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
               
                </TableBody>
              </Table>
            </TableContainer>
          </form>
        </div>
      </>
    );
  };
  

export default CompoundInterest