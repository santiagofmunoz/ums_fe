import React, {useState} from 'react'
import {
    Button,
    Container,
    createMuiTheme,
    CssBaseline,
    Grid,
    MuiThemeProvider,
    TextField,
    Typography,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import StudentService from "./services/StudentService";
import Swal from "sweetalert2";

const studentService = new StudentService();

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const submitButton = createMuiTheme({
    palette: {
        primary: {500: "#245b80"}
    },
})

function CreateStudent() {
    const classes = useStyles();
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [ci, setCi] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);

    function handleSubmit(event) {
        studentService.createStudent({
            "first_name": firstName,
            "last_name": lastName,
            "ci": ci,
            "email": email,
            "password": password,
            "phone": phone,
            "address": address,
            "type": "student",
        }).then((result) => {
            Swal.fire({
                title: '¡Estudiante creado con éxito!',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false,
            })
        }).catch(() => {
            Swal.fire({
                title: '¡Error!',
                text: 'Ha ocurrido un error al momento de crear el estudiante.' +
                'Por favor, revise los datos ingresados y vuelva a intentarlo.',
                icon: 'error',
                showConfirmButton: false,
            })
        })
        event.preventDefault();
    }

    return (
        <Container maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Nombre"
                                    autoFocus
                                    onChange={e => setFirstName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Apellido"
                                    name="lastName"
                                    autoComplete="lname"
                                    onChange={e => setLastName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="ci"
                                    label="Cédula de Identidad"
                                    type="number"
                                    name="ci"
                                    autoComplete="username"
                                    onChange={e => setCi(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Contraseña"
                                    type="password"
                                    name="password"
                                    autoComplete="current-password"
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Celular"
                                    type="number"
                                    name="phone"
                                    autoComplete="phone"
                                    onChange={e => setPhone(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="address"
                                    label="Dirección"
                                    name="address"
                                    autoComplete="address"
                                    onChange={e => setAddress(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <MuiThemeProvider theme={submitButton}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Crear estudiante
                            </Button>
                        </MuiThemeProvider>
                    </form>
                </Typography>
            </div>
        </Container>
    )
}

export default CreateStudent