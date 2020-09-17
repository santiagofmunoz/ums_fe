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
import CareerService from "./services/CareerService";

const careerService = new CareerService();

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

function CreateCareer() {
    const classes = useStyles();
    const [careerName, setCareerName] = useState(null);
    const [careerCredits, setCareerCredits] = useState(null);

    function successMessage() {
        Swal.fire({
            title: "¡Carrera creada con éxito!",
            icon: 'success',
        })
    }

    function errorMessage() {
        Swal.fire({
            title: '¡Error!',
            text: "Ha ocurrido un error al momento de crear la carrera." +
                "Por favor, revise los datos ingresados y vuelva a intentarlo.",
            icon: 'error',
        })
    }

    function handleSubmit(event) {
        const careerObj = {
            "career_name": careerName,
            "career_credits": careerCredits,
        }
        careerService.createCareer(careerObj).then((result) => {
            successMessage();
        }).catch(() => {
            errorMessage();
        })
        event.preventDefault();
    }

    return (
        <Container maxWidth="sm">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Crear carrera
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="career_name"
                                label="Nombre"
                                name="career_name"
                                onChange={e => setCareerName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="career_credits"
                                label="Créditos"
                                name="career_credits"
                                onChange={e => setCareerCredits(e.target.value)}
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
                            Crear carrera
                        </Button>
                    </MuiThemeProvider>
                </form>
            </div>
        </Container>
    )
}

export default CreateCareer