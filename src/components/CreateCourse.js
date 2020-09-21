import React, {useEffect, useState} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {
    Button,
    Container,
    createMuiTheme,
    CssBaseline,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    MuiThemeProvider,
    Select,
    TextField,
    Typography
} from "@material-ui/core";
import Swal from "sweetalert2";
import CourseService from "./services/CourseService";
import CareerService from "./services/CareerService";

const courseService = new CourseService();
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
    },
    formControl: {
        minWidth: '100%',
    },
}));

const submitButton = createMuiTheme({
    palette: {
        primary: {500: "#245b80"}
    },
})

function CreateCourse() {
    const classes = useStyles();
    const [courseName, setCourseName] = useState(null);
    const [courseCredits, setCourseCredits] = useState(null);
    const [career, setCareer] = useState("");
    const [career_list, setCareerList] = useState([]);

    useEffect(() => {
        careerService.getCareers().then((result) => {
            setCareerList(result.data)
        })
    }, [])

    function successMessage() {
        Swal.fire({
            title: "¡Curso creado con éxito!",
            icon: 'success',
        })
    }
    // TODO: CREATE DUPLICATED COURSE MESSAGE
    function errorMessage() {
        Swal.fire({
            title: '¡Error!',
            text: "Ha ocurrido un error al momento de crear el curso." +
                "Por favor, revise los datos ingresados y vuelva a intentarlo.",
            icon: 'error',
        })
    }

    function handleSubmit(event) {
        const courseObj = {
            "course_name": courseName,
            "course_credits": courseCredits,
            "career_pk": career,
        }
        courseService.createCourse(courseObj).then((result) => {
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
                    Crear curso
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="course_name"
                                label="Nombre"
                                name="course_name"
                                onChange={e => setCourseName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="course_credits"
                                label="Créditos"
                                name="course_credits"
                                onChange={e => setCourseCredits(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl required variant="outlined" className={classes.formControl}>
                                <InputLabel id="career-label">Carrera</InputLabel>
                                <Select
                                    labelId="career-label"
                                    id="career"
                                    value={career}
                                    onChange={e => setCareer(e.target.value)}
                                    label="Career"
                                >
                                    <MenuItem key="default" value="" disabled>
                                        Seleccione una opción
                                    </MenuItem>
                                    {career_list.map(element => (
                                        <MenuItem key={element.pk} value={element.pk}>
                                            {element.career_name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
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
                            Crear curso
                        </Button>
                    </MuiThemeProvider>
                </form>
            </div>
        </Container>
    )

}

export default CreateCourse