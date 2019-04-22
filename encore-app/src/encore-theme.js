import {createMuiTheme} from "@material-ui/core/styles/index";

// export const THEME = createMuiTheme({
//     palette: {
//         type: 'dark',
//         primary: { main: '#690375' }, // Purple and green play nicely together.
//         secondary: { main: '#53A2BE' }, // This is just green.A700 as hex.
//     },
//     typography: { useNextVariants: true },
// });

export const dark_blue = '#0A2239';
export const blue = '#53A2BE';
export const purple = '#690375';
export const pink = '#CB429F';
export const black = '#140016';
export const dark_gray = '#515151';
export const extra_dark_gray = '#241f25';

export const extra_light_blue = "#f0f2ff";
export const extra_light_pink = '#ffcaee';


export const THEME = createMuiTheme({
    palette: {
        type: 'dark',
        primary: { main: purple },
        secondary: { main: blue },
    },
    // typography: { useNextVariants: true },
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '"Ubuntu"', 'sans-serif', '"Bowlby One SC"', 'cursive'
        ].join(','),
        useNextVariants: true,
    },
    // overrides: {
    //     MuiButton: {
    //         // Name of the rule
    //         text: {
    //             // Some CSS
    //             background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //             borderRadius: 3,
    //             border: 0,
    //             color: 'white',
    //             height: 48,
    //             padding: '0 30px',
    //             boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    //         },
    //     },
    // },
});
