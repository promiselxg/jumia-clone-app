import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const Breadcrum = () => {
  return (
    <div className='breadCrum'>
      <Breadcrumbs
        aria-label='breadcrumb'
        separator={<NavigateNextIcon fontSize='small' />}
      >
        <Link color='inherit' href='/'>
          Home
        </Link>
        <Link color='inherit'>Fashion</Link>
        <Typography color='textPrimary'>Men's Fashion</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrum;