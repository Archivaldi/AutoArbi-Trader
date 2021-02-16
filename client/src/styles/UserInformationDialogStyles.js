import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '300px',
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    logoutButton: {
        color: '#d9534f'
    },
    content: {
        maxHeight: 500
    }
}));
