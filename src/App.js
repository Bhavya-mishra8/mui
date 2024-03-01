import './style.js';
import { Typography, Button, Grid, Card, Container, AppBar, CardContent, CardMedia, CssBaseline, CardActions, Toolbar } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './style.js';
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const App = () => {
  const classes = useStyles();
  const generateImageUrl = () => {
    // Generate a random number to make each URL unique
    const randomNumber = Math.floor(Math.random() * 100);
    return `https://source.unsplash.com/random?${randomNumber}`;
  };
  console.log(Math.floor(Math.random() * 1000))
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" color="textPrimary" align='center' gutterBottom >
              Photo Album
            </Typography>
            <Typography variant="h5" color="textSecondary" align='center' paragraph>
              HI ! come and relive the good old days
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant='contained' color="primary">See MY Photos</Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color="secondary">Album</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div><Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map(() => (
              <Grid item key={cards} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={generateImageUrl()}
                    title="image title"
                  />
                  <CardContent className={classes.CardContent}>
                    <Typography gutterBottom variant='h5'>
                      Headings
                    </Typography>
                    <Typography>
                      This is a media card .You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" >View</Button>
                    <Button size="small" color="primary" >Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          footer
        </Typography>
        <Typography variant="subtitle1" align='center' color='textSecondary'> something something is happening</Typography>
      </footer>
    </>
  );
}

export default App;