import React from 'react'
import {useHistory} from "react-router-dom";
import {
    AppBar,
    CssBaseline,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    SwipeableDrawer,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles((theme) => ({
    headerRoot: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: "#245b80"
    },
    drawer: {
        width: 250,
    },
    toolbar: theme.mixins.toolbar,
}));

function Header(props) {
    const history = useHistory();
    const classes = useStyles();
    const theme = useTheme();
    const [state, setState] = React.useState({left: false})
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({...state, [anchor]: open });
    }
    const headerText = useMediaQuery(theme.breakpoints.up('sm')) ? "University Management System" : "UMS";

    function handleNavigation(to) {
        history.push("/" + to)
    }

    const drawer = (anchor) => (
        <div
            className={classes.drawer}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem button key="login" onClick={() => handleNavigation("login")}>
                    <ListItemText primary="Login" />
                </ListItem>
                <ListItem button key="create_student" onClick={() => handleNavigation("crear_estudiante")}>
                    <ListItemText primary="Crear Estudiante (Administrativo)" />
                </ListItem>
                <ListItem button key="create_teacher" onClick={() => handleNavigation("crear_docente")}>
                    <ListItemText primary="Crear Docente (Administrativo)" />
                </ListItem>
                <ListItem button key="create_administrative" onClick={() => handleNavigation("crear_administrativo")}>
                    <ListItemText primary="Crear Administrativo (Administrador)" />
                </ListItem>
                <ListItem button key="create_career" onClick={() => handleNavigation("crear_carrera")}>
                    <ListItemText primary="Crear Carrera (Administrador)" />
                </ListItem>
                <ListItem button key="create_course" onClick={() => handleNavigation("crear_curso")}>
                    <ListItemText primary="Crear Curso (Administrador)" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button key="Cerrar Sesión" onClick={() => handleNavigation("logout")}>
                    <ListItemText primary="Cerrar Sesión" />
                </ListItem>
            </List>
        </div>
    )

    return (
        <div className={classes.headerRoot}>
            <CssBaseline />
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        onClick={toggleDrawer("left", true)}
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {headerText}
                    </Typography>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer
                anchor="left"
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
                open={state['left']}
            >
                {drawer("left")}
            </SwipeableDrawer>
        </div>
    )
}

export default Header