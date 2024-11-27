import { createTheme } from "@mui/material";
import "@fontsource/cairo"; // Import the Cairo font, default weight is 400
import { primaryColor, secondaryColor } from "./constant";

// Create a theme with custom settings using MUI's createTheme function
const theme = createTheme({
    // Typography settings for the theme
    typography: {
        fontFamily: 'Cairo-Regular, Cairo', // Use the Cairo font for all typography
        fontWeightLight: 300, // Font weight for light text
        fontWeightRegular: 400, // Font weight for regular text
        fontWeightMedium: 500, // Font weight for medium text
        fontWeightBold: 700, // Font weight for bold text
    },
    // Color palette for the theme
    palette: {
        primary: {
            main: primaryColor, // Main color for primary elements
        },
        secondary: {
            main: secondaryColor, // Main color for secondary elements
        },
    },
    // Component-specific style overrides
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: "none", //
                    textTransform: 'none', fontSize: '16px',
                    fontWeight: '500',
                    // Style overrides for buttons with specific classes
                    '&.MuiButton-primary': {
                        backgroundColor: '#051274', // Background color for primary buttons
                        border: `1px solid ${primaryColor}`, // Border color for primary buttons
                        color: primaryColor, // Text color for primary buttons
                    },
                    '&.MuiButton-outlined': {
                        // Style overrides for outlined buttons
                        '&:hover': {
                            backgroundColor: primaryColor, // Background color on hover
                            borderColor: primaryColor, // Border color on hover
                            color: "#fff", // Text color on hover
                        },
                    },
                    '&.MuiButton-text-white': {
                        color: '#fff', // Text color for buttons with the "text-white" class
                    }
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    maxWidth: '1343px !important' ,// Override max width to make container responsive
                    paddingLeft: '10px !important' ,
                    paddingRight: '10px !important',
                    '@media (min-width:600px)': { // For 'sm' breakpoint (600px)
                        maxWidth: 'calc(100% - 20%) !important',
                    },
                    '@media (min-width:1200px)': { // For 'lg' breakpoint (1200px)
                        maxWidth: '1343px !important', // Specific for 'lg' size
                    },
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: [
                        'rgba(0, 0, 0, 0.1) -5px 10px 15px -3px', // Light shadow
                        'rgba(0, 0, 0, 0.05) 0px 4px 6px -2px' // Darker shadow
                    ],
                    border: '.0625rem solid #0000000d !important' // Border for cards
                }
            }
        },
        
    },
});

export default theme; // Export the theme to be used throughout the application
