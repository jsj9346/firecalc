import React from "react";
import Typography from"@material-ui/core/Typography";

const About = () => {
  return (
    <>
      <div >
        <br />
        <br />
        <br />
        <Typography variant="h4" gutterBottom>모두를 위한 은퇴계산기는 이런 마음으로 만들었습니다.</Typography>
        <br />
        <Typography variant="h6" gutterBottom>코로나 19, 저금리, 저소득 등으로 많은 사람들이 힘들어 하는 중에</Typography>
        <Typography variant="h6" gutterBottom>주식, 부동산, 암호자산 등에 투자한 사람들은 큰 이익을 얻었습니다.</Typography>
        <Typography variant="h6" gutterBottom>이런 상황에서 아무것도 안한사람들은 무엇이라도 해야 하는 공포를 느꼈고, 서로의 수익을 비교하며 </Typography>
        <Typography variant="h6" gutterBottom>우리가 왜 투자를 해야하는지 본질을 잊게 된건 아닌가 하는 생각이 들었습니다.</Typography>
        <br />
        <Typography variant="h5" gutterBottom>저는 우리가 투자를 해야 하는 이유는 남보다 더 잘난 사람이 되기 위함이 아닌...</Typography>
        <Typography variant="h5" gutterBottom>우리의 불확실한 미래를 대비하기 위한 노후를 위함이 아닌가 하는 생각으로 개발을 하였습니다.</Typography>
      </div>
    </>
  )
};

export default About;
