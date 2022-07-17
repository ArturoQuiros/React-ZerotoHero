import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  startLogingUserWithEmailPassword,
  startGoogleSignIn,
} from "../../store/auth";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useMemo, useState } from "react";

//initial state for the useForm
const formData = {
  email: "",
  password: "",
};

//Validations for useForm
const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe tener @"],
  password: [(value) => value.length >= 1, "El password no puede ser vacio"],
};

export const LoginPage = () => {
  //redux hooks
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);

  const isAuthenticated = useMemo(() => status === "checking", [status]);

  //useForm Hook
  const {
    formState,
    onInputChange,
    isFormValid,
    email,
    password,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  //avoiding error when form is empty
  const [formSubmitted, setFormSubmitted] = useState(false);

  //creating the submit functon
  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startLogingUserWithEmailPassword(formState));
  };

  //creating the Google submit functon
  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container></Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            error={!!emailValid && formSubmitted}
            helperText={emailValid}
            name="email"
            value={email}
            onChange={onInputChange}
            label="Correo"
            type="email"
            placeholder="youremail@examples.com"
            fullWidth
          ></TextField>
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            error={!!passwordValid && formSubmitted}
            helperText={passwordValid}
            name="password"
            value={password}
            onChange={onInputChange}
            label="contraseña"
            type="password"
            placeholder="contraseña"
            fullWidth
          ></TextField>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button
              disabled={isAuthenticated}
              type="submit"
              variant="contained"
              fullWidth
            >
              Login
            </Button>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button
              disabled={isAuthenticated}
              onClick={onGoogleSignIn}
              variant="contained"
              fullWidth
            >
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
