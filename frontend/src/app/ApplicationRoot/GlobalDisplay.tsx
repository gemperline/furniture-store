/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { Portal } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { GenericDialog } from '../components/Modals/GenericDialog';

export const GlobalDisplayContext = React.createContext({
  /** @param className className for the snackbar, default set to absoluteSnackbar */
  setSnackbarPortalRef: (refCurrent, className = 'absoluteSnackbar') => {},
  resetSnackbarPortal: () => {},
  setSnackBarAction: (element: JSX.Element) => {},
});

export const GlobalDisplay = props => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
//   useInjectReducer({ key: userSliceKey, reducer: userReducer });
//   useInjectSaga({ key: userSliceKey, saga: userSaga });

  /** Optimizely set user */
  const isAuthenticated = true;

  return (
    <GlobalDisplayContext.Provider
      value={{
        setSnackbarPortalRef: null,
        resetSnackbarPortal: null,
        setSnackBarAction: null,
      }}
    >
      {props.children}
      <GenericDialog
        open={false}
        dialogTitleProps={{
          text: t('global.newAppVersion.title'),
          closeButton: null,
        }}
        dialogContentProps={{
          content: t('global.newAppVersion.content'),
        }}
        dialogActions={[
          {
            text: 'Refresh',
            variant: 'contained',
            onClick: () => {
              window.location.reload();
            },
          },
        ]}
      />
      <Portal />
    </GlobalDisplayContext.Provider>
  );
};
