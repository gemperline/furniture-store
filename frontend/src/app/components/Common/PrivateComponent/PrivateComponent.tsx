import React from 'react';
import { useSelector } from 'react-redux';

export const PrivateComponent = ({
//   roles = [userRoles.all],
  ...rest
}: {
  [x: string]: any;
//   roles?: (keyof IRoles)[] | undefined;
}) => {
//   const userInfo = useSelector(selectUser);
  return (
    // Authorized(roles, userInfo?.userInfo) ? 
    <React.Fragment>{rest.children}</React.Fragment> 
    // : <></>
    );
};
