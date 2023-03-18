import { Container, Typography, Button, Box } from "@mui/material";

//button css
const buttonSX = {
  color: "black",
  borderColor: "black",
  background: "white",
  "&:hover": {
    color: "white",
    background: "black",
    borderColor: "black",
  },
};

function Hero() {
  return (
    <div className="hero">
      <Container maxWidth="sm" sx={{ padding: "30px" }}>
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          sx={{ fontSize: "50px", fontWeight: "bold" }}
          gutterBottom
        >
          Photo Album
        </Typography>
        <Typography
          variant="p"
          color="textSecondary"
          paragraph
          sx={{ paddingBottom: "10px" }}
        >
          This is a photo album website every user can see photos on world wide
          .Enjoy our world phots Thanks
        </Typography>
        <div>
          <Box textAlign="center">
            <Button variant="outlined" sx={buttonSX}>
              See MyPhotos
            </Button>
          </Box>
        </div>
      </Container>
    </div>
  );
}
export default Hero;
