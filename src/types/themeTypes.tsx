interface IThemeTypes {
  colors: {
    main: string;
    black: string;
    white: string;
    error: string;
    lightYellow: string;
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
    logo: string;
    mainHeader: string;
    secondaryHeader: string;
    cardHeader: string;
    button: string;
    tag: string;
    sidebarTag: string;
    date: string;
  };

  paddings: {
    mainPadding: string;
    tabletMainPadding: string;
    formPadding: string;
    headerPadding: string;
    tabletHeaderPadding: string;
    footerPadding: string;
    tabletFooterPadding: string;
    inputPadding: string;
    buttonPadding: string;
  };

  media: {
    tablet: string;
    desktop: string;
    desktopLarge: string;
  };
}

export default IThemeTypes;
