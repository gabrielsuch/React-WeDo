import { Redirect, Route as ReactDOMRoute } from 'react-router';

import { useAuth } from '../providers/Auth';

export const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { access } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!access ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? '/' : 'dashboard'} />
        );
      }}
    />
  );
};
