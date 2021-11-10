import { Box, makeStyles, Typography, Link } from "@material-ui/core";
import { GitHub, Instagram, Email } from "@material-ui/icons";

const useStyles = makeStyles({
  banner: {
    backgroundImage: `url(${""})`,
    width: "100%",
    height: "50vh",
    backgroundPosition: "left 0px top -100px",
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

const Contact = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.banner}>Hey</Box>
      <Box className={classes.wrapper}>
        <Typography variant="h3">Contact Page</Typography>
      </Box>
    </Box>
  );
};

export default Contact;
