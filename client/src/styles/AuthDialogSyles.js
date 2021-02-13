import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    content: {
        minHeight: 230
    },
    typos: {
        color: 'rgba(255, 255, 255, 0.7)'
    },
    currentChar: {
        borderTopLeftRadius: '2px',
        borderBottomLeftRadius: '2px',
        background: '#62bdf9',
        color: '#212121',
    },
    charsToBeTyped: {
        background: '#0081cb',
        borderTopRightRadius: '2px',
        borderBottomRightRadius: '2px'
    },
    welcome: {
        textAlign: 'center'
    }
}));