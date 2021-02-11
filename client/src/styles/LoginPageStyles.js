import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    page: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
    },
    root: {
        minWidth: 275,
        maxWidth: 300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    brand: {
        display: 'grid',
        gridAutoFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center'
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
    buttons: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        margin: '6px'
    },
    dialog: {
        minHeight: 160
    }
}));