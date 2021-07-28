import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const Breadcrum = () => {
  return (
    <div className="breadCrum">
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <Link color="inherit" to={"/"}>
          Home
        </Link>
        <Link color="inherit" to={`/`}>
          Fashion
        </Link>
        <Typography color="textPrimary">Men's Fashion</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrum;
