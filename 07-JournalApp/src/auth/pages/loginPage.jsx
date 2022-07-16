import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useMemo } from "react";

export const LoginPage = () => {
  const dispatch = useDispatch();

  const { status } = useSelector((state) => state.auth);

  const { email, password, onInputChange } = useForm({
    email: "arturo.quiros@dbrain.cr",
    password: "12345",
  });

  const isAuthenticated = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingAuthentication());
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container></Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Correo"
            type="email"
            placeholder="youremail@examples.com"
            name="email"
            value={email}
            onChange={onInputChange}
          ></TextField>
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="contraseña"
            type="password"
            placeholder="contraseña"
            name="password"
            value={password}
            onChange={onInputChange}
          ></TextField>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
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
