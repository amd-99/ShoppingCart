import { Grid, withStyles } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
const muiStyle = (theme) => ({
  product: {
    fontSize: "20px",
    margin: "5px"
  },
  main: { border: "1px solid", backgroundColor: "lightgray" },
  main2: { border: "1px solid" }
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const App = ({ classes }) => (
  <>
    <div>
      <Grid item xs={12} className={classes.main} container>
        <Grid item xs={8}>
          <Grid item xs={12} className={classes.product}>
            Product
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={8}>
              <SearchBar placeholder="Search Product..." />
            </Grid>
            <Grid item xs={2}>
              <Button
                style={{ padding: "10px", backgroundColor: "white" }}
                variant="outlined"
              >
                <QrCodeIcon />
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                style={{ padding: "10px", backgroundColor: "white" }}
                variant="outlined"
              >
                <AddIcon />
              </Button>
            </Grid>
          </Grid>

          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Item>
                  <Grid>
                    <Grid item xs={3}>
                      image
                    </Grid>
                    <Grid item xs={3}>
                      text
                    </Grid>
                  </Grid>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={4}>
          <Grid
            item
            xs={12}
            style={{ textAlign: "center", fontSize: "20px", padding: "20px" }}
          >
            cart
          </Grid>
          <Grid item xs={12} style={{ height: "120px" }}></Grid>
          <Grid item xs={12}></Grid>
          <Grid
            item
            xs={12}
            style={{
              justifyContent: "end",
              display: "flex",
              alignItems: "end"
            }}
          >
            <Button
              style={{
                padding: "20px",
                width: "170px",
                backgroundColor: "white"
              }}
              variant="outlined"
            >
              Pay
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  </>
);
export default withStyles(muiStyle)(App);
