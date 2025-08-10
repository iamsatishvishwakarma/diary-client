import type { JSX } from 'react';

interface AppRouteProps {
  component: string | React.LazyExoticComponent<() => JSX.Element>;
}

const AppRoute = (props: AppRouteProps) => {
  const { component: Component, ...rest } = props;
  return <Component {...rest} />;
};

export default AppRoute;
