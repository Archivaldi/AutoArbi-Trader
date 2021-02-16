import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        alignItems: 'center',
        minWidth: '260px',
        marginBottom: '2em'
    },
    flex: {
        display: 'flex',
        flexWrap: 'wrap',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonMargin: {
        margin: '20px',
    },
    font: {
        fontSize: '3vw',
        [theme.breakpoints.up('lg')]: {
            fontSize: '2vw'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.5em'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1em'
        },
    },
    disAppear: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    icon: {
        fontSize: '100%'
    }
}));