import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

// show mulltiple cards in a row
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// button css
const buttonSX = {
  color: "black",
  borderColor: "black",
  // hover effect of cards
  "&:hover": {
    color: "white",
    background: "black",
    borderColor: "black",
  },
};

// function cards to display cards
function Cards() {
  return (
    <div>
      <Container maxWidth="md" sx={{ padding: "30px" }}>
        <Grid container spacing={3}>
          {cards.map((card) => {
            // list cards one by one
            return (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    image="https://source.unsplash.com/random"
                    title="image title"
                    sx={{ paddingTop: "56.25%" }}
                  />
                  <CardContent sx={{ flexGrow: "1" }}>
                    <Typography gutterBottom>Card Name</Typography>
                    <Typography gutterBottom>
                      this is a demo card with details included
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      variant="outlined"
                      sx={buttonSX}
                    >
                      View
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      variant="outlined"
                      sx={buttonSX}
                    >
                      Likes
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
export default Cards;
