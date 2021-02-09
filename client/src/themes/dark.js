import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#272727',
    },
    secondary: {
      main: '#00b0ff',
    }
  },
});

export default theme;
