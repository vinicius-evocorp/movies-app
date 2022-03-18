import { Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <div>
      <p>Header layout</p>
      <Outlet />
    </div>
  );
}
