import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { getData } from "../api/api";
import { useSelector } from "react-redux"
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/material";

const CardList = (props) => {
  const { title, data } = props;
  const [searchdata, setSearchData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { isMobile } = useSelector(state => state.uireducer)

  useEffect(() => {
    setLoading(true);
    async function init() {
      const json = await getData(title, data?.language, data?.subject, data?.grade, data?.chapter, data?.topic)
      if(json.results.length) {
        setSearchData(() => json.results)
      } else {
        setSearchData([])
      }
      setTimeout(() => {
        setLoading(() => false);
      }, 1000);
    }
    init()
  }, [data, title]);

  return (
    <>
      {searchdata?.length > 0 &&
        !loading &&
        searchdata.map((item) => {
          let youtubeLink =
            item?.youtube_link &&
            item?.youtube_link.replace("https://youtu.be/", "");
          return (
            <Paper
              sx={{
                // p: 2,
                margin: "auto",
                marginTop: 2,
                maxWidth: 800,
                height: "auto",
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                boxShadow: '1px 2px 11px rgb(0 0 0 / 20%)',
                overflow: 'hidden'
              }}
            >
              <Grid container>
                <Grid item xs={12} sm={4} sx={{display: 'flex'}}>
                  <ButtonBase sx={{ width: isMobile ? 160 : 210, height: isMobile ? 100 : 130 }}>
                    {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
                    <iframe
                      src={`https://www.youtube.com/embed/${youtubeLink}`}
                      frameborder="1"
                      allow="autoplay; encrypted-media"
                      allowfullscreen
                      title="video"
                      width={isMobile ? "160" : "210"}
                      height={isMobile ? '100' : "130"}
                    />
                  </ButtonBase>
                  {isMobile && (<Grid item xs container direction="column">
                    <Grid
                      item
                      xs
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"flex-start"}
                      // alignItems={"center"}
                      padding={'5px'}
                    >
                      <Typography variant="body2" fontSize={'12px'} gutterBottom>
                        {item?.video_topic_name ?? ""}
                      </Typography>
                      <Typography variant="body2" fontSize={'12px'} color="text.secondary">
                        {item?.chapter_name_original ?? ""} | Class{" "}
                        {item?.grade ?? ""}
                      </Typography>
                    </Grid>
                  </Grid>)}
                </Grid>
                <Grid item xs={12} sm container>
                  {!isMobile && (<Grid item xs container direction="column">
                    <Grid
                      item
                      xs
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"flex-start"}
                      // alignItems={"center"}
                      padding={'20px 5px'}
                    >
                      <Typography variant="body2" gutterBottom>
                        {item?.video_topic_name ?? ""}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item?.chapter_name_original ?? ""} | Class{" "}
                        {item?.grade ?? ""}
                      </Typography>
                    </Grid>
                  </Grid>)}
                  <Grid
                    item
                    display={"flex"}
                    alignItems={"center"}
                    backgroundColor={"#fa7b77"}
                    padding={isMobile ? '5px 0px 0px' : "11px"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    width={isMobile ? '100%' : 'fit-content'}
                  >
                    <i className="bi bi-share-fill text-white"></i>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      color={"white"}
                    >
                      Share
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          );
        })}
      {loading && (
        <Grid sx={{ display: "flex", justifyContent: "center", height: '100%' }}>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </Grid>
      )}
      {searchdata?.length === 0 && !loading && (
        <Grid sx={{ display: "flex", justifyContent: "center", height: '100%' }}>
          No Data Found
        </Grid>
      )}
    </>
  );
};

export default CardList;
