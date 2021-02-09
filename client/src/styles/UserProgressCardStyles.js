import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gap: '1em',
        minWidth: '260px'
    },
    header: {
        display: 'grid',
        gridTemplateColumns: '50% 50%'
    },
    progress: {
        display: 'grid',
        margin: '0 50px 0 50px',
    },
    documents: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    items: {
        display: 'flex',
        flexDirection: 'row',
    },
    userNameFont: {
        fontSize: '3vw',
        [theme.breakpoints.down('lg')]: {
            fontSize: '2vw'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5em'
        },
    },
    font: {
        fontSize: '2.5vw',
        [theme.breakpoints.down('lg')]: {
            fontSize: '1.5vw'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1em'
        },
    },
    accent: {
        color: '#62bdf9'
    }
}));