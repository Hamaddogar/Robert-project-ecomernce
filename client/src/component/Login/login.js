import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Alert from 'react-s-alert';
 
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useHistory } from "react-router";



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
    const history = useHistory();
  const classes = useStyles();
  const [state, setState] = useState({})

  const updateState = (e) => {
      state[e.target.id] = e.target.value;
      setState({ ...state })

  }
const loginHundler=(e)=>{
    e.preventDefault()
   if(state.Email===undefined)

   {
   
    Alert.error('please Enter Email Carefully!', {
      position: 'top',
        effect: 'bouncyflip',
        timeout: 'none'
    });

   }
   else if(state.Password===undefined){

      Alert.error('please Enter Password Carefully!', {
        position: 'top',
          effect: 'bouncyflip',
          timeout: 'none'
      });

    }

else{

    axios.post('http://localhost:4000/login', state
     
    )
    .then((res)=>{
      
       if(res.data.success==true)
       {
        history.push({
            pathname:  "/dashboard",
        })

         console.log(res)
        Alert.success(' Sussfully! you have login', {
          position: 'right',
          effect: 'bouncyflip',
          timeout: 'none'
      });
       }
        else{

          Alert.error('User is not Found!', {
          position: 'top',
            effect: 'bouncyflip',
            timeout: 'none'
        });
         
        }

    })
    .catch(function (error) {
      console.log(error);
    });

}
}
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Alert stack={{limit: 1}} />
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            id="Email" value={state.Email} onChange={updateState}

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            id="Password" value={state.Password} onChange={updateState}

          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
             onClick={loginHundler}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}