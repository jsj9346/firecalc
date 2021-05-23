import React, { useState, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//import { makeStyles } from '@material-ui/core/styles';
//테이블 작업용 import
import ReferenceTable from './yeildTable';


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
            <div style={{ fontSize: "30px" }}>금액 : {result}</div>
            {/* 일단 요기에다가 테이블작업 시작*/}
            <br />
            <div>
              <ReferenceTable></ReferenceTable>
            </div>
          </form>
        </div>  
      </>
    );
  };
  

export default CompoundInterest