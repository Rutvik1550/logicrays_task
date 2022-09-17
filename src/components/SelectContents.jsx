import React, { useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Grid, IconButton } from "@mui/material";
import SelectInput from "./SelectInput";
import { useSelector } from "react-redux"
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from "react";

const SelectContents = (props) => {
  const { setData, onClose, data } = props;
  const Languages = ["Select Language", "Hindi", "English", "Marathi"];
  const [language, setLanguage] = useState("");
  const Boards = ["Select Boards", "GSEB", "CBSE"];
  const [board, setBoard] = useState("");
  const Subjects = ["Select Subject", "Maths", "English", "Science"];
  const [subject, setSubject] = useState("");
  const Classes = ["Select Class", "1", "2", "3", "4", "5"];
  const [classe, setClasse] = useState("");
  const Chapters = ["Select Chapter", "1", "2", "3", "4", "5"];
  const [chapter, setChapter] = useState("");
  const Topics = [
    "Select Topic",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];
  const [topic, setTopic] = useState("");
  const { isMobile } = useSelector(state => state.uireducer)

  const handleReset = () => {
    setChapter("");
    setClasse("");
    setSubject("");
    setLanguage("");
    setTopic("");
    onClose && onClose()
  };
  const handleSearch = () => {
    setData({
      language,
      subject,
      classe,
      chapter,
      topic,
    });
    onClose && onClose()
  };

  useEffect(() => {
    if(data) {
      if(data.language) setLanguage(data.language)
      if(data.subject) setSubject(data.subject)
      if(data.classe) setClasse(data.classe)
      if(data.chapter) setChapter(data.chapter)
      if(data.topic) setTopic(data.topic)
    }
  },[data])

  return (
    <>
      <Card
        sx={{
          maxWidth: "100%",
          margin: isMobile ? "0px" : "10px 40px",
          borderRadius: 4,
          padding: 3,
          position: 'relative'
        }}
        className={'selectContentContainer'}
      >
        {isMobile && (<Grid sx={{display: 'flex', position: 'absolute', zIndex: '99', right: '10px', top: '10px'}}>
          <IconButton onClick={onClose}>
            <CloseIcon color="black" fontSize="20px" />
          </IconButton>
        </Grid>)}
        <Grid>
          <Typography gutterBottom variant="h5" component="div" fontWeight={700}>
            Select Contents
          </Typography>
        </Grid>
        <div className="d-flex align-items-center border border-grey justify-content-between p-1 mb-2">
          <SelectInput
            options={Languages}
            title={"Language"}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div>
        <div className="d-flex align-items-center border border-grey justify-content-between p-2 mb-2">
          <SelectInput
            options={Boards}
            title={"Boards"}
            value={board}
            onChange={(e) => setBoard(e.target.value)}
          />
        </div>
        <div className="d-flex align-items-center border border-grey justify-content-between p-2 mb-2">
          <SelectInput
            options={Subjects}
            title={"Subject"}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="d-flex align-items-center border border-grey justify-content-between p-2 mb-2">
          <SelectInput
            options={Classes}
            title={"Class"}
            value={classe}
            onChange={(e) => setClasse(e.target.value)}
          />
        </div>
        <div className="d-flex align-items-center border border-grey justify-content-between p-2 mb-2">
          <SelectInput
            options={Chapters}
            title={"Chapter"}
            value={chapter}
            onChange={(e) => setChapter(e.target.value)}
          />
        </div>
        <div className="d-flex align-items-center border border-grey justify-content-between p-2 mb-2">
          <SelectInput
            options={Topics}
            title={"Topic"}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <CardActions>
          <Button
            variant="contained"
            size="medium"
            fullWidth
            sx={{ background: "#fa7b77" }}
            onClick={handleReset}
            className={'selectContentBtn'}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            size="medium"
            // color="secondary"
            sx={{ background: "#fa7b77" }}
            fullWidth
            onClick={handleSearch}
            className={'selectContentBtn'}
          >
            Search
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default SelectContents;
