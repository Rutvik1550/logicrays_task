import { Drawer, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu"
import { useSelector } from "react-redux";
import SelectContents from "../SelectContents";

const Header = ({data, setData}) => {
  const { isMobile } = useSelector(state => state.uireducer)
  const [mobileMenuPanelOpen, setMobileMenuPanelOpen] = useState(false)

  const closeMobileMenuPanel = () => {
    setMobileMenuPanelOpen(false)
  }

  const handleDrawerOpen = () => {
    setMobileMenuPanelOpen(true)
  }

  return (
    <>
      <Drawer 
        variant="temporary" 
        open={mobileMenuPanelOpen && isMobile} 
        onClose={closeMobileMenuPanel} 
        anchor="left" 
        sx={{maxWidth: '90%'}}
        className={'menuPanel'}
      >
        <SelectContents data={data} setData={setData} onClose={closeMobileMenuPanel}/>
      </Drawer>
      <div className="w-100 d-flex justify-content-center text-center bg-black text-white p-2">
        <Grid style={{width: 'fit-content'}}>
          {isMobile && (<IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2 }}
            style={{ color: "white" }}
          >
            <MenuIcon />
          </IconButton>)}
        </Grid>
        <Grid className={'d-flex align-items-center justify-content-center text-center w-100'}>LOGO/Image</Grid>
      </div>
    </>
  );
};

export default Header;
