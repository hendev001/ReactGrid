import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "./LandingPage.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 12,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={7}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Home{" "}
            </Link>
            <Link color="inherit" href="/Search-page/">
              Search
            </Link>
            <Link color="inherit" href="/details-page/">
              Classes
            </Link>
          </Breadcrumbs>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={7} style={{ height: "720px" }}>
          <Paper style={{ minHeight: "700px" }}>
            <img
              src="http://images.ctfassets.net/6j8y907dne6i/5pwV9Gh5rKwaEi6fKaaj8w/a42ac8016446b0e04a9cf67b3ed8f325/knee-replacement-cost.png"
              alt=""
              style={{ width: 200, height: 200, borderRadius: "50%" }}
            />
            <h1 style={{ color: "rgb(47 85 107)", fontSize: "20px" }}>
              Join Replacement Surgery(Knee Surgery)
            </h1>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <Divider style={{ marginRight: "34px" }} />
            <div style={{ lineHeight: "5px", marginTop: "17px" }}>
              <span>AUDIENCE</span>
              <p>Enroll everyone attending</p>
            </div>
            <Grid item xs>
              <iframe style={{ width: "100%" }}>
                <img
                  src="https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png"
                  alt=""
                />
              </iframe>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={5} style={{}}>
          <Paper
            style={{
              backgroundColor: "lightblue",
              padding: "35px 25px",
              marginTop: "140px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs>
                <span
                  style={{
                    fontWeight: "bold",
                    marginRight: "5px",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Free
                </span>{" "}
                <span style={{ fontSize: "12px" }}>per person</span>{" "}
              </Grid>
              <Grid item xs>
                <span style={{ fontSize: "12px", float: "right" }}>
                  40 spot left
                </span>{" "}
              </Grid>
            </Grid>

            <div style={{ lineHeight: "2px", marginBottom: "25px" }}>
              <h5 style={{ color: "purple" }}>SELECTED DATE & TIME</h5>
              <span>03/24/2021 @ 6:00PM - 8:00 PM</span>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                style={{ padding: "5px 55px" }}
              >
                ADD
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default LandingPage;
