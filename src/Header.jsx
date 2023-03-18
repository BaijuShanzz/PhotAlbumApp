import { Typography, AppBar, CssBaseline, Toolbar } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const Header = () => {
  return (
    <divstyle>
      <div>
        <CssBaseline />
        <AppBar
          sx={{
            background: "black",
          }}
          position="relative"
          className="nav"
        >
          <Toolbar>
            <PhotoCamera />
            <Typography variant="h6" sx={{ paddingLeft: "10px" }}>
              Photo album
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </divstyle>
  );
};
export default Header;
