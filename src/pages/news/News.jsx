import { Box, Button, Grid } from "@mui/material";
import news from "./NewsArray";


function News() {
  const boxStyling = {
    backgroundColor: "Lightgray",
    borderRadius: "5px",
    width: "calc(30% + 400px)",
    border: "1px solid black",
    padding: "30px 30px 30px 30px",
    textAlign: "left",
    marginLeft: "10px",
    marginBottom: "5px",
    boxShadow: "10px 5px 15px black"
  };
  const imgStyling = {
    border: "1px solid black",
    padding: "0 0"
  };

  return (<div style={{backgroundColor:"lightblue"}}>
      <h1>News</h1>

      {news.map(news =>
        <Box style={boxStyling} onClick={()=>alert("SéV")} on>
          <Grid container spacing={3} columns={16}>
            <Grid item xs={3}>
              <img style={imgStyling} src={news.img} alt={news.alt} height={100} />
            </Grid>
            <Grid item xs={4}>
              <h3>{news.titel}</h3>
              <h6>{news.text}</h6>
            </Grid>
            <Grid item xs={6}>
              Time: <u>{news.time}</u> Uhr <br/>
              Place: {news.place}<br/>
            </Grid>
          </Grid>
        </Box>
      )}
      <br/>
      <div style={{border:"1px dotted black", backgroundColor:"pink"}}>@Séverin</div>
    </div>
  );
}

export default News;
