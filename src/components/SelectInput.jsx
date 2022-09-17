import React from "react";
import Typography from "@mui/material/Typography";

const SelectInput = (props) => {
  const { options, title, onChange, name } = props;
  return (
    <>
      <Typography
        gutterBottom
        variant="h7"
        component="div"
        fontWeight="700"
        flexDirection={"start"}
      >
        {title}
      </Typography>
      <div className="custom-select">
        <select
          style={{
            width: "350px",
            border: "none",
            color: "#fa7b77",
            fontWeight: "700",
          }}
          onChange={(e) => onChange(e)}
        >
          {options.map((item) => (
            <option value={item} name={name}>
              {" "}
              {item}{" "}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectInput;
