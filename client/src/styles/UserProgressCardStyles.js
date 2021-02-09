import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gap: '1em'
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
        justifyContent: 'space-around'
    },
    items: {
        display: 'flex',
        flexDirection: 'row',
    }
}));