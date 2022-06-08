import React, { Component } from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { Container } from "@mui/material";
import img from "../Images/img.png";

export default class Loginvalidation extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  }

  volid() {
    if (!this.state.email.includes("@") && this.state.password.length < 5 ) {
      this.setState(
        {emailError: 'Ivalid Email', passwordError:'Password length should be more then 5'}
      )
    }
    else if(!this.state.email.includes("@") ){
      this.setState(
     {emailError: 'Invalid Email'}
      )
    }
    else if (this.state.password.length < 5){
      this.setState(
      { passwordError: 'password Length Should be more then 5'}
      )
    }
  
    else{
      return true
    }
  }

  submit() {

  this.setState(
    { emailError: "", passwordError: "" }
  )
  
    if((this.volid()))
    alert("Submit")
  }



  render() {
    const theme = createTheme();
    return (
      <div
        style={{
          backgroundColor: "#8eb2d1",
        }}
      >
        <Container maxWidth="lg">
          <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
              {/* <CssBaseline /> */}
              <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                  backgroundImage:
                    "url(https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjIxMWJhdGNoMTAtYmItMTA3LXBob25lXzIuanBn.jpg)",
                  // backgroundImage: `url(${img})`
                  height: "100%",
                  weight: "130%",
                  // display: "block",
                  display: "flex",
                  justifyContent: "center",

                  backgroundRepeat: "no-repeat",
                  backgroundColor: (t) =>
                    t.palette.mode === "light"
                      ? t.palette.grey[50]
                      : t.palette.grey[900],
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  // backgroundColor:"#03fc94",
                }}
              />
              <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
              >
                <Box
                  sx={{
                    my: 8,
                    mx: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Login
                  </Typography>
                  <Box
                    component="form"
                    noValidate
                    // onSubmit={handleSubmit}
                    sx={{ mt: 1 }}
                  >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      type="name"
                      onChange={(event) => {
                        this.setState({ email: event.target.value });
                      }}
                      autoComplete="email"
                      autoFocus
                    />
                     <p style={{color: '#eb3434'}}> {this.state.emailError}</p> <br/>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      type="password"
                      onChange={(event) => {
                        this.setState({ password: event.target.value });
                      }}
                      label="Password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <p style={{color: '#eb3434'}}> {this.state.passwordError} </p> <br/>

                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button onClick={() => this.submit()}
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Login
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="#" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                    {/* <Copyright sx={{ mt: 5 }} /> */}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </ThemeProvider>
        </Container>
      </div>
    );
  }
}
