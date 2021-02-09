import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        minWidth: 275,
        display: 'grid'
    },
    grid: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    documentName: {
        fontSize: '3vw'
    },
    icon: {
        fontSize: '100%'
    }
});