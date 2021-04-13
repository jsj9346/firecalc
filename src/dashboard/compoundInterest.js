import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
            <br />
            <div style={{ fontSize: "30px" }}>${result}</div>
          </form>
        </div>
      </>
    );
  };
  

export default CompoundInterest