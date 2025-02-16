import { AppBar, MenuItem, Toolbar, Typography, styled } from "@mui/material"


const NavBar = () => {
    const StyledToobar = styled(Toolbar) (() => ({
        display: "flex",
        justifyContent: "space-evenly",
        padding: "20px",
        
    }))   

    return (
      <>
         <AppBar position="absolute">
          <StyledToobar>
            <MenuItem>
                <Typography fontSize={28} >Abaut</Typography>
            </MenuItem>
            <MenuItem>
                <Typography  fontSize={28}>Skills</Typography>
            </MenuItem>
            <MenuItem>
                <Typography  fontSize={28}>Projetos</Typography>
            </MenuItem>
          </StyledToobar>
         </AppBar>
      </>
    )
  }
  
  export default NavBar
  