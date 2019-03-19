import React, { Component } from "react";
import {Grid,TextField,Typography,Button} from '@material-ui/core'
import PropTypes from 'prop-types';
import {MuiThemeProvider,createMuiTheme,withStyles} from '@material-ui/core/styles'


let theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009be5',
  },
  formWrapper: {
    maxWidth:'60vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 30px',
    margin:'10px',
    borderRadius: '10px',
    boxShadow: '0px 10px 50px #006db3',
    backgroundColor: '#fafafa',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  },
  errorMessage: {
    color: '#f44336',
    fontZize: '0.75em',
    display: 'relative',
  },
  firstName: {
    marginRight: '1%',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
    width: '49%',
  },
  lastName: {
    marginLeft: '1%',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
    width: '49%',
  },
  identification:{
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
    width: '100%',
  },
  email:{
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
    width: '100%',
  },
  password :{
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
    width: '100%',
  },
  createAccount: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  createAccountButton:{
    width: '100%',
    marginTop: '1em',
    padding: '8px 0px',
    fontSize: '1em',
    letterSpacing: '1px',
    marginBottom: '0.25em',
  }

}

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      identification:null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        identification:"",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "Mínimo 3 caracteres" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "Mínimo 3 caracteres" : "";
        break;
      case "identifaction":
      formErrors.identification =
        value.length < 3 ? "Mínimo 3 caracteres" : "";
      break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Correo invalido";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "Mínimo 6 caracteres" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    const {classes} = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Grid className={classes.formWrapper}>
            <Typography align='center' color="inherit" variant="h5">
              Iniciar Sesión
            </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
              <div className={classes.firstName}>
              <TextField
                id="firstName"
                type='text'
                label="Nombres"
                margin="normal"
                variant="outlined"
                name='firstName'
                onChange={this.handleChange}
                className={formErrors.firstName.length > 0 ? "error" : null}
              />
              {formErrors.firstName.length > 0 && (
                <span className={classes.errorMessage}>{formErrors.firstName}</span>
              )}
              </div>
              <div className={classes.lastName}>
              <TextField
                id="lastName"
                label="Apellidos"
                margin="normal"
                variant="outlined"
                name='lastName'
                type='text'
                onChange={this.handleChange}
                className={formErrors.firstName.length > 0 ? "error" : null}
              />
              {formErrors.lastName.length > 0 && (
                <span className={classes.errorMessage}>{formErrors.lastName}</span>
              )}
              </div>

              <div className={classes.identification}>
              <TextField
                id="email"
                label="Identificación"
                margin="normal"
                variant="outlined"
                name='identifaction'
                type='number'
                onChange={this.handleChange}
                className={formErrors.identification.length > 0 ? "error" : null}
              />
              {formErrors.identification.length > 0 && (
                <span className={classes.errorMessage}>{formErrors.identification}</span>
              )}
              </div>

              <div className={classes.email}>
              <TextField
                id="email"
                label="Correo"
                margin="normal"
                variant="outlined"
                name='email'
                type='text'
                onChange={this.handleChange}
                className={formErrors.email.length > 0 ? "error" : null}
              />
              {formErrors.email.length > 0 && (
                <span className={classes.errorMessage}>{formErrors.email}</span>
              )}
              </div>
              <div className={classes.password}>
              <TextField
                id="password"
                label="Contraseña"
                margin="normal"
                variant="outlined"
                name='password'
                type='password'
                onChange={this.handleChange}
                className={formErrors.password.length > 0 ? "error" : null}
              />
              {formErrors.password.length > 0 && (
                <span className={classes.errorMessage}>{formErrors.password}</span>
              )}
              </div>
              <div className={classes.createAccount}>
                <Button
                  className={classes.createAccountButton}
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={()=>this.props.onForm(this.state)}
                  >
                  Iniciar
                </Button>
                <small><label > Crear cuenta</label></small>
              </div>
            </form>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}
SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);
