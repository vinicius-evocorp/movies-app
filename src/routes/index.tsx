import { Routes, Route, Navigate } from 'react-router-dom';

import { MainLayout } from '@/layouts/MainLayout/MainLayout';
import { Home } from '@/pages/Home';
import { Movie } from '@/pages/Movie';
import { SignIn } from '@/pages/SignIn';
import { Watchlist } from '@/pages/Watchlist';

import { RequireAuth } from './RequireAuth';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/watchlist"
          element={
            <RequireAuth>
              <Watchlist />
            </RequireAuth>
          }
        />
      </Route>

      <Route path="/movie/:id" element={<Movie />} />

      <Route path="/signin" element={<SignIn />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
