import { ThemeOptions, createTheme } from '@mui/material/styles';
import { createGlobalStyle } from 'styled-components';
import { colors, container } from './style-variables';

interface ThemeVariables {}

interface CustomColors {
  system?: {
    white: string;
    darkGray2: string;
    backgroundGrey: string;
    skyBlue: string;
    midnightBlue: string;
    teal: string;
    secondaryPurple: string;
    lavendar: string;
    lightCyan: string;
    marineBlue: string;
    mossGreen: string;
    grassGreen: string;
    iceBerg: string;
    silver: string;
    charcoal: string;
    steelBlue: string;
    coolGray: string;
    lightGray: string;
    lightGray2: string;
    defaultGray: string;
    navyBlue: string;
    brightNavyBlue: string;
    darkCerulean: string;
    whisper: string;
    tertiaryGrey: string;
    tertiaryHover: string;
    doveGray: string;
    smoke: string;
    green: string;
    mint: string;
    kellyGreen: string;
    lightOrange: string;
    paleRed: string;
    platinum: string;
    violet: string;
    red: string;
    dimFadedBlack: string;
    lightSkyBlue: string;
    lightFadedGray: string;
    sandyBrown: string;
    lightGrey: string;
    neutralGray: string;
  };
  chart?: {
    orange: string;
    pink: string;
    blue: string;
    purple: string;
    darkRed: string;
    red: string;
    green: string;
    darkPurple: string;
  };
  text?: {
    primaryText: string;
    contrastText: string;
  };
  alertColors?: {
    success: string;
    failure: string;
    noValue: string;
    pending: string;
    info: string;
    warning: string;
  };
}
interface CustomComponents {
  iconButton?: {
    primaryLarge?: {
      color?: string;
      hoverColor?: string;
      activeColor?: string;
      backgroundColor?: string;
      hoverBackgroundColor?: string;
      activeBackgroundColor?: string;
    };
    primaryMedium: {
      color?: string;
      hoverColor?: string;
      activeColor?: string;
      backgroundColor?: string;
      hoverBackgroundColor?: string;
      activeBackgroundColor?: string;
    };
    primarySmall: {
      color?: string;
      hoverColor?: string;
      activeColor?: string;
      backgroundColor?: string;
      hoverBackgroundColor?: string;
      activeBackgroundColor?: string;
    };
    secondaryLarge: {
      color?: string;
      hoverColor?: string;
      activeColor?: string;
      backgroundColor?: string;
      hoverBackgroundColor?: string;
      activeBackgroundColor?: string;
    };
    secondaryMedium: {
      color?: string;
      hoverColor?: string;
      activeColor?: string;
      backgroundColor?: string;
      hoverBackgroundColor?: string;
      activeBackgroundColor?: string;
    };
    secondarySmall: {
      color?: string;
      hoverColor?: string;
      activeColor?: string;
      backgroundColor?: string;
      hoverBackgroundColor?: string;
      activeBackgroundColor?: string;
    };
    tertiaryMedium: {
      color?: string;
      hoverColor?: string;
      activeColor?: string;
      backgroundColor?: string;
      hoverBackgroundColor?: string;
      activeBackgroundColor?: string;
    };
    tertiarySmall: {
      color?: string;
      hoverColor?: string;
      activeColor?: string;
      backgroundColor?: string;
      hoverBackgroundColor?: string;
      activeBackgroundColor?: string;
    };
  };
  button?: {
    primary?: {
      color?: string;
      backgroundColor?: string;
      hoverBackgroundColor?: string;
      disabledBackgroundColor?: string;
      disabledColor?: string;
    };
    secondary: {
      color?: string;
      backgroundColor?: string;
      hoverBackgroundColor?: string;
      disabledBackgroundColor?: string;
      disabledColor?: string;
    };
    tertiary?: {
      color?: string;
      backgroundColor?: string;
      hoverBackgroundColor?: string;
      disabledBackgroundColor?: string;
      disabledColor?: string;
    };
    text?: {
      secondary?: {
        color?: string;
      };
      primary?: {
        color?: string;
      };
      approved?: {
        color?: string;
        onHoverColor?: string;
      };
    };
    dialog?: {
      color?: string;
    };
  };
  chips?: {
    primary?: {
      color?: string;
      backgroundColor?: string;
    };
    secondary?: {
      color?: string;
      backgroundColor?: string;
    };
    tags?: {
      color?: string;
      backgroundColor?: string;
      additionalChip?: {
        color?: string;
        backgroundColor?: string;
      };
    };
    statusChips?: {
      new: {
        color?: string;
        backgroundColor?: string;
        border?: string;
      };
      approved?: {
        color?: string;
        backgroundColor?: string;
        border?: string;
      };
      pending: {
        color?: string;
        backgroundColor?: string;
        border?: string;
      };
      canceled: {
        color?: string;
        backgroundColor?: string;
        border?: string;
      };
      failed: {
        color?: string;
        backgroundColor?: string;
        border?: string;
      };
    };
  };

  tooltip?: {
    color?: string;
    backgroundColor?: string;
    arrowColor?: string;
  };
  box?: {
    container?: {
      color?: string;
      backgroundColor?: string;
    };
    titleBar?: {
      backgroundColor?: string;
      color?: string;
    };
  };
  typography?: {
    color?: string;
    success?: {
      color?: string;
    };
    status?: {
      available?: {
        color?: string;
      };
    };
  };
  grid?: {
    content?: {
      color?: string;
      backgroundColor?: string;
    };
  };
  circularProgress?: {
    color?: string;
    backgroundColor?: string;
  };
  icons?: {
    primary?: {
      color?: string;
      backgroundColor?: string;
    };
    secondary?: {
      color?: string;
      backgroundColor?: string;
    };
    tertiary?: {
      color?: string;
      backgroundColor?: string;
    };
    success?: {
      onHover?: {
        color?: string;
      };
    };
  };
  listItem?: {
    backgroundColor?: string;
    color?: string;
  };
  avatar?: {
    backgroundColor?: string;
    color?: string;
    green?: {
      backgroundColor?: string;
    };
    primary?: {
      backgroundColor?: string;
    };
  };
  card?: {
    cardContent?: {
      hoverColor?: string;
      hoverBackgroundColor?: string;
      hoverBorderColor?: string;
    };
  };
  textfield?: {
    blankField?: {
      color?: string;
      backgroundColor?: string;
    };
    active?: {
      color?: string;
      backgroundColor?: string;
    };
  };
  accordion?: {
    primary?: {
      color?: string;
      backgroundColor?: string;
    };
    secondary?: {
      color?: string;
      backgroundColor?: string;
    };
  };
  select?: {
    statusDropdown?: {
      inActive?: {
        backgroundColor?: string;
        color?: string;
      };

      oldStatusIndicator?: {
        color?: string;
        backgroundColor?: string;
      };
      newStatusIndicator?: {
        onHoverBackgroundColor?: {
          backgroundColor?: string;
        };
        color?: string;
        backgroundColor?: string;
        active?: {
          color?: string;
          backgroundColor?: string;
        };
      };
    };
  };
  paper?: {
    status?: {
      green?: {
        backgroundColor?: string;
      };
    };
  };
  icon?: {
    green?: {
      color?: string;
      backgroundColor?: string;
    };
  };
  checkIcon?: {
    onHover?: {
      backgroundColor?: string;
      color?: string;
    };
  };
  tabs?: {
    title?: { color: string };
    notification?: {
      backgroundColor?: string;
      color?: string;
    };
    border?: { color: string };
  };
  snackBar?: {
    light?: {
      color?: string;
      backgroundColor?: string;
    };
    dark?: {
      color?: string;
      backgroundColor?: string;
    };
  };
  buttonDropdown?: {
    onHover?: {
      backgroundColor?: string;
    };
    selected?: {
      backgroundColor?: string;
    };
  };
}
// Palette overrides
declare module '@mui/material/styles' {
  interface Palette {
    system?: Palette['primary'];
    framework?: Palette['primary'];
    components?: Palette['primary'];
    tertiary?: Palette['primary'];
    disabled?: Palette['primary'];
    charcoal?: Palette['primary'];
  }
  interface PaletteOptions {
    system?: PaletteOptions['primary'];
    framework?: PaletteOptions['primary'];
    components?: PaletteOptions['primary'];
    tertiary?: PaletteOptions['primary'];
    disabled?: PaletteOptions['primary'];
    charcoal?: PaletteOptions['primary'];
    success?: PaletteOptions['primary'];
  }

  interface PaletteColor extends CustomColors, CustomComponents {
    primary?: string;
    white?: string;
    shadedGray?: string;
    lightBlue?: string;
    lightGray?: string;
    lightGray2?: string;
    lightBlack?: string;
    black?: string;
    fadedBlue?: string;
    darkCharcoalGray?: string;
    blue?: string;
    gray?: string;
    fadedGray?: string;
    davyGray?: string;
    navyBlue?: string;
    lightNavyBlue?: string;
    lightFadedGray?: string;
    sandyBrown?: string;
    violet?: string;
    spandexGreen?: string;
    hoverSpandexGreen?: string;
    offWhite?: string;
    darkGray?: string;
    lightViolet?: string;
    paleGray?: string;
    buttonGray?: string;
    buttonDarkGray?: string;
    neutralGray?: string;
    steelBlue?: string;
    lightSteelBlue?: string;
    green?: string;
    errorRed?: string;
    darkSlateBlue?: string;
    paleBlue?: string;
    deepBlue?: string;
    lightGrey?: string;
    richBlack?: string;
    lightGrey2?: string;
    mediumGrey?: string;
    darkGrey?: string;
    lightSkyBlue?: string;
    hoverGrey?: string;
    fadedGrey?: string;
    blurGrey?: string;
    semiTransparentBlack?: string;
    darkRed?: string;
    cyanBlue?: string;
    lightPaleBlue?: string;
    errorIconRed?: string;
    guardsmanRed?: string;
    darkBlue?: string;
    smokeWhite?: string;
    hoverGray?: string;
    orange?: string;
    suvaGrey?: string;
    darkGreen?: string;
    darkCharcoal?: string;
    hoverBlue?: string;
    secondarySnack?: string;
    borderColor?: string;
    borderColor1?: string;
    greenChip?: string;
    grayChip?: string;
    grayChipBorder?: string;
    chipBorder?: string;
    cardBackground?: string;
    red?: string;
    lightGreen?: string;
    grayShaded?: string;
    paleGreen?: string;
    paleDarkGreen?: string;
    grayishLimeGreen?: string;
    darkGrayFaded?: string;
    lightGrayFaded?: string;
    greenShade?: string;
    paleOrange?: string;
    paleRed?: string;
    doveGray?: string;
    lightPink?: string;
    bluePrimary?: string;
    blueSecondary?: string;
    paperBackground?: string;
    lightblueBackground?: string;
    silverSand?: string;
    textBlue?: string;
    orangeWarning?: string;
    dimGrey?: string;
    dimFadedBlack?: string;
    brightGray?: string;
    orangeBrown?: string;
    skyBlue?: string;
    darkGray2?: string;
    dimLightGray?: string;
    dimSkyBlue?: string;
    paleMint?: string;
    lightRed?: string;
    silver?: string;
    forestGreen?: string;
    warmOrange?: string;
    backgroundGrey?: string;
    azureBlue?: string;
    mutedVoilet?: string;
    mutedAzureBlue?: string;
    darkBlackBlue?: string;
    lightPaleGreen?: string;
    lightPaleRed?: string;
    lightGreyStatus?: string;
    skyBlueWithOpacity?: string;
    lightGreyTileBackground?: string;
    lightDeepGray?: string;
    charCoalGray?: string;
    blackWithOpacity?: string;
    dimDarkRed?: string;
    dimGrey2?: string;
    pewter?: string;
    lighterGreen?: string;
    darkerGreen?: string;
    irishGreen?: string;
    paleDarkBlue?: string;
    cornflowerBlue?: string;
    darkGreenForIcon?: string;
    crimson?: string;
    navyBlueWithOpacity?: string;
    mmOrange?: string;
  }

  interface SimplePaletteColorOptions
    extends PaletteColor,
      CustomColors,
      CustomComponents {}
}
// Breakpoint  overrides
declare module '@mui/material/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}
//Button variant overrides
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    tertiary: true;
    iconText: true;
  }
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}
declare module '@mui/material/MenuItem' {
  interface MenuItemPropsColorOverrides {
    charcoal: true;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsColorOverrides {
    charcoal: true;
    success: true;
    error: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    disabled: true;
    tertiary: true;
  }
}
declare module '@mui/material/DialogTitle' {
  interface DialogPropsColorOverrides {
    secondary: true;
  }
}
declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    tags: true;
    additionalchip: true;
    new: true;
    pending: true;
    approved: true;
    canceled: true;
    failed: true;
  }
}

declare module '@mui/material/Select' {
  interface SelectPropsVariantOverrides {
    active: true;
    inactive: true;
  }
}
declare module '@mui/material/Avatar' {
  interface AvatarPropsVariantOverrides {
    green: true;
    primary: true;
  }
}
declare module '@mui/material/Grid' {
  interface GridPropsVariantOverrides {
    content: true;
    formcontainer: true;
    container: true;
  }
}
declare module '@mui/material/Card' {
  interface CardPropsVariantOverrides {
    cardhover: true;
  }
}
declare module '@mui/material/Box' {
  interface BoxPropsVariantOverrides {
    wrapper: true;
  }
}
declare module '@mui/material/DialogTitle' {
  interface DialogTitlePropsColorOverrides {
    white: true;
    primary: true;
    secondary: true;
  }
}

declare module '@mui/material/CircularProgress' {
  interface CircularProgressPropsColorOverrides {
    white: true;
  }
}
declare module '@mui/material/Icon' {
  interface IconPropsColorOverrides {
    green: true;
  }
}
declare module '@mui/material' {
  interface AccordianPropsVariantOverrides {
    accordiansummary: true;
  }
}

declare module '@mui/material/Badge' {
  interface BadgePropsVariantOverrides {
    notification: true;
  }
}

declare module '@mui/material/Tooltip' {
  interface TooltipComponentsPropsOverrides {
    'data-variant': 'standard';
  }
}
declare module '@mui/material/Snackbar' {
  interface SnackbarPropsColorOverrides {
    light: true;
    dark: true;
  }
}

declare module '@mui/material/SnackbarContent' {
  interface SnackbarContentPropsColorOverrides {
    light: true;
    dark: true;
  }
}

declare module '@mui/material/styles' {
  interface Theme extends ThemeVariables {}
  interface ThemeOptions extends ThemeVariables {}
}

declare module '@mui/material/Divider' {
  interface DividerPropsVariantOverrides {
    wideMargin: true;
  }
}

const inputRoot = {
  backgroundColor: 'rgba(0,0,0, 0.04)',
  '&:hover': {
    backgroundColor: 'rgba(0,0,0, 0.10)',
    '&:before': {
      borderBottom: '1px solid #009AD9 !important',
    },
    '&.Mui-disabled:before': {
      borderBottom: '1px dotted rgba(0, 0, 0, 0.87) !important',
    },
  },
  '&.Mui-focused': {
    backgroundColor: 'rgba(0,0,0, 0.10)',
  },
};

export let theme = createTheme({
  spacing: 6,
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#006FB9',
    },
    secondary: {
      main: '#0098DB',
    },
    disabled: {
      main: '#cccccc',
    },
    common: {
      white: '#FFFFFF',
    },
    framework: {
      main: '#fff',
      system: {
        white: '#FFFFFF',
        backgroundGrey: '#F4F5F7',
        darkGray2: '#bdbdbd ',
        skyBlue: '#0098DB',
        midnightBlue: '#003E68',
        teal: '#008B95',
        secondaryPurple: '#6639B7',
        lavendar: '#AC98DB',
        lightCyan: '#5EB6E4',
        marineBlue: '#005BBB',
        mossGreen: '#7AB800',
        grassGreen: '#34B233',
        iceBerg: '#EBF4FD',
        silver: '#CCCCCC',
        charcoal: '#333333',
        steelBlue: '#41A2DF',
        coolGray: '#75787B',
        lightGray: '#E2E2E2',
        lightGray2: '#d0d0d0',
        defaultGray: '#C4C6C9',
        whisper: '#F5F5F5',
        tertiaryGrey: '#888888',
        tertiaryHover: '#75787B',
        doveGray: '#555555',
        smoke: '#EFEFEF',
        green: '#5FB661',
        mint: '#E9F9EA',
        kellyGreen: '#13A01E',
        lightOrange: '#FFF4E5',
        paleRed: '#FAE5E7',
        platinum: '#F7F7F7',
        violet: '#52429A',
        red: '#CC0000',
        dimFadedBlack: '#0000000A',
        navyBlue: '#006FB9',
        brightNavyBlue: '#189AD9',
        darkCerulean: '#1B3C69',
        lightSkyBlue: '#EBF4FA',
        lightFadedGray: '#E6E6E6',
        sandyBrown: '#F39E44',
        lightGrey: '#CCCCCC',
        neutralGray: '#888888',
      },
      chart: {
        orange: '#F28D17',
        pink: '#FD27EB',
        blue: '#4BBAEB',
        purple: '#A3A1FB',
        darkRed: '#AB0000',
        red: '#CC0000',
        green: '#38B449',
        darkPurple: '#9E99CA',
      },
      alertColors: {
        success: '#5FB661',
        failure: '#F4574A',
        noValue: '#75787B',
        pending: '#F28D25',
        info: '#006FB9',
        warning: '#FFA500',
      },
    },
    system: {
      primary: '#006FB9',
      main: '#009AD9',
      shadedGray: '#E2E2E2',
      white: '#FFFFFF',
      lightGray: '#FAFAFA',
      lightBlack: '#00000040',
      lightBlue: '#009AD9',
      deepBlue: '#1B3E68',
      lightPaleBlue: '#CEDEEF',
      gray: '#F4F5F7',
      black: '#333333',
      darkCharcoalGray: '#353535',
      fadedBlue: '#F4FBFF',
      lightPaleGreen: '#EAF7EA',
      blue: '#199AD9',
      fadedGray: '#E0E0E0',
      davyGray: '#555555',
      navyBlue: '#006FB9',
      lightNavyBlue: '#0F6FB9',
      lightFadedGray: '#e6e6e6',
      lightDeepGray: '#f8f7f7',
      charCoalGray: '#444',
      violet: '#52429A',
      offWhite: '#FCFCFD',
      darkGray: '#333333',
      lightViolet: '#F4F2FF',
      buttonGray: '#8E9195',
      buttonDarkGray: '#75787B',
      paleGray: '#ECECEC',
      neutralGray: '#888888',
      steelBlue: '#41A2DF',
      lightSteelBlue: '#f1f6fa',
      green: '#5FB661',
      errorRed: '#d32f2f',
      darkSlateBlue: '#1D4659',
      paleBlue: '#E5F0F8',
      richBlack: '#0A090A',
      lightGrey: '#CCCCCC',
      lightGrey2: '#EFEFEF',
      mediumGrey: '#B8BABC',
      darkGrey: '#8C8C8C',
      lightSkyBlue: '#003E68',
      hoverGrey: '#E9EDF4',
      fadedGrey: '#B9BBBC',
      blurGrey: '#9F9F9F',
      semiTransparentBlack: '#0000004D',
      darkRed: '#CC0000',
      cyanBlue: '#008B95',
      errorIconRed: '#F4574A',
      lightPaleRed: '#FDEDE9',
      guardsmanRed: '#D90000',
      orange: '#FC9508',
      suvaGrey: '#929292',
      darkGreen: '#1E7805',
      darkCharcoal: '#333333',
      darkBlue: '#2196f3',
      smokeWhite: '#f5f5f5',
      hoverGray: '#E5E8EB',
      hoverBlue: '#197DC0',
      secondarySnack: '#9B9B9B',
      borderColor: '#e3dfdf',
      borderColor1: '#D9D9D9',
      grayChip: '#F7F7F7',
      grayChipBorder: '#999999',
      chipBorder: '#CBCCCC',
      cardBackground: '#EFF4F9',
      red: '#ff0000',
      grayShaded: '#F0F0F0',
      paleDarkGreen: '#008000',
      grayishLimeGreen: '#8f9a8e',
      darkGrayFaded: '#bababa',
      brightGray: '#EFEFEF',
      lightGrayFaded: '#f2f2f2',
      paleOrange: '#FFF4E5',
      orangeBrown: '#DA6918',
      paleRed: '#FAE5E7',
      doveGray: '#666666',
      lightPink: '#FDECE9',
      bluePrimary: '#E5EEF6',
      blueSecondary: '#ccddee',
      paperBackground: '#F5F5F5',
      lightblueBackground: '#d9e9f5',
      silverSand: '#C2C4C6',
      textBlue: '#1379BD',
      orangeWarning: '#F28D17',
      dimGrey: '#707070',
      dimFadedBlack: '#0000000A',
      skyBlue: '#EBF4FA',
      dimLightGray: '#EAEAEA',
      dimSkyBlue: '#D8EBF7',
      paleMint: '#E8F6E7',
      lightRed: '#CC00141A',
      silver: '#e5e5e5',
      forestGreen: '#16A019',
      warmOrange: '#F28D25',
      backgroundGrey: '#747474',
      azureBlue: '#05528B',
      mutedVoilet: '#AC98DB',
      mutedAzureBlue: '#003C69',
      darkBlackBlue: '#00000029',
      lightGreyStatus: '#CBC6E1',
      skyBlueWithOpacity: '#006FB914',
      lightGreyTileBackground: '#FDFBFC',
      blackWithOpacity: '#1919191A',
      dimDarkRed: '#CC0813',
      dimGrey2: '#C0C0C0',
      pewter: '#f4f5f738',
      lighterGreen: '#EDF7ED',
      darkerGreen: '#1D4620',
      irishGreen: '#13a007',
      paleDarkBlue: '#306FB9',
      cornflowerBlue: '#449ee0',
      darkGreenForIcon: '#008000',
      crimson: '#990000',
      navyBlueWithOpacity: '#006FB91A',
      mmOrange: '#fc9003',
    },
  },
  typography: {
    body1: {
      fontSize: '14px',
    },
    body2: {
      fontSize: '12px',
    },
  },
});
theme = createTheme(theme, {
  palette: {
    tertiary: {
      main: theme.palette.framework.system.tertiaryGrey,
      contrastText: theme.palette.framework.system.white,
    },
    charcoal: {
      main: theme.palette.framework.system.charcoal,
    },
    success: {
      main: theme.palette.framework.alertColors.success,
    },

    components: {
      iconButton: {
        primaryLarge: {
          color: theme.palette.system.white,
          hoverColor: theme.palette.system.white,
          activeColor: theme.palette.system.white,
          backgroundColor: theme.palette.primary.main,
          hoverBackgroundColor: theme.palette.framework.system.midnightBlue,
          activeBackgroundColor: theme.palette.framework.system.midnightBlue,
        },
        primaryMedium: {
          color: theme.palette.primary.white,
          hoverColor: theme.palette.primary.white,
          activeColor: theme.palette.primary.white,
          backgroundColor: theme.palette.primary.main,
          hoverBackgroundColor: theme.palette.framework.system.midnightBlue,
          activeBackgroundColor: theme.palette.framework.system.midnightBlue,
        },
        primarySmall: {
          color: theme.palette.system.doveGray,
          hoverColor: theme.palette.primary.main,
          activeColor: theme.palette.primary.main,
          backgroundColor: 'transparent',
          hoverBackgroundColor: 'transparent',
          activeBackgroundColor: 'transparent',
        },
        secondaryLarge: {
          color: theme.palette.primary.main,
          hoverColor: theme.palette.primary.main,
          activeColor: theme.palette.primary.main,
          backgroundColor: 'transparent',
          hoverBackgroundColor: theme.palette.system.paleBlue,
          activeBackgroundColor: theme.palette.system.paleBlue,
        },
        secondaryMedium: {
          color: theme.palette.primary.main,
          hoverColor: theme.palette.primary.main,
          activeColor: theme.palette.primary.main,
          backgroundColor: 'transparent',
          hoverBackgroundColor: theme.palette.system.paleBlue,
          activeBackgroundColor: theme.palette.system.paleBlue,
        },
        secondarySmall: {
          color: theme.palette.system.doveGray,
          hoverColor: theme.palette.primary.main,
          activeColor: theme.palette.primary.main,
          backgroundColor: 'transparent',
          hoverBackgroundColor: theme.palette.system.paleBlue,
          activeBackgroundColor: theme.palette.system.paleBlue,
        },
        tertiaryMedium: {
          color: theme.palette.primary.black,
          hoverColor: theme.palette.primary.main,
          activeColor: theme.palette.primary.main,
          backgroundColor: 'transparent',
          hoverBackgroundColor: theme.palette.system.paleBlue,
          activeBackgroundColor: theme.palette.system.paleBlue,
        },
        tertiarySmall: {
          color: theme.palette.framework.system.charcoal,
          hoverBackgroundColor: theme.palette.framework.system.lightFadedGray,
        },
      },
      button: {
        primary: {
          color: theme.palette.framework.system.white,
          backgroundColor: theme.palette.primary.main,
          hoverBackgroundColor: theme.palette.framework.system.midnightBlue,
          disabledBackgroundColor: theme.palette.framework.system.tertiaryGrey,
          disabledColor: theme.palette.framework.system.backgroundGrey,
        },
        secondary: {
          color: theme.palette.framework.system.white,
          backgroundColor: theme.palette.secondary.main,
          hoverBackgroundColor: theme.palette.primary.main,
          disabledBackgroundColor: theme.palette.framework.system.tertiaryGrey,
          disabledColor: theme.palette.framework.system.backgroundGrey,
        },
        tertiary: {
          color: theme.palette.framework.system.white,
          backgroundColor: theme.palette.framework.system.tertiaryGrey,
          hoverBackgroundColor: theme.palette.framework.system.tertiaryHover,
          disabledBackgroundColor: theme.palette.framework.system.tertiaryGrey,
          disabledColor: theme.palette.framework.system.backgroundGrey,
        },
        text: {
          secondary: {
            color: theme.palette.framework.system.tertiaryGrey,
          },
          primary: {
            color: theme.palette.primary.main,
          },
          approved: {
            color: theme.palette.framework.system.kellyGreen,
          },
        },
        dialog: {
          color: theme.palette.framework.system.doveGray,
        },
      },
      chips: {
        primary: {
          color: theme.palette.framework.system.white,
          backgroundColor: theme.palette.primary.main,
        },
        secondary: {
          color: theme.palette.framework.system.white,
          backgroundColor: theme.palette.secondary.main,
        },
        tags: {
          backgroundColor: theme.palette.system.grayShaded,
          color: theme.palette.framework.system.charcoal,
          additionalChip: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.system.grayShaded,
          },
        },
        statusChips: {
          new: {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.framework.system.iceBerg,
          },
          pending: {
            color: theme.palette.framework.chart.orange,
            backgroundColor: theme.palette.framework.system.lightOrange,
          },
          approved: {
            color: theme.palette.framework.system.kellyGreen,
            backgroundColor: theme.palette.framework.system.mint,
          },
          canceled: {
            color: theme.palette.framework.system.tertiaryGrey,
            backgroundColor: theme.palette.framework.system.platinum,
          },
          failed: {
            color: theme.palette.framework.alertColors.failure,
            backgroundColor: theme.palette.framework.system.paleRed,
          },
        },
      },
      dialogTitle: {
        secondary: {
          backgroundColor: theme.palette.secondary.main,
        },
      },

      icons: {
        primary: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.framework.system.white,
        },
        secondary: {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.framework.system.white,
        },
        success: {
          onHover: {
            color: theme.palette.framework.system.kellyGreen,
          },
        },
      },
      icon: {
        green: {
          backgroundColor: theme.palette.framework.system.green,
          color: theme.palette.framework.system.white,
        },
      },
      tooltip: {
        backgroundColor: theme.palette.framework.system.white,
        arrowColor: theme.palette.framework.system.white,
        color: theme.palette.framework.system.charcoal,
      },
      box: {
        container: {
          backgroundColor: theme.palette.framework.system.white,
        },
        titleBar: {
          color: theme.palette.framework.system.charcoal,
        },
      },
      typography: {
        color: theme.palette.framework.system.charcoal,
        success: {
          color: theme.palette.framework.alertColors.success,
        },
        status: {
          available: {
            color: theme.palette.framework.system.green,
          },
        },
      },
      grid: {
        content: {
          backgroundColor: theme.palette.framework.system.white,
        },
      },
      circularProgress: {
        color: theme.palette.framework.system.white,
      },
      listItem: {
        backgroundColor: theme.palette.framework.system.white,
      },
      avatar: {
        color: theme.palette.framework.system.white,
        green: {
          backgroundColor: theme.palette.framework.system.green,
        },
        primary: {
          backgroundColor: theme.palette.primary.main,
        },
      },
      card: {
        cardContent: {
          hoverColor: theme.palette.framework.system.skyBlue,
          hoverBackgroundColor: theme.palette.framework.white,
          hoverBorderColor: theme.palette.framework.system.skyBlue,
        },
      },
      textfield: {
        blankField: {
          color: theme.palette.framework.system.charcoal,
          backgroundColor: theme.palette.framework.system.whisper,
        },
        active: {
          color: theme.palette.framework.system.charcoal,
          backgroundColor: theme.palette.framework.system.smoke,
        },
      },
      accordion: {
        primary: {
          backgroundColor: theme.palette.framework.system.smoke,
        },
        secondary: {
          backgroundColor: theme.palette.framework.system.whisper,
        },
      },
      select: {
        statusDropdown: {
          oldStatusIndicator: {
            backgroundColor: theme.palette.framework.system.green,
          },
          newStatusIndicator: {
            onHoverBackgroundColor: {
              backgroundColor: theme.palette.framework.system.kellyGreen,
            },
            color: theme.palette.framework.system.kellyGreen,
            active: {
              backgroundColor: theme.palette.framework.system.mint,
            },
          },
        },
      },
      paper: {
        status: {
          green: {
            backgroundColor: theme.palette.framework.system.green,
          },
        },
      },
      tabs: {
        title: { color: theme.palette.framework.system.doveGray },
        notification: {
          backgroundColor: theme.palette.framework.system.red,
          color: theme.palette.framework.system.white,
        },
        border: { color: theme.palette.framework.system.silver },
      },
      snackBar: {
        light: {
          color: theme.palette.framework.system.charcoal,
          backgroundColor: theme.palette.framework.system.lightSkyBlue,
        },
        dark: {
          color: theme.palette.framework.system.white,
          backgroundColor: theme.palette.framework.system.charcoal,
        },
      },
      buttonDropdown: {
        onHover: {
          backgroundColor: theme.palette.framework.system.dimFadedBlack,
        },
        selected: {
          backgroundColor: theme.palette.framework.system.iceBerg,
        },
      },
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        stickyHeader: {
          backgroundColor: theme.palette.framework.system.backgroundGrey,
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: inputRoot,
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: inputRoot,
      },
    },

    MuiIcon: {
      variants: [
        {
          props: {
            color: 'green',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.framework.system.white,
            backgroundColor: thm.palette.framework.system.green,
          }),
        },
      ],
    },

    MuiDialogTitle: {
      variants: [
        {
          props: {
            color: 'primary', // blue color
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.framework.system.white,
            backgroundColor: thm.palette.secondary.main,
            padding: '16px 24px',
          }),
        },
        {
          props: {
            color: 'secondary', // white color
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.components.typography.color,
            backgroundColor: thm.palette.framework.system.white,
            padding: '30px 30px 20px 30px',
          }),
        },
      ],
    },
    MuiDialogActions: {
      variants: [
        {
          props: {
            color: 'primary', // Framework modal style (blue)
          },
          style: ({ theme: thm }) => ({
            padding: '12px 24px',
            background: thm.palette.framework.system.whisper,
            boxShadow: '0px -1px 3px #00000029',
          }),
        },
        {
          props: {
            color: 'secondary', // Framework dialog style (white)
          },
          style: ({ theme: thm }) => ({
            padding: '12px 30px 30px',
            background: thm.palette.common.white,
          }),
        },
      ],
    },
    MuiAvatar: {
      variants: [
        {
          props: {
            variant: 'green',
          },
          style: ({ theme: thm }) => ({
            color: `${thm.palette.components.avatar.color} !important`,
            backgroundColor: thm.palette.framework.system.green,
          }),
        },
        {
          props: {
            variant: 'primary',
          },
          style: ({ theme: thm }) => ({
            color: `${thm.palette.components.avatar.color} !important`,
            backgroundColor: thm.palette.primary.main,
          }),
        },
      ],
    },
    MuiIconButton: {
      variants: [
        {
          props: {
            color: 'primary',
            size: 'large',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.components.iconButton.primaryLarge.color,
            backgroundColor:
              thm.palette.components.iconButton.primaryLarge.backgroundColor,
            width: 40,
            height: 40,
            borderRadius: 4,
            marginTop: 2,
            '&:hover': {
              color: thm.palette.components.iconButton.primaryLarge.hoverColor,
              backgroundColor:
                thm.palette.components.iconButton.primaryLarge
                  .hoverBackgroundColor,
            },
            '&:active': {
              color: thm.palette.components.iconButton.primaryLarge.activeColor,
              backgroundColor:
                thm.palette.components.iconButton.primaryLarge
                  .activeBackgroundColor,
            },
            '&.Mui-disabled': {
              backgroundColor: thm.palette.framework.system.tertiaryGrey,
              opacity: 0.5,
              color: thm.palette.common.white,
            },
          }),
        },
        {
          props: {
            color: 'secondary',
            size: 'large',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.components.iconButton.secondaryLarge.color,
            backgroundColor:
              thm.palette.components.iconButton.secondaryLarge.backgroundColor,
            border: '1px solid',
            borderColor: thm.palette.components.iconButton.secondaryLarge.color,
            borderRadius: '50%',
            width: 36,
            height: 36,
            '&:hover': {
              color:
                thm.palette.components.iconButton.secondaryLarge.hoverColor,
              backgroundColor:
                thm.palette.components.iconButton.secondaryLarge
                  .hoverBackgroundColor,
            },
            '&:active': {
              color:
                thm.palette.components.iconButton.secondaryLarge.activeColor,
              backgroundColor:
                thm.palette.components.iconButton.secondaryLarge
                  .activeBackgroundColor,
            },
          }),
        },
        {
          props: {
            color: 'primary',
            size: 'medium',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.components.iconButton.primaryLarge.color,
            backgroundColor:
              thm.palette.components.iconButton.primaryLarge.backgroundColor,
            width: 28,
            height: 28,
            borderRadius: 4,
            marginTop: 2,
            '&:hover': {
              color: thm.palette.components.iconButton.primaryLarge.hoverColor,
              backgroundColor:
                thm.palette.components.iconButton.primaryLarge
                  .hoverBackgroundColor,
            },
            '&:active': {
              color: thm.palette.components.iconButton.primaryLarge.activeColor,
              backgroundColor:
                thm.palette.components.iconButton.primaryLarge
                  .activeBackgroundColor,
            },
            '&.Mui-disabled': {
              backgroundColor: thm.palette.framework.system.tertiaryGrey,
              opacity: 0.5,
              color: thm.palette.common.white,
            },
          }),
        },
        {
          props: {
            color: 'secondary',
            size: 'medium',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.components.iconButton.secondaryMedium.color,
            backgroundColor:
              thm.palette.components.iconButton.secondaryMedium.backgroundColor,
            padding: '3px',
            '&:hover': {
              color:
                thm.palette.components.iconButton.secondaryMedium.hoverColor,
              backgroundColor:
                thm.palette.components.iconButton.secondaryMedium
                  .hoverBackgroundColor,
            },
            '&:active': {
              color:
                thm.palette.components.iconButton.secondaryMedium.activeColor,
              backgroundColor:
                thm.palette.components.iconButton.secondaryMedium
                  .activeBackgroundColor,
            },
          }),
        },
        {
          props: {
            color: 'primary',
            size: 'small',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.components.iconButton.primarySmall.color,
            backgroundColor:
              thm.palette.components.iconButton.primarySmall.backgroundColor,
            width: 24,
            height: 24,
            '&:hover': {
              color: thm.palette.components.iconButton.primarySmall.hoverColor,
              backgroundColor:
                thm.palette.components.iconButton.primarySmall
                  .hoverBackgroundColor,
            },
            '&:active': {
              color: thm.palette.components.iconButton.primarySmall.activeColor,
              backgroundColor:
                thm.palette.components.iconButton.primarySmall
                  .activeBackgroundColor,
            },
          }),
        },
        {
          props: {
            color: 'secondary',
            size: 'small',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.components.iconButton.secondarySmall.color,
            backgroundColor:
              thm.palette.components.iconButton.secondarySmall.backgroundColor,
            '&:hover': {
              color:
                thm.palette.components.iconButton.secondarySmall.hoverColor,
              backgroundColor:
                thm.palette.components.iconButton.secondarySmall
                  .hoverBackgroundColor,
            },
            '&:active': {
              color:
                thm.palette.components.iconButton.secondarySmall.activeColor,
              backgroundColor:
                thm.palette.components.iconButton.secondarySmall
                  .activeBackgroundColor,
            },
          }),
        },
        {
          props: {
            color: 'tertiary',
            size: 'medium',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.components.iconButton.tertiaryMedium.color,
            backgroundColor:
              thm.palette.components.iconButton.tertiaryMedium.backgroundColor,
            padding: '3px',
            '&:hover': {
              color:
                thm.palette.components.iconButton.tertiaryMedium.hoverColor,
              backgroundColor:
                thm.palette.components.iconButton.tertiaryMedium
                  .hoverBackgroundColor,
            },
            '&:active': {
              color:
                thm.palette.components.iconButton.tertiaryMedium.activeColor,
              backgroundColor:
                thm.palette.components.iconButton.tertiaryMedium
                  .activeBackgroundColor,
            },
          }),
        },
        {
          props: {
            color: 'tertiary',
            size: 'small',
          },
          style: ({ theme: thm }) => ({
            borderRadius: '50%',
            width: thm.spacing(4),
            height: thm.spacing(4),
            '&:hover': {
              background:
                thm.palette.components.iconButton.tertiarySmall
                  .hoverBackgroundColor,
              color: thm.palette.components.iconButton.tertiarySmall.color,
            },
          }),
        },
      ],
    },
    MuiCircularProgress: {
      variants: [
        {
          props: {
            color: 'white',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.components.circularProgress.color,
          }),
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body1',
            color: 'charcoal',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.components.typography.color,
            fontWeight: 400,
          }),
        },
        {
          /** Code: Typography - Link */
          props: {
            variant: 'body1',
            color: 'navyBlue',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.framework.system.navyBlue,
            fontWeight: 500,
          }),
        },
        {
          props: {
            color: 'success',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.success.main,
          }),
        },
        {
          props: {
            color: 'status.available',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.components.typography.status.available.color,
          }),
        },
        {
          props: {
            variant: 'subtitle2',
            color: 'charcoal',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.components.typography.color,
            fontSize: '16px',
          }),
        },
      ],
    },

    MuiChip: {
      variants: [
        {
          props: {
            variant: 'new',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.components.chips.statusChips.new.color,
            border: `1px solid ${thm.palette.components.chips.statusChips.new.color}`,
            backgroundColor:
              thm.palette.components.chips.statusChips.new.backgroundColor,
          }),
        },
        {
          props: {
            variant: 'pending',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.components.chips.statusChips.pending.color,
            border: `1px solid ${thm.palette.components.chips.statusChips.pending.color}`,
            backgroundColor:
              thm.palette.components.chips.statusChips.pending.backgroundColor,
            cursor: 'pointer',
          }),
        },
        {
          props: {
            variant: 'approved',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.components.chips.statusChips.approved.color,
            border: `1px solid ${thm.palette.components.chips.statusChips.approved.color}`,
            backgroundColor:
              thm.palette.components.chips.statusChips.approved.backgroundColor,
            cursor: 'pointer',
          }),
        },
        {
          props: {
            variant: 'canceled',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.components.chips.statusChips.canceled.color,
            border: `1px solid ${thm.palette.components.chips.statusChips.canceled.color}`,
            backgroundColor:
              thm.palette.components.chips.statusChips.canceled.backgroundColor,
            cursor: 'pointer',
          }),
        },
        {
          props: {
            variant: 'failed',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.components.chips.statusChips.failed.color,
            border: `1px solid ${thm.palette.components.chips.statusChips.failed.color}`,
            backgroundColor:
              thm.palette.components.chips.statusChips.failed.backgroundColor,
          }),
        },
        {
          props: {
            variant: 'tags',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.components.chips.tags.color,
            backgroundColor: thm.palette.components.chips.tags.backgroundColor,
            fontSize: '14px',
            '&:hover': {
              color: thm.palette.components.chips.primary.color,
              backgroundColor:
                thm.palette.components.chips.secondary.backgroundColor,
            },
          }),
        },
        {
          props: {
            variant: 'additionalchip',
          },
          style: ({ theme: thm }) => ({
            margin: '3px',
            color: thm.palette.components.chips.tags.additionalChip.color,
            fontSize: '12px',
            backgroundColor:
              thm.palette.components.chips.tags.additionalChip.backgroundColor,
            '& .MuiChip-deleteIcon': {
              display: 'none',
            },
          }),
        },
        {
          props: {
            variant: 'filled',
            color: 'primary',
          },
          style: ({ theme: thm }) => ({
            '& .MuiChip-deleteIcon': {
              color: thm.palette.components.chips.primary.color,
            },
          }),
        },
        {
          props: {
            variant: 'filled',
            color: 'secondary',
          },
          style: ({ theme: thm }) => ({
            fontSize: '14px',
            '&:hover': {
              backgroundColor:
                thm.palette.components.chips.primary.backgroundColor,
            },
            '& .MuiChip-deleteIcon': {
              color: thm.palette.components.chips.secondary.color,
              fontSize: '14px',
            },
          }),
        },
        {
          props: {
            variant: 'outlined',
          },
          style: ({ theme: thm }) => ({
            backgroundColor: thm.palette.framework.system.white,
            border: `1px solid ${thm.palette.framework.system.silver}`,
            fontSize: '14px',
            '&:hover': {
              backgroundColor: `${thm.palette.framework.system.platinum} !important`,
            },
            '& .MuiChip-deleteIcon': {
              color: theme.palette.framework.system.doveGray,
              fontSize: '14px',
            },
            '&:hover .MuiChip-deleteIcon': {
              color: theme.palette.framework.system.doveGray,
              fontSize: '14px',
            },
          }),
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: {
            variant: 'contained',
            color: 'primary',
          },
          style: ({ theme: thm }) => ({
            backgroundColor:
              thm.palette.components.button.primary.backgroundColor,
            '&:hover': {
              backgroundColor:
                thm.palette.components.button.primary.hoverBackgroundColor,
            },
            '&.Mui-disabled': {
              backgroundColor:
                thm.palette.components.button.primary.disabledBackgroundColor,
              color: thm.palette.components.button.primary.disabledColor,
              opacity: '0.5',
            },
            '&.MuiLoadingButton-root.Mui-disabled': {
              '& .MuiLoadingButton-loadingIndicator': {
                color: theme.palette.framework.system.backgroundGrey,
              },
            },
          }),
        },
        {
          props: {
            variant: 'contained',
            color: 'secondary',
          },
          style: ({ theme: thm }) => ({
            backgroundColor:
              thm.palette.components.button.secondary.backgroundColor,
            '&:hover': {
              backgroundColor:
                thm.palette.components.button.secondary.hoverBackgroundColor,
            },
            '&.Mui-disabled': {
              backgroundColor:
                thm.palette.components.button.secondary.disabledBackgroundColor,
              color: thm.palette.components.button.secondary.disabledColor,
              opacity: '0.5',
            },
            '&.MuiLoadingButton-root.Mui-disabled': {
              '& .MuiLoadingButton-loadingIndicator': {
                color: theme.palette.framework.system.backgroundGrey,
              },
            },
          }),
        },
        {
          props: {
            variant: 'contained',
            color: 'tertiary',
          },
          style: ({ theme: thm }) => ({
            color: theme.palette.components.button.tertiary.color,
            backgroundColor:
              thm.palette.components.button.tertiary.backgroundColor,
            '&:hover': {
              backgroundColor:
                thm.palette.components.button.tertiary.hoverBackgroundColor,
            },
            '&.Mui-disabled': {
              backgroundColor:
                thm.palette.components.button.tertiary.disabledBackgroundColor,
              color: thm.palette.components.button.tertiary.disabledColor,
              opacity: '0.5',
            },
            '&.MuiLoadingButton-root.Mui-disabled': {
              '& .MuiLoadingButton-loadingIndicator': {
                color: theme.palette.framework.system.backgroundGrey,
              },
            },
          }),
        },
        {
          props: {
            variant: 'contained',
            size: 'large',
          },
          style: ({ theme: thm }) => ({
            height: '40px',
          }),
        },
        {
          props: {
            variant: 'contained',
            size: 'medium',
          },
          style: ({ theme: thm }) => ({
            height: '28px',
            letterSpacing: '0px',
          }),
        },
        {
          props: {
            variant: 'text',
            color: 'primary',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.components.button.text.primary.color,
            '&:hover': {
              color: thm.palette.components.button.text.primary.color,
              textDecoration: 'underline',
              backgroundColor: 'transparent',
            },
            '&.MuiLoadingButton-root.Mui-disabled': {
              '& .MuiLoadingButton-loadingIndicator': {
                color: theme.palette.secondary.main,
              },
            },
          }),
        },
        {
          props: {
            variant: 'text',
            color: 'secondary',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.components.button.text.secondary.color,
            '&:hover': {
              textDecoration: 'underline',
              backgroundColor: 'transparent',
            },
            '&.MuiLoadingButton-root.Mui-disabled': {
              '& .MuiLoadingButton-loadingIndicator': {
                color: theme.palette.secondary.main,
              },
            },
          }),
        },
        {
          props: {
            variant: 'text',
            color: 'tertiary',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.components.button.text.secondary.color,
            '&:hover': {
              color: thm.palette.components.button.text.secondary.color,
              textDecoration: 'underline',
              backgroundColor: 'transparent',
            },
          }),
        },
        {
          props: {
            variant: 'iconText',
            color: 'primary',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.framework.system.charcoal,
            margin: '-10px 0px 0px 0px',
            '&:hover': {
              color: thm.palette.framework.system.steelBlue,
              backgroundColor: 'transparent',
            },
            '& .MuiButton-startIcon': {
              width: '20px',
              height: '20px',
              margin: '4px 0px 0px 0px',
            },
            '& .MuiButton-endIcon': {
              width: '24px',
              height: '24px',
              margin: '4px 0px 0px 0px',
            },
          }),
        },
        {
          props: {
            variant: 'iconText',
            color: 'secondary',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.framework.system.charcoal,
            margin: '-5px 0px 0px 0px',
            '&:hover': {
              color: thm.palette.framework.system.steelBlue,
              backgroundColor: 'transparent',
            },
            '& .MuiButton-startIcon': {
              color: thm.palette.framework.system.white,
              backgroundColor: thm.palette.framework.system.defaultGray,
              width: '24px',
              height: '24px',
              borderRadius: '4px',
              padding: '2px 0px 0px 2px',
              margin: '0px 2px 0px 0px',
              '&:hover': {
                backgroundColor: thm.palette.framework.system.steelBlue,
              },
            },
            '& .MuiButton-endIcon': {
              color: thm.palette.framework.system.white,
              backgroundColor: thm.palette.framework.system.defaultGray,
              width: '24px',
              height: '24px',
              borderRadius: '4px',
              margin: '4px 0px 0px 0px',
              '&:hover': {
                backgroundColor: thm.palette.framework.system.steelBlue,
              },
            },
          }),
        },
        {
          props: {
            variant: 'iconText',
            color: 'tertiary',
          },
          style: ({ theme: thm }) => ({
            color: thm.palette.framework.system.steelBlue,
            margin: '-5px 0px 0px 0px',
            '&:hover': {
              color: thm.palette.framework.system.navyBlue,
              backgroundColor: 'transparent',
            },
            '& .MuiButton-startIcon': {
              width: '24px',
              height: '24px',
              borderRadius: '4px',
              padding: '2px 0px 0px 2px',
              margin: '0px 0px 0px 0px',
            },
            '& .MuiButton-endIcon': {
              width: '24px',
              height: '24px',
              borderRadius: '4px',
              margin: '4px 0px 0px 0px',
            },
          }),
        },
      ],
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ theme: thm }) => ({
          fontSize: '12px',
        }),
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: 'secondary',
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          padding: '12px',
          '&[data-variant="standard"]': {
            marginTop: '0px !important',
            backgroundColor: theme.palette.framework.system.white,
            color: theme.palette.text.primary,
            border: `1px solid ${theme.palette.framework.system.lightGray}`,
            boxShadow: '0px 3px 6px #00000029',
            fontWeight: 400,
            opacity: 1,
          },
        },
        arrow: {
          '&[data-variant="standard"]': {
            color: theme.palette.framework.system.white,
            opacity: 1,
            '&::before': {
              border: `1px solid ${theme.palette.framework.system.lightGray}`,
            },
          },
        },
      },
    },
    MuiTextField: {
      // Base custom theme for this component
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: ({ theme: thm }) => ({
          // Use theme value for this style override
        }),
      },
    },
    MuiSelect: {
      variants: [
        {
          props: {
            variant: 'filled',
          },
          style: ({ theme: thm }) => ({}),
        },
      ],
    },
    MuiTabs: {
      variants: [
        {
          props: {
            orientation: 'horizontal',
          },
          style: ({ theme: thm }) => ({
            height: '43px',
            minHeight: '40px',
            '& .MuiTabs-indicator': {
              width: '100%',
              backgroundColor: thm.palette.framework.system.violet,
              height: '3px',
            },
          }),
        },
        {
          props: {
            orientation: 'vertical',
          },
          style: ({ theme: thm }) => ({
            '& .MuiTabs-indicator': {
              display: 'flex',
              justifyContent: 'center',
              position: 'absolute',
              left: 0,
              top: 0,
              backgroundColor: thm.palette.framework.system.violet,
              width: '3px',
            },
          }),
        },
      ],
    },
    MuiTab: {
      styleOverrides: {
        root: ({ theme: thm }) => ({
          // Tabs override styles
          alignSelf: 'start',
          alignItems: 'flex-start',
          justifyContent: 'left',
          color: thm.palette.framework.system.doveGray,
          fontWeight: 'normal',
          fontSize: '14px',
          lineHeight: '19px',
          letterSpacing: '0px',
          opacity: 1,
          height: '43px',
          minHeight: '40px',
          maxWidth: '250px',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          '&.Mui-selected': {
            color: thm.palette.framework.system.violet,
          },
          '&.Mui-disabled': {
            color: thm.palette.framework.system.doveGray,
            opacity: 0.5,
          },
        }),
      },
    },
    MuiBadge: {
      variants: [
        {
          props: {
            variant: 'notification',
          },
          style: ({ theme: thm }) => ({
            '& .MuiBadge-badge': {
              minWidth: '16px',
              borderRadius: '8px',
              height: '16px',
              width: '16px',
              padding: '0px',
              textAlign: 'center',
              fontSize: '11px',
              lineHeight: '15px',
              letterSpacing: '0px',
              color: thm.palette.components.tabs.notification.color,
              opacity: 1,
              backgroundColor:
                thm.palette.components.tabs.notification.backgroundColor,
            },
          }),
        },
      ],
    },
    MuiSnackbar: {
      variants: [
        {
          props: {
            color: 'light',
          },
          style: ({ theme: thm }) => ({
            color: `${thm.palette.components.snackBar.light.color} !important`,
            backgroundColor: `${thm.palette.components.snackBar.light.backgroundColor}!important`,
            fontSize: '14px',
          }),
        },
        {
          props: {
            color: 'dark',
          },
          style: ({ theme: thm }) => ({
            color: `${thm.palette.components.snackBar.dark.color} !important`,
            backgroundColor: `${thm.palette.components.snackBar.dark.backgroundColor} !important`,
            fontSize: '14px',
          }),
        },
      ],
    },
    MuiSnackbarContent: {
      variants: [
        {
          props: {
            color: 'light',
          },
          style: ({ theme: thm }) => ({
            color: `${thm.palette.components.snackBar.light.color} !important`,
            backgroundColor: `${thm.palette.components.snackBar.light.backgroundColor}!important`,
            fontSize: '14px',
            cursor: 'pointer',
          }),
        },
        {
          props: {
            color: 'dark',
          },
          style: ({ theme: thm }) => ({
            color: `${thm.palette.components.snackBar.dark.color} !important`,
            backgroundColor: `${thm.palette.components.snackBar.dark.backgroundColor} !important`,
            fontSize: '14px',
            cursor: 'pointer',
          }),
        },
      ],
    },
    MuiDivider: {
      variants: [
        {
          props: {
            variant: 'wideMargin',
            orientation: 'horizontal',
          },
          style: ({ theme: thm }) => ({
            margin: '12px 0',
          }),
        },
        {
          props: {
            variant: 'wideMargin',
            orientation: 'vertical',
          },
          style: ({ theme: thm }) => ({
            margin: '0 12px',
          }),
        },
      ],
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          textAlign: 'left',
          color: theme.palette.primary.main,
          fontSize: '14px',
          cursor: 'pointer',
          textDecoration: 'none',
          ':hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
} as ThemeOptions);
theme.typography.body1 = {
  fontSize: '12px',
  [theme.breakpoints.up('lg')]: {
    fontSize: '14px',
  },
};

theme.components.MuiDialog = {
  ...theme.components.MuiDialog,
  defaultProps: {
    ...theme.components.MuiDialog?.defaultProps,
    transitionDuration: {
      enter: 0,
      exit: 0,
      appear: 0,
    },
  },
};

export const secondaryTheme = createTheme({
  ...theme,
  palette: {
    primary: {
      main: '#009AD9',
    },
    secondary: {
      main: '#006FB9',
    },
  },
});

export const GlobalStyle = createGlobalStyle({
  /** ----------- Global ----------- */
  html: {
    // overflow: 'hidden',
    // this was preventing scroll on mobile resolutions - commenting out for now,
    // but need to find a way to move all content into Body. This is only a temp fix and the
    // scrollbar is for entire window height, but the top of scroll should start below the nav menu
  },
  body: {
    overflow: 'auto',
    height: '100%',
    width: '100%',
    fontFamily: 'Roboto, Helvetica Neue, Helvetica, Arial, sans-serif',
    '&[data-dialog="true"] [role="tooltip"]': {
      zIndex: 1302,
    },
  },
  '#app-component-access-id, .MuiDataGrid-virtualScroller, .MuiPaper-root.MuiTableContainer-root':
    {
      '&::-webkit-scrollbar': {
        /* Uncomment to have the scrollbar actually hide/show on hover instead of being transparent. May cause screen to adjust a few pixels */
        /* display: 'none', */
        width: '16px',
        height: '16px',
        backgroundColor: '#F5F5F5',
      },
      '&::-webkit-scrollbar-button': {
        display: 'none',
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: 9999,
        backgroundColor: '#C7C7C7',
        minHeight: 64,
        border: '4px solid rgba(0,0,0,0.0)',
        '&:hover': {
          backgroundColor: '#7C7C7C',
        },
      },
      '&::-webkit-scrollbar-corner': {
        backgroundColor: '#F5F5F5',
      },
    },
  '.MuiDataGrid-virtualScroller': {
    '&::-webkit-scrollbar': {
      ':horizontal': {
        borderTop: '1px solid #CCCCCC',
      },
      ':vertical': {
        borderLeft: '1px solid #CCCCCC',
      },
    },
  },
  '&::-webkit-scrollbar': {
    opacity: 0,
    backgroundColor: 'transparent',
    width: '12px',
    height: '12px',
  },
  '&::-webkit-scrollbar-button': {
    display: 'none',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: 9999,
    minHeight: 44,
    border: '3px solid rgba(0,0,0,0.0)',
    backgroundClip: 'padding-box',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
  '&:not(.MuiDataGrid-virtualScroller):hover': {
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#C7C7C7',
    },
  },
  '#root': {
    minHeight: '100vh',
    minWidth: '100vw',
  },
  'p label': {
    lineHeight: '1.5em',
    fontSize: '14px',
    color: colors.text,
  },
  'input select': {
    fontFamily: 'inherit',
    fontSize: 'inherit',
  },
  '.link': {
    cursor: 'pointer',
    color: colors.customBlue,
    '&:visited': {
      color: colors.customBlue,
    },
  },
  '.small-text': {
    fontSize: '12px',
  },
  '.label': {
    color: colors.text,
  },
  '.detail-text': {
    color: colors.customDeeperBlue,
    fontSize: '14px',
  },
  '.title-standard': {
    color: colors.customPurple,
  },
  '.subtitle1': {
    color: colors.customPurple,
    fontSize: '16px',
  },
  '.subtitle2': {
    color: colors.darkText,
    fontSize: '16px',
  },
  '.filter-title': {
    color: '#707070',
    fontSize: '12px',
  },
  '.disabled': {
    color: 'rgba(0, 0, 0, 0.38)',
    '&.input': {
      cursor: 'not-allowed',
    },
  } /** ----------- Material UI Overrides ----------- */,

  '.MuiAlert-root': {
    fontSize: '14px',
  } /** ----------- Layout ----------- */,
  '.page': {
    padding: '12px',
  },
  '.page-section': {
    padding: '12px',
  },
  '.page-section-vertical': {
    padding: '12px 0px',
  },
  '.page-section-horizontal': {
    padding: '0px 12px',
  },
  '.page-title': {
    fontSize: '18px',
    color: colors.darkText,
    fontWeight: 450,
  },
  '.layout': {
    padding: '12px',
  },
  '.divider-horizontal': {
    margin: '20px 0px',
  },
  '.divider-horizontal > div': {
    height: '1px',
    backgroundColor: '#D1D1D1',
  } /** Tabs */,
  '.tab-container': {
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
    borderBottom: '1px solid #e3dfdf',
  },
  '.tab': {
    width: '100%',
  },
  '.tab-box': {
    padding: '24px 0 !important',
  },
  '.default-tab': {
    color: '#333333',

    opacity: 1,
    '&.profileTab': {
      backgroundColor: '#fff',
      color: colors.text,
      textTransform: 'none',
      fontSize: '16px',
      width: 'inherit',
    },
  },
  '.active-tab': {
    color: colors.customPurple,
  },
  '.active-tab-profile': {
    color: colors.customBlue,
    backgroundColor: colors.white,
    textTransform: 'none',
    fontSize: '16px',
    width: '20px',
  },

  '.tab-indicator': {
    height: 4,
    backgroundColor: colors.customPurple,
    '&.profileTab': {
      backgroundColor: colors.customBlue,
    },
  } /** ----------- Containers ----------- */,
  '.paper': {
    width: '100%',
    border: `1px solid ${colors.containerBorder}`,
    borderRadius: container.borderRadius,
    padding: '10px 25px 25px 22px',
    '&.paper-small': {
      padding: '1px',
    },
  },
  '.paper-2': {
    border: '1px solid #CCCCCC',
    borderRadius: '0px',
  },
  '.center': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '.center-fullscreen': {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  } /** ----------- Controls ----------- */ /** Buttons */,

  '.cancelButton': {
    backgroundColor: colors.customGrey,
    marginRight: '10px',

    color: colors.white,
    '&:hover': {
      backgroundColor: colors.customGrey,
    },
  },
  '.button': {
    backgroundColor: colors.customBlue,
    color: colors.white,
    '&:hover': {
      backgroundColor: colors.customBlue,
    },
  },
  '.action-button': {
    backgroundColor: '#006FB9',
    paddingLeft: '25px',
    paddingRight: '25px',
    color: 'white',
    '&:hover': {
      backgroundColor: '#006FB9',
    },
  } /** Checkbox */,
  '.checkbox.MuiCheckbox-colorSecondary.Mui-checked': {
    color: colors.customLightBlue,
  },
  '.checkboxIcon': {
    '&:hover': {
      fill: colors.customLightBlue,
    },
  } /** ToolTip  */,
  '.customGlobalTooltip': {
    backgroundColor: colors.white,
    color: colors.customNavyBlue,
    opacity: 1,
    minWidth: 100,
    textAlign: 'center',
    fontFamily: 'IBM Plex Sans, sans-serif',
    font: 'normal normal normal 12px/20px IBM Plex Sans',
    border: `1px solid ${colors.customDarkGrey}`,
    display: 'inline-block',
  },
  '.customGlobalArrow': {
    color: colors.white,
    opacity: 1,
    marginRight: 15,
    '&::before': {
      border: `1px solid ${colors.customDarkGrey}`,
    },
  } /** Toggle Button Group */,
  '.toggle-button-group': {
    '& .Mui-selected': {
      backgroundColor: colors.customPurple,
      color: 'white',
      '&:hover': {
        backgroundColor: colors.customPurple,
        color: 'white',
      },
    },
  } /** Textfield */,
  '.outlined-textfield': {
    backgroundColor: '#fff',
    borderRadius: '4px',
  },
  '.outlined-textfield-input': {
    backgroundColor: '#fff',
    borderRadius: '4px',
    fontSize: '14px',
  } /** Snackbar */,
  '.absoluteSnackbar': {
    position: 'absolute',
    bottom: 84,
    width: '100%',
  },
  '.unordered-list': {
    margin: '0px',
    padding: '0px',
    paddingLeft: '16px',
    listStyleType: 'disc',
    '& > li': {
      lineHeight: 1.5,
    },
  },
  '.unordered-list-item': {
    paddingTop: '3px',
    '&:not(:last-child)': {
      paddingTop: '3px !important',
      paddingBottom: '3px !important',
    },
    '&:first-child': {
      paddingTop: '0px !important',
      paddingBottom: '3px !important',
    },
    '&:only-child': {
      paddingTop: '0px !important',
      paddingBottom: '0px !important',
    },
  } /** ----------- Notifications ----------- */,
  '.snackbar-success': {
    color: 'green',
  },
  '.snackbar-error': {
    color: 'red',
  },
  '.disable-scroll': {
    overflowY: 'hidden',
    marginRight: 17,
  } /** ---------Dialog---------- **/,
  '.labelDialog': {
    color: '#0c0c0c',
    paddingBottom: 4,
  } /** ---------X-Grid---------- **/,
  '.x-grid-centered-cell': {
    // center items if alignment is set to center
    margin: '0 auto', // padding to account for header menu icon
    paddingRight: '20px',
  },
  '.x-grid-header': {
    backgroundColor: '#F4F5F7',
  },
  '*[role="tooltip"][x-placement="right-start"]': {
    'max-width': '50%',
    'white-space': 'break-spaces',
    'max-height': '150px',
    'overflow-y': 'scroll',
    'box-shadow':
      '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  },
  '.xgrid-row-highlight': {
    backgroundColor: '#BADAEE',
  },
  '#columns-filter-operator-select-label': {
    marginRight: '-2px',
  },
});
