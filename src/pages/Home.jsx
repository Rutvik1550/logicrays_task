import React, { useState } from "react";
import Header from "../components/header/Header";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SelectContents from "../components/SelectContents";
import TabLayout from "../components/layout/TabLayout";
import { useSelector } from "react-redux";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Card, CardActionArea, Typography } from "@mui/material"

const Home = () => {
  const [data, setData] = useState();
  const { isMobile } = useSelector(state => state.uireducer)

  return (
    <>
      <div container>
        <Header data={data} setData={setData} />
        <Box sx={{ flexGrow: 1, backgroundColor: "#E6E6E6" }}>
          <Grid container xs={12} className={'container'}>
            <Grid item xs={12} md={4} lg={4}>
              <Card sx={{ maxWidth: "100%", margin: isMobile ? "10px 5px" : "40px 40px 10px", borderRadius: 4 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height={isMobile? '70' : "100"}
                    width="50"
                    sx={{ objectFit: "contain", marginTop: "15px" }}
                    image={require("../assets/Images/zeel-logo.png")}
                    alt="Zeel school"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ textAlign: "center" }}
                    >
                      Zeal English School
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              {!isMobile && (<SelectContents data={data} setData={setData} />)}
            </Grid>
            <Grid item xs={12} md={8} lg={8}>
              <TabLayout data={data} />
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  )
}

export default Home;