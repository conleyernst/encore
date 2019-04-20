import {createMuiTheme} from "@material-ui/core/styles/index";

export const THEME = createMuiTheme({
    palette: {
        type: 'dark',
        primary: { main: '#690375' }, // Purple and green play nicely together.
        secondary: { main: '#53A2BE' }, // This is just green.A700 as hex.
    },
    typography: { useNextVariants: true },
});

export const dark_blue = '#0A2239';
export const blue = '#53A2BE';
export const purple = '#690375';
export const pink = '#CB429F';
export const black = '#13070C';

export const extra_light_blue = "#f0f2ff";
