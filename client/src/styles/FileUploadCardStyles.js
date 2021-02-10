import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'grid',
        minWidth: '260px'
    },
    flex: {
        display: 'flex',
        flexWrap: 'wrap',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '2vw',
        [theme.breakpoints.up('lg')]: {
            margin: '1vw'
        },
        [theme.breakpoints.down('sm')]: {
            margin: '2.5vw'
        },
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
    icon: {
        fontSize: '100%'
    }
}));