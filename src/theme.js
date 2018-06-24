import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import teal from '@material-ui/core/colors/teal';


const theme = createMuiTheme({
    pallete: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: teal[500],
        }
    }
});

export { theme }