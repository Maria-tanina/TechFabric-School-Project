import IThemeTypes from "@customTypes/themeTypes";

const theme: IThemeTypes = {
  colors: {
    main: "#FEDE24",
    black: "#060606",
    white: "#FFFFFF",
    error: "#EA0000",
    lightYellow: "#fede2417",
    graphite: "#242424",
    lightGray: "#F5F5F5",
    gray: "#676767",
    strokeGray: "#D4D4D4",
    copyrightGray: "#939393",
  },

  fonts: {
    main: "Archivo, sans-serif",
    signUpButton: "Roboto, sans-serif",
  },

  fontSizes: {
    logo: "40px",
    mainHeader: "52px",
    secondaryHeader: "24px",
    cardHeader: "32px",
    button: "15px",
    tag: "16px",
    sidebarTag: "20px",
    date: "16px",
  },

  paddings: {
    mainPadding: "60px 140px 100px",
    tabletMainPadding: "60px 30px 100px",
    formPadding: "52px 140px",
    headerPadding: "28px 140px",
    tabletHeaderPadding: "28px 30px",
    footerPadding: "52px 140px 28px",
    tabletFooterPadding: "52px 30px 28px",
    inputPadding: "10px 12px",
    buttonPadding: "10px 16px",
  },

  media: {
    tablet: "@media(min-width: 900px)",
    desktop: "@media(min-width: 1280px)",
    desktopLarge: "@media(min-width: 1600px)",
  },
};

export default theme;
