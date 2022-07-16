import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const formData = {
  displayName: "",
  email: "",
  password: "",
};

//validations for the cutom Hook
const formValidations = {
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
  email: [(value) => value.includes("@"), "El correo debe tener @"],
  password: [(value) => value.length >= 5, "El password debe ser mayor a 5"],
};

export const RegisterPage = () => {
  //using the custom hook
  const {
    formState,
    onInputChange,
    isFormValid,
    displayName,
    email,
    password,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  //avoiding error when form is empty
  const [formSubmitted, setFormSubmitted] = useState(false);

  //creating the submit functon
  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    console.log(formState);
  };

  return (
    <AuthLayout title="Registro">
      <h1>FormValid: {isFormValid ? "Valido" : "Incorrecto"}</h1>
      <form onSubmit={onSubmit}>
        <Grid container></Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            error={!!displayNameValid && formSubmitted}
            helperText={displayNameValid}
            name="displayName"
            value={displayName}
            onChange={onInputChange}
            label="Nombre"
            type="text"
            placeholder="John Doe"
            fullWidth
          ></TextField>
        </Grid>

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
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              Crear cuenta
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
