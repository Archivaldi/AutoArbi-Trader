import { makeStyles } from '@material-ui/core/styles';

const materialUIStyles = (theme, page) => {
    const drawerWidth = 240;
    const globalStyles = {
        root: {
            display: 'flex',
        },
        appBar: {
            backgroundColor: 'primary',
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            justifyContent: 'flex-start'
        },
        logo: {
            maxWidth: 50,
            padding: theme.spacing(1),
            paddingLeft: theme.spacing(0),
        },
        auto: {
            color: "#62bdf9"
        },
        arbiTrader: {
            color: "#0081cb"
        },
        exitIcon: {
            color: '#d9534f'
        }
    }
    switch (page) {
        case 'uploadStyles':
            return {
                ...globalStyles,
                content: {
                    ...globalStyles.content,
                    gridTemplateRows: '5vh 17.5vh 17.5vh 17.5vh 17.5vh'
                }
            }
        case 'dashboardStyles': {
            return {
                ...globalStyles,
                content: {
                    ...globalStyles.content,
                    gridTemplateRows: '5vh 38vh 38vh'
                }
            }
        }
    }
}

export const uploadStyles = makeStyles(theme => materialUIStyles(theme, 'uploadStyles'));
export const dashboardStyles = makeStyles(theme => materialUIStyles(theme, 'dashboardStyles'));