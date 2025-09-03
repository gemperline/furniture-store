import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from './layout/Layout';
import { Route } from 'react-router-dom';
// import { NetworkError } from './components/Common/NetworkError/NetworkError';

export const PrivateRoute = ({
  Component,
  // roles = [userRoles.all],
  removeLayout = false,
  ...rest
}: {
  [x: string]: any;
  Component: any;
  //   roles?: (keyof IRoles)[] | undefined;
  removeLayout?: boolean;
}) => {
  const dispatch = useDispatch();
  const authorized = true;
  return (
    <>
      <Layout {...rest} Component={Component} />
    </>
  );
};
