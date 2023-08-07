import IThemeTypes from "@customTypes/themeTypes";

const theme: IThemeTypes = {
    colors: {
        main: '#FEDE24',
        black: '#060606',
        white: '#FFFFFF',
        error: '#EA0000',
        graphite: '#242424',
        lightGray: '#F5F5F5',
        gray: '#676767',
        strokeGray: '#D4D4D4',
        copyrightGray: '#939393',
    },
    fonts: {
        main: 'Archivo, sans-serif',
        signUpButton: 'Roboto, sans-serif',
    },
    fontSizes: {
        logo: '40px',
        mainHeader: '52px',
        secondaryHeader: '24px',
        cardHeader: '32px',
        button: '15px',
        tag: '16px',
        sidebarTag: '20px',
        date: '16px',
    },
    paddings: {
        formPadding: '52px 140px',
        headerPadding: '28px 0',
        footerPadding: '52px 0 28px',
        inputPadding: '10px 16px',
    }
};

export default theme;
