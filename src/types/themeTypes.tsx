interface IThemeTypes {
    colors: {
        main: string;
        black: string;
        white: string;
        error: string;
        graphite: string;
        lightGray: string;
        gray: string;
        strokeGray: string;
        copyrightGray: string;
    };
    fonts: {
        main: string;
        signUpButton: string;
    };
    fontSizes: {
        logo: string,
        mainHeader: string;
        secondaryHeader: string;
        cardHeader: string;
        button: string;
        tag: string;
        sidebarTag: string;
        date: string;
    };
    paddings: {
        formPadding: string;
        headerPadding: string;
        footerPadding: string;
        inputPudding: string;
    };
}

export default IThemeTypes;
