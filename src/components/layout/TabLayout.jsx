import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardList from "../CardList";
import { Grid, TextField } from "@mui/material";
import { createStyles } from "@mui/styles";
import "./layout.css"
import { useSelector } from "react-redux"

const useStyles = createStyles((theme) => ({
  root: {
    background: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    float: "right",
    "& .MuiOutlinedInput-root": {
      background: "#fff",
    },
    border: '1px solid black'
  },
  input: {
    background: "#fff",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const { isMobile } = useSelector(state => state.uireducer)

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: isMobile ? 1 : 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const TabLayout = (props) => {
  const { data } = props;
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [text, setText] = React.useState("");
  const iStyle = useStyles();
  // const { isMobile } = useSelector(state => state.uireducer)

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <>
      <Grid 
        sx={{
          display:'flex',
          justifyContent: 'space-between',
          margin: '20px 0px 10px',
          background: '#d1d1d1',
          padding: '5px 5px 0px'
        }}
      >
        <Grid className={'tabButtonContainer'}>
          <button 
            className={`tabButton ${value === 0 ? 'activeButton' : ''}`} 
            onClick={() => handleChange(0)}
          >Playlist</button>
          <button 
            className={`tabButton ${value === 1 ? 'activeButton' : ''}`} 
            onClick={() => handleChange(1)}
          >Practice Quizzes</button>
          <button 
            className={`tabButton ${value === 2 ? 'activeButton' : ''}`} 
            onClick={() => handleChange(2)}
          >Videos</button>
        </Grid>
        {false && (<Grid sx={{marginBottom: '5px'}}>
          <TextField
            id="standard-basic"
            name="search"
            placeholder="Search"
            variant="outlined"
            size="small"
            className={iStyle.root}
            value={text}
            // inputProps={{ className: iStyle.input }}
            onChange={(e) => handleSearch(e)}
          />
        </Grid>)}
      </Grid>
      <Box
        sx={{
          bgcolor: "background.paper",
          width: "100%",
          height: "680px",
          margin: "10px 40px 10px",
          marginLeft: 0,
          overflow: "scroll",
          scrollBehavior: "smooth",
          position: "relative",
        }}
      >
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
          // height={"900px"}
        >
          <TabPanel
            id={"tab-play"}
            value={value}
            index={0}
            dir={theme.direction}
          >
            <CardList title={"playlist"} data={data} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <CardList title={"practice"} data={data} />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <CardList title={"video"} data={data} />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </>
  );
};

export default TabLayout;
