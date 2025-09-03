import { Box, CircularProgress, Fab } from '@mui/material';
import React, { lazy, Suspense } from 'react';
import { theme } from 'styles/global-styles';

interface Opts {
  fallback: React.ReactNode;
}
type Unpromisify<T> = T extends Promise<infer P> ? P : never;

export const lazyLoad = <T extends Promise<any>, U extends React.ComponentType<any>>(
  importFunc: () => T,
  selectorFunc?: (s: Unpromisify<T>) => U,
  opts: Opts = {
    fallback: (
      <div className="center" style={{ height: '100%' }}>
        <Box sx={{ m: 1, position: 'relative' }}>
          <div>
            <CircularProgress 
              size={24}
              thickness={2}
              sx={{
                color: theme.palette.system.mmOrange,
                position: 'absolute',
                top: -2.5,
                left: -2.5,
                zIndex: 1,
              }}
            />
          </div>
        </Box>
      </div>
    ),
  },
) => {
  // let lazyFactory: () => Promise<{ default: U }> = importFunc;
  let lazyFactory: any = importFunc;

  if (selectorFunc) {
    lazyFactory = () => {
      const pageHasAlreadyBeenForceRefreshed = JSON.parse(
        window.localStorage.getItem('page-has-been-force-refreshed') || 'false',
      );

      return importFunc()
        .then(module => {
          window.localStorage.setItem('page-has-been-force-refreshed', 'false');
          return { default: selectorFunc(module) };
        })
        .catch(err => {
          if (!pageHasAlreadyBeenForceRefreshed) {
            window.localStorage.setItem('page-has-been-force-refreshed', 'true');
            return window.location.reload();
          }
          throw err;
        });
    };
  }

  const LazyComponent = lazy(lazyFactory);

  return (props: React.ComponentProps<U>): JSX.Element => (
    <Suspense fallback={opts.fallback!}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
