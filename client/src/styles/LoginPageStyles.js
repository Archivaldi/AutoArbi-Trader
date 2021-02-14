import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    page: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
    },
    root: {
        width: 300,
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    brand: {
        display: 'grid',
        gridAutoFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px'
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
    email: {
        display: 'flex',
        flexDirection: 'column'
    }
}));