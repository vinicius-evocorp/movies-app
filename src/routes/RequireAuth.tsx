import { Navigate, useLocation } from 'react-router-dom';

const isAuth = false;

export function RequireAuth({ children }: { children: JSX.Element }) {
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
}
