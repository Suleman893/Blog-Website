import { Box, makeStyles, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles({
  banner: {
    backgroundImage: `url(${"https://www.wallpaper.jpg"})`,
    width: "100%",
    height: "50vh",
    backgroundPosition: "left 0px bottom 0px",
    backgroundSize: "cover",
  },
  wrapper: {
    padding: 20,
    "& > *": {
      marginTop: 50,
    },
  },
  text: {
    color: "#878787",
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.banner}></Box>
      <Box className={classes.wrapper}>
        <Typography variant="h3">About</Typography>
        <Typography variant="h5" className={classes.text}>
          I'm a Suleman Ahmad, Software Engineer based in Lahore Pakistan.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
