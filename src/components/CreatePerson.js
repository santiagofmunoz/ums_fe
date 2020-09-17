import React, {useState} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {
    Button,
    Container,
    createMuiTheme,
    CssBaseline,
    Grid,
    MuiThemeProvider,
    TextField,
    Typography
} from "@material-ui/core";
import Swal from "sweetalert2";
import GenericFunctions from './GenericFunctions'
import StudentService from "./services/StudentService";
import TeacherService from "./services/TeacherService";
import AdministrativeService from "./services/AdministrativeService";

const genericFunctions = new GenericFunctions();
const studentService = new StudentService();
const teacherService = new TeacherService();
const administrativeService = new AdministrativeService();

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

function CreatePerson(props) {
    const classes = useStyles();
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [ci, setCi] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);

    function successMessage() {
        const personTitle = genericFunctions.capitalize(props.personTitle);
        Swal.fire({
            title: "¡" + personTitle + " creado con éxito!",
            icon: 'success',
        })
    }

    function errorMessage() {
        const personTitle = props.personTitle
        Swal.fire({
            title: '¡Error!',
            text: "Ha ocurrido un error al momento de crear el " + personTitle + "." +
                "Por favor, revise los datos ingresados y vuelva a intentarlo.",
            icon: 'error',
        })
    }

    function handleSubmit(event) {
        const personObj = {
            "first_name": firstName,
            "last_name": lastName,
            "ci": ci,
            "email": email,
            "password": password,
            "phone": phone,
            "address": address,
        }
        if(props.personType === "student") {
            const studentObj = {...personObj, "type": "student"}
            studentService.createStudent(studentObj).then((result) => {
                successMessage();
            }).catch(() => {
                errorMessage();
            })
        }
        else if(props.personType === "teacher") {
            const teacherObj = {...personObj, "type": "teacher"}
            teacherService.createTeacher(teacherObj).then((result) => {
                successMessage();
            }).catch(() => {
                errorMessage();
            })
        }
        else if(props.personType === "administrative") {
            const teacherObj = {...personObj, "type": "administrative"}
            administrativeService.createAdministrative(teacherObj).then((result) => {
                successMessage();
            }).catch(() => {
                errorMessage();
            })
        }
        event.preventDefault();
    }

    return (
        <Container maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Crear {props.personTitle}
                </Typography>
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
                            Crear {props.personTitle}
                        </Button>
                    </MuiThemeProvider>
                </form>
            </div>
        </Container>
    )
}

export default CreatePerson