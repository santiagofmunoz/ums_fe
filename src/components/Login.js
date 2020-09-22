import React from 'react'
import {
    Avatar,
    Button,
    Checkbox,
    Container,
    createMuiTheme,
    CssBaseline,
    FormControlLabel,
    makeStyles,
    MuiThemeProvider,
    TextField,
    Typography
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

const loginButton = createMuiTheme({
    palette: {
        primary: {500: "#245b80"}
    },
})

const textField = createMuiTheme({
    palette: {
        primary: {500: "#245b80"}
    },
})

function Login(props) {
    const classes = useStyles();

    return(
        <Container component="Login" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">¡Bienvenidos a UMS!</Typography><br />
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Iniciar Sesión
                </Typography>
                <form className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="ci"
                        label="Cédula de Identidad"
                        name="ci"
                        autoComplete="ci"
                        autoFocus
                        color="primary"
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
                        color="primary"
                    />
                    <MuiThemeProvider theme={loginButton}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                            color="primary"
                        >
                            Iniciar Sesión
                        </Button>
                    </MuiThemeProvider>
                </form>
            </div>
        </Container>
    )
}

export default Login