import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '@/pages/Home';
import { Movie } from '@/pages/Movie';
import { Watchlist } from '@/pages/Watchlist';

import { RequireAuth } from './RequireAuth';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route
        path="/watchlist"
        element={
          <RequireAuth>
            <Watchlist />
          </RequireAuth>
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
